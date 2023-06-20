/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuizCreateFormInputValues = {
    title?: string;
    score?: number;
};
export declare type QuizCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    score?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizCreateFormOverridesProps = {
    QuizCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    score?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuizCreateFormProps = React.PropsWithChildren<{
    overrides?: QuizCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuizCreateFormInputValues) => QuizCreateFormInputValues;
    onSuccess?: (fields: QuizCreateFormInputValues) => void;
    onError?: (fields: QuizCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuizCreateFormInputValues) => QuizCreateFormInputValues;
    onValidate?: QuizCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuizCreateForm(props: QuizCreateFormProps): React.ReactElement;
