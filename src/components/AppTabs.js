import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Books from './Books';

class AppTabs extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Public books</Tab>
          <Tab>Assigned books</Tab>
          <Tab>My books</Tab>
          <Tab>My profile</Tab>
        </TabList>
        <TabPanel>
          <Books {...this.props}
            accessToken={this.props.user.account_details.access_token}
          />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    );
  }
}

export default AppTabs;
