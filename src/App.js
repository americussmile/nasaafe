import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-enterprise';

import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookcounterThree from "./components/HookCounterThree";
import HookCounterFourth from "./components/HookCounterFour";

// function App() {
//   return (
//     <div className="App">
//         <HookCounterTwo></HookCounterTwo>
//         <HookcounterThree></HookcounterThree>
//         <HookCounterFourth></HookCounterFourth>
//     </div>
//   );
// }

class App  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [
                {headerName: 'Make', field: 'make', sortable: true, filter: true, rowGroup: true},
                {headerName: 'Model', field: 'model', sortable: true, filter: true,},
                {headerName: 'Price', field: 'price', sortable: true, filter: true},
            ],
            rowData: null,
            autoGroupColumnDef: {
                headerName: 'Model',
                field: 'model',
                cellRenderer: 'agGroupCellRenderer',
                cellRendererParams: {
                    checkbox: true
                }
            }
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json')
            .then(res => res.json())
            .then(rowData => this.setState({rowData}))
            .catch(err => console.log(err));
    }

    onButtonClick = () => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
        alert(`selectednodes': ${selectedDataStringPresentation}`);
    }

    onChangeHeaderName = () => {
        const columnDefs = this.gridApi.getColumnDefs();
        columnDefs.map((colDef, index) => {
            colDef.headerName = 'C' + index;
        })
        this.gridApi.setColumnDefs(columnDefs);
    }

    render() {
        return(
        <div
            className="ag-theme-balham"
            style ={{
                width: 600,
                height: 600,
        }}>
            <button onClick={this.onButtonClick}>Get Selected Rows</button>
            <button onclick={this.onChangeHeaderName}>Change Header Name</button>
        <AgGridReact
            columnDefs={this.state.columnDefs}
            autoGroupColumnDef={this.state.autoGroupColumnDef}
            rowData={this.state.rowData}
            rowSelection="multiple"
            onGridReady={params => this.gridApi = params.api}
            groupSelectsChildren={true}
        />
        </div>)
    }
}

export default App;
