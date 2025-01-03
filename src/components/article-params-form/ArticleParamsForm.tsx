import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import {
	fontFamilyOptions,
	defaultArticleState,
	OptionType,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

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

	const fontChangeHandler = (currentFont: OptionType) => {
		setCurrentFont(currentFont);
	};

	const [currentFontSize, setCurrentFontSize] = useState(
		defaultArticleState.fontSizeOption
	);

	const RadioGroupChangeHandler = (currentFontSize: OptionType) => {
		setCurrentFontSize(currentFontSize);
	};

	const [currentFontColor, setCurrentFontColor] = useState(
		defaultArticleState.fontColor
	);

	const fontColorChangeHandler = (currentFontColor: OptionType) => {
		setCurrentFontColor(currentFontColor);
	};

	const [currentBackgroundColor, setCurrentBackgroundColor] = useState(
		defaultArticleState.backgroundColor
	);

	const backgroundColorChangeHandler = (currentBackgroundColor: OptionType) => {
		setCurrentBackgroundColor(currentBackgroundColor);
	};

	const [currentContentWidth, setCurrentContentWidth] = useState(
		defaultArticleState.contentWidth
	);

	const contentWidthChangeHandler = (currentContentWidth: OptionType) => {
		setCurrentContentWidth(currentContentWidth);
	};

	const resetHandler = () => {
		setCurrentFont(defaultArticleState.fontFamilyOption);
		setCurrentFontSize(defaultArticleState.fontSizeOption);
		setCurrentFontColor(defaultArticleState.fontColor);
		setCurrentBackgroundColor(defaultArticleState.backgroundColor);
		setCurrentContentWidth(defaultArticleState.contentWidth);
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
							fontChangeHandler(selectedValue);
						}}
						onClose={() => {
							console.log('close'); // TODO что тут должно быть?
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={currentFontSize}
						onChange={RadioGroupChangeHandler}
						title='Размер шрифта'
					/>
					<Select
						selected={currentFontColor}
						options={fontColors}
						placeholder={defaultArticleState.fontColor.title}
						onChange={(selectedValue) => {
							fontColorChangeHandler(selectedValue);
						}}
						onClose={() => {
							console.log('close'); // TODO что тут должно быть?
						}}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={currentBackgroundColor}
						options={backgroundColors}
						placeholder={defaultArticleState.backgroundColor.title}
						onChange={(selectedValue) => {
							backgroundColorChangeHandler(selectedValue);
						}}
						onClose={() => {
							console.log('close'); // TODO что тут должно быть?
						}}
						title='Цвет фона'
					/>
					<Select
						selected={currentContentWidth}
						options={contentWidthArr}
						placeholder={defaultArticleState.contentWidth.title}
						onChange={(selectedValue) => {
							contentWidthChangeHandler(selectedValue);
						}}
						onClose={() => {
							console.log('close'); // TODO что тут должно быть?
						}}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={resetHandler}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={submitHandler}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
