"use client";

import React, { useState } from "react";

const Concatenations = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [delimiter, setDelimiter] = useState(",");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const updatePrefix = (e) => {
    setPrefix(e.target.value);
  };

  const updateSuffix = (e) => {
    setSuffix(e.target.value);
  };

  const updateDelimiter = (e) => {
    setDelimiter(e.target.value);
  };

  // function to change all jira issues into multiples of the sentance 'issue in linkedIssues([ISSUE ID])'

  const issueInLinkedIssues = () => {
    const regexJira = new RegExp(/[^A-Za-z0-9\r\n\-]/g);
    const inputClean = inputValue.replace(regexJira, "");
    const breakpoint = new RegExp(/[\r\n]/g);
    const inputArr = inputClean.split(breakpoint);
    let result = "";

    for (let i = 0; i < inputArr.length; i++) {
      if (
        inputArr[i] !== undefined &&
        inputArr[i] !== null &&
        inputArr[i] !== ""
      ) {
        if (i == 0) {
          result = result + "issue in linkedIssues('" + inputArr[i] + "')";
        } else {
          result = result + " OR issue in linkedIssues('" + inputArr[i] + "')";
        }
      }
    }
    setResultValue(`(${result})`);
  };

  // function to concatenate all lines within inverted commas, separated by comma

  const inList = () => {
    const breakpoint = new RegExp(/[\r\n\s]/g);
    const inputArr = inputValue.split(breakpoint);
    let result = "";
    for (let i = 0; i < inputArr.length; i++) {
      if (
        inputArr[i] !== undefined &&
        inputArr[i] !== null &&
        inputArr[i] !== ""
      ) {
        if (i == 0) {
          result = result + "'" + inputArr[i] + "'";
        } else {
          result = result + ",'" + inputArr[i] + "'";
        }
      }
    }
    setResultValue(`IN (${result})`);
  };

  // function to concatenate all lines surrounded by custom prefix & suffix

  const customPrefixSuffix = () => {
    const breakpoint = new RegExp(/[\r\n\s]/g);
    const inputArr = inputValue.split(breakpoint);
    let result = "";

    for (let i = 0; i < inputArr.length; i++) {
      if (
        inputArr[i] !== undefined &&
        inputArr[i] !== null &&
        inputArr[i] !== ""
      ) {
        if (i == inputArr.length - 1) {
          result = result + prefix + inputArr[i] + suffix;
        } else {
          result = result + prefix + inputArr[i] + suffix + delimiter;
        }
      }
    }
    setResultValue(result);
  };

  const copy = () => {
    navigator.clipboard.writeText(resultValue);
  };

  const clear = () => {
    setInputValue("");
    setResultValue("");
  };

  return (
    <React.Fragment>
      <section id="input-section">
        <label htmlFor="input">Copy list of values here:</label>
        <textarea
          id="input"
          rows="7"
          cols="50"
          value={inputValue}
          onChange={handleChange}
        ></textarea>
      </section>
      <section className="option-section">
        <button id="inListButton" onClick={inList}>
          IN ('Text 1','Text 2')
        </button>
        <button id="linkedIssuesButton" onClick={issueInLinkedIssues}>
          issue in linkedIssues('Text 1') OR
        </button>
        <div id="prefix-suffix-inputs">
          <label htmlFor="prefix">Prefix</label>
          <input
            type="text"
            id="prefix"
            value={prefix}
            onChange={updatePrefix}
          />
          <label htmlFor="suffix">Suffix</label>
          <input
            type="text"
            id="suffix"
            value={suffix}
            onChange={updateSuffix}
          />
          <label htmlFor="delimiter">Delimiter</label>
          <input
            type="text"
            id="delimiter"
            defaultValue=","
            value={delimiter}
            onChange={updateDelimiter}
          />
        </div>
        <button id="customPrefixSuffix" onClick={customPrefixSuffix}>
          Custom Prefix & Suffix
        </button>
      </section>
      <section id="result-section">
        <label htmlFor="result">Result:</label>
        <textarea
          id="result"
          rows="7"
          cols="50"
          value={resultValue}
          readOnly
        ></textarea>
      </section>
      <section className="controls-section">
        <button id="copyButton" onClick={copy}>
          Copy
        </button>
        <button id="clearButton" onClick={clear}>
          Clear
        </button>
      </section>
    </React.Fragment>
  );
};

export default Concatenations;
