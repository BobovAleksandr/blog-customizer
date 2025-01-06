import {
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';
import { useState, CSSProperties } from 'react';
import './../styles/index.scss';
import styles from './../styles/index.module.scss';
import { Article } from './article/Article';
import { ArticleParamsForm } from './article-params-form/ArticleParamsForm';

export const App = () => {
	const [articleStyles, setArticleStyles] = useState({
		...defaultArticleState,
	});

	const handleStyles = (newStyles: ArticleStateType) => {
		setArticleStyles(newStyles);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleStyles.fontFamilyOption.value,
					'--font-size': articleStyles.fontSizeOption.value,
					'--font-color': articleStyles.fontColor.value,
					'--container-width': articleStyles.contentWidth.value,
					'--bg-color': articleStyles.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm applyArticleStyles={handleStyles} />
			<Article />
		</main>
	);
};
