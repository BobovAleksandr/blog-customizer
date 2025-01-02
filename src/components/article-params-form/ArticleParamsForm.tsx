import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	defaultArticleState,
	OptionType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	const asideClickHandler = () => {
		setIsOpen(!isOpen);
	};

	const [currentFont, setCurrentFont] = useState(
		defaultArticleState.fontFamilyOption
	);

	const selectChangeHandler = (currentFont: OptionType) => {
		setCurrentFont(currentFont);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={asideClickHandler} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<Select
						selected={currentFont}
						options={fontFamilyOptions}
						placeholder={defaultArticleState.fontFamilyOption.title}
						onChange={(selectedValue) => {
							selectChangeHandler(selectedValue);
						}}
						onClose={() => {
							console.log('close');
						}}
						title='Шрифт'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
