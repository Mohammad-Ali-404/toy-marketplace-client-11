/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import ToyZoneTitle from '../TitleHook/ToyZoneTitle'
export default function Blog() {
  ToyZoneTitle('Blog')
  return (
    <div className="container my-5">

      <div className="accordion mb-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h5> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <h6>Access Token:</h6>
              <ul>
                <li>An access token is a credential issued by an authentication server to a client application after successful authentication.</li>
                <li>It grants authorization to access protected resources on behalf of the authenticated user.</li>
              </ul>
              <h6>Refresh Token:</h6>
              <ul>
                <li>A refresh token is also issued by the authentication server, alongside the access token.</li>
                <li>It is used to obtain a new access token when the current one expires.</li>
              </ul>
              <h6>Storage on the client-side:</h6>
              <ul>
                <li>Access tokens should be stored securely on the client-side, such as in an HTTP-only cookie or local storage.</li>
                <li>Refresh tokens can also be stored in an HTTP-only cookie or in memory.</li>
                <li>Storing them in a cookie provides additional security, while storing them in memory requires transmitting them securely via HTTPS.</li>
                <li>It's crucial to follow security best practices, handle token expiration, and protect against Cross-Site Request Forgery (CSRF) attacks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion mb-4" id="accordionExample2">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingtwo">
            <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
              <h5>Compare SQL and NoSQL databases?</h5>
            </button>
          </h2>
          <div id="collapsetwo" className="accordion-collapse collapse" aria-labelledby="headingtwo" data-bs-parent="#accordionExample2">
            <div className="accordion-body">
              <h6>SQL databases</h6>
              <ul>
                <li>Use a structured query language (SQL) to access and manipulate data.</li>
                <li>Store data in tables, which are made up of rows and columns.</li>
                <li>Are good for storing and querying structured data.</li>
                <li>Examples of SQL databases include MySQL, PostgreSQL, and Oracle.</li>
              </ul>
              <h6>NoSQL databases</h6>
              <ul>
                <li>
                  Do not use SQL to access and manipulate data.</li>
                <li>Store data in a variety of formats, including key-value pairs, documents, and graphs.</li>
                <li>Are good for storing and querying unstructured data.</li>
                <li>Examples of NoSQL databases include MongoDB, CouchDB.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion mb-4" id="accordionExample3">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingthree">
            <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree">
              <h5>What is express js? What is Nest JS</h5>
            </button>
          </h2>
          <div id="collapsethree" className="accordion-collapse collapse " aria-labelledby="headingthree" data-bs-parent="#accordionExample3">
            <div className="accordion-body">
              <h6>Express.js:</h6>
              <ul>
                <li>Back-end web application framework for Node.js.</li>
                <li>Provides basic functionality for building web applications and APIs.</li>
                <li>Requires developers to write more code and make decisions about the project structure and architecture.</li>
              </ul>
              <h6>Nest.js:</h6>
              <ul>
                <li>Built on top of Express.js.</li>
                <li>Follows the Model-View-Controller (MVC) architectural pattern.</li>
                <li>Provides features like dependency injection, routing, and templating.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="accordion mb-4" id="accordionExampl4">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingfour">
            <button className="accordion-button text-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
              <h5>What is MongoDB aggregate and how does it work</h5>
            </button>
          </h2>
          <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample4">
            <div className="accordion-body">
              <p>MongoDB's aggregate is a framework for performing advanced data processing and analysis operations on collections of documents. It allows you to perform complex queries, transformations, and aggregations on your data.The aggregate framework works by defining a pipeline of stages, where each stage performs a specific operation on the documents in the input. The output of each stage is passed as input to the next stage in the pipeline. This allows you to chain multiple stages together to achieve the desired result.
                Each stage in the pipeline can use various operators and expressions to manipulate the data. These operators enable you to filter documents, group data, perform calculations, sort results, join collections, and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
