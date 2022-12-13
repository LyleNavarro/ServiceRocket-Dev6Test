/**
 * @NApiVersion 2.x
 * @NScriptType Restlet
 * @NModuleScope SameAccount
 */
define([],

function() {
   
    /**
     * Function called upon sending a GET request to the RESTlet.
     *
     * @param {Object} requestParams - Parameters from HTTP request URL; parameters will be passed into function as an Object (for all supported content types)
     * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
     * @since 2015.1
     */
    function doGet(requestParams) {

    }

    /**
     * Function called upon sending a PUT request to the RESTlet.
     *
     * @param {string | Object} requestBody - The HTTP request body; request body will be passed into function as a string when request Content-Type is 'text/plain'
     * or parsed into an Object when request Content-Type is 'application/json' (in which case the body must be a valid JSON)
     * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
     * @since 2015.2
     */
    function doPut(requestBody) {

    }


    /**
     * Function called upon sending a POST request to the RESTlet.
     *
     * @param {string | Object} requestBody - The HTTP request body; request body will be passed into function as a string when request Content-Type is 'text/plain'
     * or parsed into an Object when request Content-Type is 'application/json' (in which case the body must be a valid JSON)
     * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
     * @since 2015.2
     */
    function doPost(requestBody) {
        const arrTest = ["Dean", "Pogi", "Master"];
        const objTest = {
            name: "Dean",
            status: "Pogi",
            title: "Master"
        }

        iterate(arrTest, objTest);
    }

    function iterate(arrTest, objTest){
        //ARRAYS
        //for IN - iterates over ARRAY INDEX
        for(var x in arrTest){
            log.debug('ARRAY for IN', x)
        }
        // //for OF - iterates over ARRAY VALUES
        // for(var y of arrTest){
        //     log.debug('ARRAY for OF', y);
        // }
        // //OBJECTS
        // //for IN - iterates over all enumerable PROPERTY KEYS OF AN OBJECT
        // for(var a in objTest){
        //     log.debug('OBJ for IN', a);
        // }
        //
        // //for OF - iterates over all VALUES OF AN ITERABLE OBJECT
        // for(var b of objTest){
        //     log.debug('OBJ for OF', b); //error objTest is not iterable
        // }

    }

    /**
     * Function called upon sending a DELETE request to the RESTlet.
     *
     * @param {Object} requestParams - Parameters from HTTP request URL; parameters will be passed into function as an Object (for all supported content types)
     * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
     * @since 2015.2
     */
    function doDelete(requestParams) {

    }

    return {
        'get': doGet,
        put: doPut,
        post: doPost,
        'delete': doDelete
    };
    
});
