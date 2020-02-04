import React from 'react';
import FormBuilder from '@components/FormBuilder/FormBuilder';
import Col from 'react-bootstrap/Col';

const formConfig = {
  fields: [
    {
      label: 'Name',
      name: 'name',
      type: 'text',
      placeholder: 'Enter Name',
    },
    {
      label: 'Employee Id',
      name: 'employeeId',
      type: 'text',
      placeholder: 'Enter Employee Id',
    },
    {
      label: 'Email Id for Login',
      name: 'email',
      type: 'text',
      placeholder: 'user@ayanapower.com',
    },
    {
      inputType: 'select',
      label: 'Designation',
      name: 'designation',
      type: 'text',
      placeholder: 'Select Designation',
      options: ['ORG Executive', 'ORG Manager', 'ORG Technician'],
      component: <h1>ASDs</h1>,
    },
    {
      label: 'Mobile No',
      name: 'mobileNo',
      type: 'text',
      placeholder: 'Enter Mobile No',
    },
    {
      label: 'Date Of Joining',
      name: 'dateOfJoining',
      type: 'date',
      placeholder: 'dd/mm/yyyy',
    },
    {
      inputType: 'select',
      label: 'Reporting Manager',
      name: 'reportingManager',
      type: 'text',
      placeholder: 'Select Reporting Manager',
      options: ['Sehal Sein'],
    },
    {
      inputType: 'select',
      label: 'Type',
      name: 'type',
      type: 'text',
      placeholder: 'Select Type',
      options: ['Ayana Investor', 'Ayana Employee'],
    },
    {
      label: 'Department',
      name: 'department',
      type: 'text',
      placeholder: 'Select Department',
    },
  ],
  primaryButton: {
    title: 'Submit',
  },
  secondaryButton: {
    title: 'Reset',
  },
};

type MyState = {
  formValue: {
    name: '';
    employeeId: '';
    email: '';
    designation: '';
    mobileNo: '';
    dateOfJoining: '';
    reportingManager: '';
    type: '';
    department: '';
  };
};

// eslint-disable-next-line react/prefer-stateless-function
class UserAdd extends React.Component<{}, MyState> {
  constructor(prop) {
    super(prop);
    this.state = {
      formValue: {
        name: '',
        employeeId: '',
        email: '',
        designation: '',
        mobileNo: '',
        dateOfJoining: '',
        reportingManager: '',
        type: '',
        department: '',
      },
    };
  }

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState((prevState) => ({
      formValue: {
        ...prevState.formValue,
        [name]: value,
      },
    }));
  };

  formSubmit = () => {
    const { formValue } = this.state;
    console.log('Submit');
    console.log(formValue);
  };

  formReset = () => {
    console.log('Clear');
    this.setState({
      formValue: {
        name: '',
        employeeId: '',
        email: '',
        designation: '',
        mobileNo: '',
        dateOfJoining: '',
        reportingManager: '',
        type: '',
        department: '',
      },
    });
  };

  render() {
    const { formValue } = this.state;
    return (
      <>
        <h1>User Creation</h1>
        <Col sm={12}>
          <div className="box-card">
            <FormBuilder
              formConfig={formConfig}
              handleInput={this.handleInput}
              formData={formValue}
              onSubmit={this.formSubmit}
              onSecondaryButton={this.formReset}
            />
          </div>
        </Col>
      </>
    );
  }
}

export default UserAdd;
