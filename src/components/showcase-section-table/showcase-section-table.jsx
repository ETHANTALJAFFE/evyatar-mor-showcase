import React from 'react';
import {
    StyledHeaderField,
    StyledHeaderRow,
    StyledHeaderTitle,
    StyledRegularRow,
    StyledRowField, StyledRowFieldText,
    StyledShowcaseTable
} from "./style";

// {{table: string[][]}} represent a table where first array represents rows and second represents fields
const ShowcaseSectionTable = ({table}) => {
    return (
        <StyledShowcaseTable>
            {table.map((row, index) => {
                return index === 0 ?
                    <StyledHeaderRow>{row.map((headerText, columIndex) => {
                        return (<StyledHeaderField
                            hasBorder={columIndex % 2 === 0}><StyledHeaderTitle>{headerText}</StyledHeaderTitle></StyledHeaderField>);
                    })}</StyledHeaderRow>
                    : <StyledRegularRow>{row.map((field, fieldIndex) => {
                        return (<StyledRowField  hasBorder={fieldIndex % 2 === 0}><StyledRowFieldText>{field}</StyledRowFieldText></StyledRowField>)
                    })}</StyledRegularRow>
            })}
        </StyledShowcaseTable>
    )
};

export default ShowcaseSectionTable;