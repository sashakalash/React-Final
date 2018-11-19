import React, {Component} from 'react';
import noUiSlider from '../../../../../node_modules/nouislider/distribute/nouislider.min.js'

class RangeFilter extends Component {
  constructor(props) {
    super(props);

    this.slider = null;
    this.isInitSlider = false;

    this.state = {
      min: this.props.min || 0,
      max: this.props.max || 57000
    };

    this.minInput = null;
    this.maxInput = null;

    this.onInputMaxChange = this.onInputMaxChange.bind(this);
    this.onInputMinChange = this.onInputMinChange.bind(this);
  }

  componentDidMount() {
    this.initSlider();
    this.initEvents();
  }

  componentWillUnmount() {
    this.slider.noUiSlider && this.slider.noUiSlider.destroy();
  }

  onInputMinChange(event) {
    let value = this.inputHandler(event);
    this.setState({min: value});
    this.slider.noUiSlider.set([value, this.state.max]);
  }

  onInputMaxChange(event) {
    let value = this.inputHandler(event);
    this.setState({max: value});
    this.slider.noUiSlider.set([this.state.min, value]);
  }

  inputHandler(event) {
    let value = Number(event.currentTarget.value.replace(/[^0-9.]/g, ''));
    event.currentTarget.value = value;
    return value;
  }

  initSlider() {
    if (this.isInitSlider) {
      return;
    }

    let self = this;

    noUiSlider.create(this.slider, {
      start: [self.state.min, self.state.max],
      connect: true,
      step: 10,
      range: {
        'min': self.state.min,
        'max': self.state.max
      }
    });
  }

  initEvents() {
    if (!this.slider.noUiSlider) {
      return;
    }

    this.slider.noUiSlider.on('update', (values) => {
      if (values.length > 1) {
        this.setState(this.getValues(values))
      }
    });

    this.slider.noUiSlider.on('end', (values) => {
      if (values.length > 1) {
        let {min, max} = this.getValues(values);
        this.minInput.value =  min;
        this.maxInput.value =  max;
        this.props.onChange && this.props.onChange({min, max});
      }
    });
  }

  getValues(values) {
    return {
      min: Number(parseInt(values[0]).toFixed(0)),
      max: Number(parseInt(values[1]).toFixed(0))
    }
  }

  render() {
    return (
      <div className="price-slider">
        <div className="uislider" ref={el => this.slider = el}>
        </div>
        <div className="counter">
          <input type="text" className="input-1"
             ref={el => this.minInput = el}
             defaultValue={this.state.min}
             onChange={this.onInputMinChange}
          />
          <div className="input-separator"></div>
          <input type="text" className="input-2"
             ref={el => this.maxInput = el}
             defaultValue={this.state.max}
             onChange={this.onInputMaxChange}
          />
        </div>
      </div>
    );
  }
}

export default RangeFilter;



