import React, {Component} from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
  TableFooter,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

export class MyPortfolio extends React.Component {
  render() {
    return <div className='all-in-center'>
        <SkillSection />
        <Certifications/>
    </div>
  }
}

const SkillSection =() => (
  <div className='skill-page-spaces'>
      <SkillTable/>
      <br/>
  </div>
)




const tableData = [
  {
    name: 'Web development framewoks,libraries, markup languages which i have worked so far:',
    status: 'HTML 5, CSS, Javascript, Bootstrap, Reactjs, Redux, Flux ',
  },
  {
    name: 'Other javascript libraries and programming languages which i have worked:',
    status: 'Nodejs, ExpressJs, Java',
  },
  {
    name: 'Databases which i have worked with:',
    status: 'MYSQL, MongoDb',
  },
  {
    name: 'Code Editors i use:',
    status: 'Visual Studio Code, Jetbrains, Atom, Netbeans',
  },
  {
    name: 'Others:',
    status: 'Agile, GitHub, GitLab',
  },
];


const certificationData = [
  {
    name: 'Learn React.js: The Basics (2015)',
  },
  {
    name: 'Learn Angular 5 from Scratch',
  },
  {
    name: 'Certified In Java by SoloLearn.Inc.',
  },
  {
    name: 'Havard Certification in Time Management',
  },
  {
    name: 'Havard Certification in Presentation skills.',
  },
  {
    name: 'Havard Certification in Stress Management.',
  },
  {
    name: 'Certified Python Basics Professional by Simplilearn',
  },
];

class SkillTable extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: true,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '300px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
              <h3  className='my-sec-heading'>Skills</h3>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>

                <TableRowColumn><b>{row.name}</b></TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}



class Certifications extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: true,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '400px',
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
              <h3  className='my-sec-heading'>Technical and Non-Technical Certifications</h3>
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {certificationData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn><b>{row.name}</b></TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}