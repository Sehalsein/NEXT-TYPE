import React from 'react';
import Col from 'react-bootstrap/Col';
import SimpleReactValidator from 'simple-react-validator';
import FormGenerator from '@components/FormBuilder/FormGenerator';

type State = {
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

type Props = {
    formConfig: any;
};

class UserAdd extends React.Component<Props, State> {
    private validator: SimpleReactValidator;

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

        this.validator = new SimpleReactValidator({
            autoForceUpdate: this,
            element: (message): JSX.Element => <div className="errorMessage">{message}</div>,
        });
    }

    handleInput = (e): void => {
        const { value, name } = e.target;
        this.setState(prevState => ({
            formValue: {
                ...prevState.formValue,
                [name]: value,
            },
        }));
    };

    formSubmit = (): void => {
        const { formValue } = this.state;

        console.log('Submit');
        console.log(formValue);
    };

    formReset = (): void => {
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

    render(): JSX.Element {
        const { formValue } = this.state;
        const { formConfig } = this.props;
        return (
            <>
                <h1>User Creation</h1>
                <Col sm={12}>
                    {/* <div className="box-card"> */}
                    <FormGenerator
                        formConfig={formConfig}
                        handleInput={this.handleInput}
                        formData={formValue}
                        onSubmit={this.formSubmit}
                        onSecondaryButton={this.formReset}
                        validator={this.validator}
                    />
                    {/* </div> */}
                </Col>
            </>
        );
    }
}

export default UserAdd;
