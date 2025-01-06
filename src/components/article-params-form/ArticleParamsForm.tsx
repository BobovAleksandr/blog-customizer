import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useRef } from 'react';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { useEnterSubmit } from 'src/ui/select/hooks/useEnterSubmit';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import {
	fontFamilyOptions,
	defaultArticleState,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	ArticleStateType,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

type Props = {
	submitHandler: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: Props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const formRef = useRef(null);
	const menuRef = useRef(null);

	const asideClickHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const [params, setParams] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const handleParamChange = (param: string, value: OptionType) => {
		setParams({ ...params, [param]: value });
	};

	const resetHandler = () => {
		setParams({ ...params, ...defaultArticleState });
	};

	useEnterSubmit({
		placeholderRef: menuRef,
		onChange: setIsMenuOpen,
	});

	useOutsideClickClose({
		rootRef: menuRef,
		isOpen: isMenuOpen,
		onChange: setIsMenuOpen,
		onClose: resetHandler,
	});

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={asideClickHandler} />
			<aside
				ref={menuRef}
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form
					className={styles.form}
					ref={formRef}
					onSubmit={() => {
						props.submitHandler(params);
					}}>
					<Select
						selected={params.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder={defaultArticleState.fontFamilyOption.title}
						onChange={(selectedValue) => {
							handleParamChange('fontFamilyOption', selectedValue);
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={params.fontSizeOption}
						onChange={(selectedValue) => {
							handleParamChange('fontSizeOption', selectedValue);
						}}
						title='Размер шрифта'
					/>
					<Select
						selected={params.fontColor}
						options={fontColors}
						placeholder={defaultArticleState.fontColor.title}
						onChange={(selectedValue) => {
							handleParamChange('fontColor', selectedValue);
						}}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={params.backgroundColor}
						options={backgroundColors}
						placeholder={defaultArticleState.backgroundColor.title}
						onChange={(selectedValue) => {
							handleParamChange('backgroundColor', selectedValue);
						}}
						title='Цвет фона'
					/>
					<Select
						selected={params.contentWidth}
						options={contentWidthArr}
						placeholder={defaultArticleState.contentWidth.title}
						onChange={(selectedValue) => {
							handleParamChange('contentWidth', selectedValue);
						}}
						title='Ширина контента'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={params.fontSizeOption}
						onChange={(selectedValue) => {
							handleParamChange('fontSizeOption', selectedValue);
						}}
						title='Размер шрифта'
					/>
					<Select
						selected={params.fontColor}
						options={fontColors}
						placeholder={defaultArticleState.fontColor.title}
						onChange={(selectedValue) => {
							handleParamChange('fontColor', selectedValue);
						}}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={params.backgroundColor}
						options={backgroundColors}
						placeholder={defaultArticleState.backgroundColor.title}
						onChange={(selectedValue) => {
							handleParamChange('backgroundColor', selectedValue);
						}}
						title='Цвет фона'
					/>
					<Select
						selected={params.contentWidth}
						options={contentWidthArr}
						placeholder={defaultArticleState.contentWidth.title}
						onChange={(selectedValue) => {
							handleParamChange('contentWidth', selectedValue);
						}}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => {
								resetHandler();
								props.submitHandler(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
