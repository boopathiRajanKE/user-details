import * as React from "react"
import { useFormik } from "formik"
import * as Yup from "Yup"

function UserProfile(props) {
  const {
    data: {
      email = "",
      first_name: firstName = "",
      last_name: lastName = "",
    } = {},
  } = props

  const initialValues = {
    firstName,
    lastName,
    email,
    address: "",
    city: "",
    team: "",
    acceptTerms: false,
  }

  const onSubmit = (values) => console.log({ values })

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Enter the First Name"),
    lastName: Yup.string().required("Enter the Last Name"),
    address: Yup.string()
      .required("Enter the Address")
      .min(10, "Min 10 characters!"),
    city: Yup.string().required("Enter the City"),
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Enter the Email"),
    team: Yup.string().required("team is required!"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "Accept Terms & Conditions is required"
    ),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <div className="bs-form-wrapper">
      <form onSubmit={formik.handleSubmit}>
        <div className="bs-form-top form-section">
          <div className="bs-first-name">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="bs-error">{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="bs-last-name">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="bs-error">{formik.errors.lastName}</div>
            ) : null}
          </div>
          <div className="bs-email">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.lastName && formik.errors.email ? (
              <div className="bs-error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>

        <div className="bs-form-middle form-section">
          <div className="bs-address">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              {...formik.getFieldProps("address")}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="bs-error">{formik.errors.address}</div>
            ) : null}
          </div>
          <div className="bs-city">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="bs-error">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="bs-team-field">
            <select name="team" id="team" {...formik.getFieldProps("team")}>
              <option value="" label="Select the team" />
              <option value="Red" label="Red" />
              <option value="Yellow" label="Yellow" />
              <option value="Blue" label="Blue" />
            </select>
            {formik.touched.team && formik.errors.team && (
              <div className="bs-error">{formik.errors.team}</div>
            )}
          </div>
        </div>

        <div className="bs-form-bottom form-section">
          <div className="bs-terms-block">
            <input
              type="checkbox"
              id="agreement"
              {...formik.getFieldProps("acceptTerms")}
            />
            <label htmlFor="agreement">Kindly accept Terms & Conditions</label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <div className="bs-error">{formik.errors.acceptTerms}</div>
            )}
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default UserProfile
export { UserProfile }
