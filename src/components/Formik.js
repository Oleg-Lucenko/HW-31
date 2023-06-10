
import {useFormik} from 'formik';
import './components.css';

const validate = (values) => {
  const errors = {};

    if (values.name === '') {
      errors.name = 'Name should not be empty';
    }
    if (!values.email.includes('@')) {
      errors.email = 'Email should contain "@" ';
    }
    if (isNaN(Number(values.number))){
      errors.number = 'Phone number contain only digits';
    }
    if (values.number.length < 12 && Number(values.number)) {
      errors.number = 'Phone number must be 12 digits long';
    }
  return errors;
}

function FormikInput() {
    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          number: ''
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
      <div className='form-container'>
        <form onSubmit={formik.handleSubmit} className='formik'>

        <div className='input-container'>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />

          {formik.touched.name && formik.errors.name && <div className='error'>{formik.errors.name}</div>}
        </div>
        <div className='input-container'>
          <label htmlFor="email">Email Address:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />

          {formik.touched.email && formik.errors.email && <div className='error'>{formik.errors.email}</div>}
        </div>

        <div className='input-container'>
          <label htmlFor="number">Phone number:</label>
          <input
            id="number"
            name="number"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
          />

          {formik.touched.number && formik.errors.number && <div className='error'>{formik.errors.number}</div>}
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
    );
};

export default FormikInput;