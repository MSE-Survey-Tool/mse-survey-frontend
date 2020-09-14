
import React, {useState} from 'react';
import {OptionListInterface, RadioFieldConfig} from '../../../utilities/fieldTypes';
import RadioOption from '../../../Components/RadioOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface RadioFieldProps {
    manipulated: boolean;
    fieldConfig: RadioFieldConfig;
    fieldData: OptionListInterface;
    modifyFieldData(newValue: boolean): void;
}

function RadioField(props: RadioFieldProps) {

    const [hintVisible, setHintVisible] = useState(true);

    function handleChange(optionIndex: number, newValue: boolean) {
        const newFieldData: any = JSON.parse(JSON.stringify(props.fieldData));

        Object.keys(newFieldData)
            .forEach(radioOption => {
                newFieldData[radioOption] =
                    ((optionIndex + 1).toString() === radioOption) &&
                    newValue;
        });

        setHintVisible(!newValue);

        props.modifyFieldData(newFieldData);
    }

    return (
        <React.Fragment>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            {props.fieldConfig.properties.fields.map((optionField, optionIndex) => (
                <RadioOption
                    key={optionIndex}
                    label={optionField.title}
                    checked={props.fieldData[(optionIndex + 1).toString()]}
                    onChange={(newValue) => handleChange(optionIndex, newValue)}
                />
            ))}
            <HintBox
                text={`Please select an option.`}
                visible={props.manipulated && hintVisible}
            />
        </React.Fragment>
    );
}

export default RadioField;