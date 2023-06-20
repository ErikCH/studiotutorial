/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Quiz } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuizUpdateFormInputValues = {
    title?: string;
    score?: number;
};
export declare type QuizUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizUpdateFormOverridesProps = {
    QuizUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuizUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuizUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    quiz?: Quiz;
    onSubmit?: (fields: QuizUpdateFormInputValues) => QuizUpdateFormInputValues;
    onSuccess?: (fields: QuizUpdateFormInputValues) => void;
    onError?: (fields: QuizUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuizUpdateFormInputValues) => QuizUpdateFormInputValues;
    onValidate?: QuizUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuizUpdateForm(props: QuizUpdateFormProps): React.ReactElement;
