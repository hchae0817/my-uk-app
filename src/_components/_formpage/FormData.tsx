// FormData class to handle form data and validation
export class FormData {
  name: string;
  email: string;
  category: string;
  message: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.category = "";
    this.message = "";
  }

  // Validate fields
  validate(): { [key: string]: string; } {
    const errors: { [key: string]: string; } = {};

    // Name validation
    if (!this.name.trim()) {
      errors.name = "Name is required";
    }

    // Email validation
    if (!this.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Message validation
    if (this.message.length > 500) {
      errors.message = "Message cannot exceed 500 characters";
    } else if (!this.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  }
}
