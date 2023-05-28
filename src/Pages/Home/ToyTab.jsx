/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabViewDetails from "../../components/TabViewDetails";

const ToyTab = () => {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/addtoy")
            .then((res) => res.json())
            .then((data) => setAllCategory(data));
    }, []);

    return (
        <div className="container">
            <Tabs>
        <h2 className='text-4xl text-center mb-5 font-extrabold'>Toy All Category</h2>
        <TabList className="flex justify-center list-unstyled">
            <Tab>
                <button className="btn btn-primary me-3">Sports Car Toy</button>
            </Tab>
            <Tab>
                <button className="btn btn-primary me-3">Regular Car Toy</button>
            </Tab>
            <Tab>
                <button className="btn btn-primary me-3">Mini Car Toy</button>
            </Tab>
        </TabList>

        <TabPanel>
            <TabViewDetails
                allCategory={allCategory}
                subCategory="Sports Car Toy"
                altText="sports car toys"
            />
        </TabPanel>
        <TabPanel>
            <TabViewDetails
                allCategory={allCategory}
                subCategory="Regular Car Toy"
                altText="regular car toys"
            />
        </TabPanel>
        <TabPanel>
            <TabViewDetails
                allCategory={allCategory}
                subCategory="Mini Car Toy"
                altText="mini car toys"
            />
        </TabPanel>

    </Tabs>
        </div>
    );
};

export default ToyTab;
