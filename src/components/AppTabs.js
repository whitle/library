import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NotAssignedBooks from './NotAssignedBooks';
import AssignedBooks from './AssignedBooks';

class AppTabs extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Available books</Tab>
          <Tab>Assigned books</Tab>
          <Tab>My profile</Tab>
        </TabList>
        <TabPanel>
          <NotAssignedBooks {...this.props}
            accessToken={this.props.user.account_details.access_token}
          />
        </TabPanel>
        <TabPanel>
          <AssignedBooks {...this.props}
            accessToken={this.props.user.account_details.access_token}
          />
        </TabPanel>
        <TabPanel>
          <h2>Profile</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default AppTabs;
