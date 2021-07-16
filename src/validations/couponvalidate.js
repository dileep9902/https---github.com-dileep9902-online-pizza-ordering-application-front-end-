export default function CouponValidation(values) {
    let errors = {};
  
    if (!values.couponName.trim()) {
      errors.couponName = 'Username required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  

    if (!values.coupoDescription.trim()) {
        errors.couponDescription = 'Username required';
      }
    // if (!values.email) {
    //   errors.email = 'Email required';
    // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //   errors.email = 'Email address is invalid';
    // }
    if (!values.couponDiscount) {
      errors.password = 'Coupon discount is required';
    } else if (values.couponDiscount.min > 0) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    // if (!values.password2) {
    //   errors.password2 = 'Password is required';
    // } else if (values.password2 !== values.password) {
    //   errors.password2 = 'Passwords do not match';
    // }
    return errors;
  }