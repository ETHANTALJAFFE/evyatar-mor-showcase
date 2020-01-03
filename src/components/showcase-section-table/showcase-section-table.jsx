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
                    <StyledHeaderRow key={index}>
                        {row.map((headerText, columIndex) => {
                            return (<StyledHeaderField key={columIndex}
                                hasBorder={columIndex % 2 === 0}><StyledHeaderTitle>{headerText}</StyledHeaderTitle></StyledHeaderField>);
                        })}</StyledHeaderRow>
                    : <StyledRegularRow key={index}>{row.map((field, fieldIndex) => {
                        return (<StyledRowField key={fieldIndex}
                            hasBorder={fieldIndex % 2 === 0}><StyledRowFieldText>{field}</StyledRowFieldText></StyledRowField>)
                    })}</StyledRegularRow>
            })}
        </StyledShowcaseTable>
    )
};

export default ShowcaseSectionTable;