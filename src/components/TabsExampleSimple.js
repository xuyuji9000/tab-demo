import React from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    }
}

function handleActiveTab(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`)
}


const TabsExampleSimple = () => (
    <Tabs>
        <Tab label="Item One" >
            <div>
                <h2 style={styles.headline}>
                    Tab One
                </h2>
                <p>This is an example tab.</p>
                <p>You can put any sort of HTML or react componet in here. It even keeps the component state</p>
                ;
            </div>
        </Tab>
        <Tab label="Item Two">
            <div>
                <h2 style={styles.headline}>Tab Two</h2>
                <p>This is another example tab.</p>
            </div>
        </Tab>
        <Tab
            label="onActive"
            data-route="/home"
            onActive={handleActiveTab}
        >
            <div>
                <h2 style={styles.headline}>Tab Three</h2>
                <p>This is a third example tab.</p>
            </div>
        </Tab>
    </Tabs>
)

export default TabsExampleSimple
