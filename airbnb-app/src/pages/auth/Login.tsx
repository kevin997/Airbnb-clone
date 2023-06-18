import React from 'react';
import { Card } from 'react-bootstrap';

function Login() {

    const BottomLink = () => {

        return (<>

            <div className='row p-4'>
                <div className='col-12'>
                    <span>Already have an account ?</span> <span><a href='#'>Sign up</a></span>
                </div>
            </div>
        </>);

    }

    return (
        <>
            <Card className='auth-layout'>
                <Card.Header as="h3">Sign In</Card.Header>
                <Card.Body>
                    <form>
                        <div className='mb-2'>
                            <label htmlFor="email">Email</label>
                            <input className='form-control' type='text' name='email' />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="password">Password</label>
                            <input className='form-control' type='password' name='password' />
                        </div>
                        <div className="d-grid gap-1">
                            <button type='submit' className='btn btn-primary btn-block'>Log in</button>
                        </div>
                    </form>
                    <BottomLink />
                </Card.Body>
            </Card>
        </>
    )
}

export default Login
