import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NotAssignedBooks from './NotAssignedBooks';

class AppTabs extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Not assigned books</Tab>
          <Tab>Assigned books</Tab>
          <Tab>My books</Tab>
          <Tab>My profile</Tab>
        </TabList>
        <TabPanel>
          <NotAssignedBooks {...this.props}
            title='Not assigned books'
            accessToken={this.props.user.account_details.access_token}
          />
        </TabPanel>
        <TabPanel>
          <NotAssignedBooks {...this.props}
            title='Assigned books'
            accessToken={this.props.user.account_details.access_token}
          />
        </TabPanel>
        <TabPanel>
          <NotAssignedBooks {...this.props}
            title='My books'
            accessToken={this.props.user.account_details.access_token}
          />
       </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default AppTabs;
