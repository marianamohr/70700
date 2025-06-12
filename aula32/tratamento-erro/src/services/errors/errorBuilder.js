class CustomErrorBuilder {
  constructor() {
    this.name = "Error";
    this.message = "";
    this.code = 1;
    this.cause = null;
  }

  Name(name) {
    this.name = name;
    return this;
  }

  Message(message) {
    this.message = message;
    return this;
  }

  Code(code) {
    this.code = code;
    return this;
  }

  Cause(cause) {
    this.cause = cause;
    return this;
  }

  Build() {
    const error = new Error(this.message);
    error.name = this.name;
    error.code = this.code;
    error.cause = this.cause;
    return error;
  }

  Throw() {
    throw this.Build();
  }
}

class CustomError {
  static Builder() {
    return new CustomErrorBuilder();
  }
}

module.exports = CustomError;
