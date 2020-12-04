import React, { useContext, useState, useCallback } from 'react';
import Select from '@material-ui/core/Select';
import { LocaleType } from './../store/app'

export type SelectorData = { label: string, value: LocaleType }

const useSelector = (changeValue: (data: SelectorData) => void) => {

    const mock_data: SelectorData[] = [{ label: "Engilish", value: "en" }, { label: "日本語", value: "ja" }]

    const [status, setStatus] = useState(mock_data[0]);

    const handleChange = (e: any) => {
        console.log("change", e.target.value)
        mock_data.forEach((data, index) => {
            if (data.value === e.target.value) {
                console.log("change", data, e.target.value)
                setStatus({ ...mock_data[index] })
                changeValue(mock_data[index])
            }
        })
    }

    const renderSelector = useCallback(() => {
        return (
            <Select
                native
                value={status.label}
                onChange={handleChange}
                inputProps={{
                    name: 'label',
                    id: 'age-native-simple',
                }}
            >
                <option value={status.value}>{status.label}</option>
                {mock_data.map((data) => {
                    if (data.value === status.value) return
                    return (
                        <option value={data.value}>{data.label}</option>
                    )
                })}
            </Select>
        )
    }, [status])
    return { "data": status, "renderSelector": renderSelector }
}

export default useSelector