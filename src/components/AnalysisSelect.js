const AnalysisSelect = ({name,val,handleVal,options}) => {
    return (
        <select value={val}
                onChange={handleVal}
                name={name}
                className={"analysis--buttons--select"}
                id={name}>
            <option value=""
                    className={"analysis--buttons--select--option"}
                    disabled>
                {name}
            </option>
            {options.map((opt) =>
                <option value={opt}
                        key={opt}
                        className={"analysis--buttons--select--option"}>
                    {opt}
                </option>
            )}
        </select>
    );
}

export default AnalysisSelect;