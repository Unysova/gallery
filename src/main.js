import "@babel/polyfill";
import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'Gallery'
	}
});

export default app;