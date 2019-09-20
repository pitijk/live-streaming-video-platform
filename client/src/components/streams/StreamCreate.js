import { Field, reduxForm } from "redux-form";
import React from "react";

class StreamCreate extends React.Component {
  renderError({ error, touched }) {
    const red = { color: "red" };
    if (touched && error) {
      return <div style={red}>{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.touched && meta.error ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input className="input" {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit({ title, description }) {
    console.log(title, description);
  }
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
