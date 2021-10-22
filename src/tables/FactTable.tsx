import React from "react";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {makeStyles} from "@material-ui/core";
import {Box, Text} from "@chakra-ui/react";


const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiDataGrid-columnsContainer": {
            backgroundColor: "black",
            color: "white"
        },
        "& .MuiDataGrid-sortIcon": {
            fill: "white"
        },
        "& .MuiDataGrid-columnSeparator": {
            backgroundColor: "black"
        },
        "& .MuiDataGrid-iconSeparator": {
            fill: "black"
        },
    }
}));

const rows: GridRowsProp = [
    {id: 1, nutrient: "Hello", amount: "World", dailyValue: "2.68%"},
    {id: 2, nutrient: "DataGridPro", amount: "is Awesome", dailyValue: "4.5 %"},
    {id: 3, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
/*
    {id: 4, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
    {id: 5, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
    {id: 6, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
*/
];

const columns: GridColDef[] = [
    {field: "nutrient", headerName: "Nutrient", flex: 1},
    {field: "amount", headerName: "Amount", width: 150},
    {field: "dailyValue", headerName: "% Daily Value", flex: 1}
];

export function FactTable() {
    const classes = useStyles()
    return (
        <div style={{height: 500, width: '100%'}}>
            <DataGrid autoHeight={true}
                      rows={rows}
                      columns={columns}
                      className={classes.root}
                      components={{
                          // https://mui.com/api/data-grid/data-grid/#slots-2
                          Footer: () => <Box py={4} pl={3}>
                              <Text fontWeight={"medium"}>27 Nutrients</Text>
                          </Box>
                      }}

            />
        </div>
    );
}
