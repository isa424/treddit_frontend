import React, { Fragment, useState } from 'react';
import Layout from '../components/layout';
import { useForm } from 'react-hook-form';
import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/client';
import isEmail from 'validator/lib/isEmail';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface IForm {
	email: string;
	password: string;
	remember: boolean;
}

const Login: NextPage = () => {
	const [loading, setLoading] = useState(false);
	const [session] = useSession();
	const { register, handleSubmit, errors, formState } = useForm<IForm>({
		defaultValues: {
			email: '',
			password: '',
			remember: false,
		},
	});

	// Normal login does not work for now
	const onSubmit = (data: IForm) => {
		setLoading(true);

		window.setTimeout(() => setLoading(false), 2000);
	};

	const loginGithub = async () => {
		try {
			await signIn('github');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<Fragment>
			<Layout notAuth={true}>
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12 offset-xs-0">
						<div className="card shadow-sm">
							<div className="card-body p-0">
								<div className="bg-light border-bottom card-title p-3">
									<h3 className={'m-0'}>
										{'Login to continue'}
									</h3>
								</div>

								<form
									className={'p-3'}
									onSubmit={handleSubmit(onSubmit)}
								>
									<div className="form-group row">
										<label
											className={
												'col-md-3 col-xs-12 col-form-label'
											}
											htmlFor="email"
										>
											{'Email'}
										</label>
										<div className="col-md-9 col-xs-12">
											<input
												id={'email'}
												type="text"
												className={clsx({
													'form-control': true,
													'is-valid':
														formState.isSubmitted &&
														!errors.email,
													'is-invalid':
														formState.isSubmitted &&
														!!errors.email,
												})}
												placeholder={'Email'}
												name={'email'}
												ref={register({
													required: true,
													validate: (input) =>
														isEmail(input),
												})}
											/>
											{errors.email && (
												<div
													id="validationServer03Feedback"
													className="invalid-feedback"
												>
													{errors.email.type ===
														'required' &&
														'Email is required!'}
													{errors.email.type ===
														'validate' &&
														'Email is not valid!'}
												</div>
											)}
										</div>
									</div>

									<div className="form-group row">
										<label
											htmlFor="password"
											className="col-md-3 col-xs-12 col-form-label"
										>
											{'Password'}
										</label>
										<div className="col-md-9 col-xs-12">
											<input
												id={'password'}
												type="password"
												className={clsx({
													'form-control': true,
													'is-valid':
														formState.isSubmitted &&
														!errors.password,
													'is-invalid':
														formState.isSubmitted &&
														!!errors.password,
												})}
												placeholder={'Password'}
												name={'password'}
												ref={register({
													required: true,
													minLength: 6,
													maxLength: 20,
												})}
											/>
											{errors.password && (
												<div
													id="validationServer03Feedback"
													className="invalid-feedback"
												>
													{errors.password.type ===
														'required' &&
														'Password is required!'}
													{errors.password.type ===
														'minLength' &&
														'Password must be between 6 and 20 characters'}
													{errors.password.type ===
														'maxLength' &&
														'Password must be between 6 and 20 characters'}
												</div>
											)}
										</div>
									</div>

									<div className="form-group row">
										<div className="col-sm-9 offset-sm-3">
											<div className="form-check">
												<input
													name={'remember'}
													className="form-check-input"
													type="checkbox"
													id="gridCheck1"
													ref={register}
												/>
												<label
													className="form-check-label"
													htmlFor="gridCheck1"
												>
													{'Remember Me'}
												</label>
											</div>
										</div>
									</div>

									<div className="form-group row">
										<div className="col-12">
											<button
												type="submit"
												role={'button'}
												className={
													'btn btn-primary btn-block shadow-sm'
												}
												disabled={loading}
											>
												{loading && (
													<FontAwesomeIcon
														icon={faSpinner}
														pulse={true}
													/>
												)}
												<span className={'ml-2'}>
													{'Login'}
												</span>
											</button>
										</div>
									</div>

									<div className="form-group row">
										<div className="col-12">
											<button
												type={'button'}
												role={'button'}
												className={
													'btn btn-secondary btn-block shadow-sm'
												}
												onClick={loginGithub}
											>
												{'Login with Github'}
											</button>
										</div>
									</div>

									<div
										className={clsx({
											'form-group row mb-0': true,
											'd-none': !session,
										})}
									>
										<div className="col-12">
											<div className="alert alert-success mb-0 shadow-sm">
												<strong>
													<span>
														{
															'Login successful! You will shortly be redirected...'
														}
													</span>
												</strong>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</Fragment>
	);
};

export default Login;
