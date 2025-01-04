import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const submitHandler = (params: ArticleStateType) => {
		if (event) {
			event.preventDefault();
		}
		setStyle({
			...style,
			'--font-family': params.fontFamilyOption.value,
			'--font-size': params.fontSizeOption.value,
			'--font-color': params.fontColor.value,
			'--container-width': params.contentWidth.value,
			'--bg-color': params.backgroundColor.value,
		} as CSSProperties);
	};

	const [style, setStyle] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	} as CSSProperties);

	return (
		<main className={clsx(styles.main)} style={style}>
			<ArticleParamsForm submitHandler={submitHandler} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
