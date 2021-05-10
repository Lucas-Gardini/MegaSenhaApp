<template>
	<a-form :form="form">
		<a-form-item
			:label-col="formItemLayout.labelCol"
			:wrapper-col="formItemLayout.wrapperCol"
			label="Name"
		>
			<a-input
				v-decorator="[
					'username',
					{
						rules: [
							{
								required: true,
								message: 'Insira seu nome de usuário',
							},
						],
					},
				]"
				placeholder="Insira seu nome de usuário"
			/>
		</a-form-item>
		<a-form-item
			:label-col="formTailLayout.labelCol"
			:wrapper-col="formTailLayout.wrapperCol"
		>
			<a-button type="primary" @click="googleLogin"> Entrar </a-button>
		</a-form-item>
	</a-form>
</template>

<script>
const formItemLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8 },
};
const formTailLayout = {
	labelCol: { span: 4 },
	wrapperCol: { span: 8, offset: 4 },
};
export default {
	data() {
		return {
			checkNick: false,
			formItemLayout,
			formTailLayout,
			form: this.$form.createForm(this, { name: "dynamic_rule" }),
		};
	},
	methods: {
		async googleLogin() {},
		handleChange(e) {
			this.checkNick = e.target.checked;
			this.$nextTick(() => {
				this.form.validateFields(["nickname"], { force: true });
			});
		},
	},
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}

.title {
	font-family: "Quicksand", "Source Sans Pro", -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}

.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}

.links {
	padding-top: 15px;
}
</style>
