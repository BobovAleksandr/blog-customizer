import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState, useRef, SyntheticEvent } from 'react';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
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

type ArticleProps = {
	applyArticleStyles: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = (props: ArticleProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const formRef = useRef(null);
	const menuRef = useRef(null);

	const asideClickHandler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const [menuOptions, setMenuOptions] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontSizeOption: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	const handleMenuOptionsChange = (param: string, value: OptionType) => {
		setMenuOptions({ ...menuOptions, [param]: value });
	};

	const resetHandler = () => {
		setMenuOptions({ ...menuOptions, ...defaultArticleState });
	};

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
					onSubmit={(event: SyntheticEvent) => {
						event.preventDefault();
						props.applyArticleStyles(menuOptions);
					}}>
					<Select
						selected={menuOptions.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder={defaultArticleState.fontFamilyOption.title}
						onChange={(selectedValue) => {
							handleMenuOptionsChange('fontFamilyOption', selectedValue);
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='Размер шрифта'
						options={fontSizeOptions}
						selected={menuOptions.fontSizeOption}
						onChange={(selectedValue) => {
							handleMenuOptionsChange('fontSizeOption', selectedValue);
						}}
						title='Размер шрифта'
					/>
					<Select
						selected={menuOptions.fontColor}
						options={fontColors}
						placeholder={defaultArticleState.fontColor.title}
						onChange={(selectedValue) => {
							handleMenuOptionsChange('fontColor', selectedValue);
						}}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={menuOptions.backgroundColor}
						options={backgroundColors}
						placeholder={defaultArticleState.backgroundColor.title}
						onChange={(selectedValue) => {
							handleMenuOptionsChange('backgroundColor', selectedValue);
						}}
						title='Цвет фона'
					/>
					<Select
						selected={menuOptions.contentWidth}
						options={contentWidthArr}
						placeholder={defaultArticleState.contentWidth.title}
						onChange={(selectedValue) => {
							handleMenuOptionsChange('contentWidth', selectedValue);
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
								props.applyArticleStyles(defaultArticleState);
							}}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
