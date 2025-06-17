"use client";

import React, { useRef, useState } from "react";
import styles from "../styles/concatenations.module.css";

const Concatenations = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const [delimiter, setDelimiter] = useState(",");

  const inputRef = useRef(null);

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
    inputRef.current.focus();
  };

  return (
    <React.Fragment>
      <section className={styles.inputSection}>
        <label htmlFor="input">Copy list of values here:</label>
        <textarea
          id="input"
          rows="7"
          cols="100"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          ref={inputRef}
        ></textarea>
      </section>
      <section className={styles.optionSection}>
        <div className={styles.preset}>
          <h2>Preset options</h2>
          <button id="inListButton" onClick={inList}>
            IN ('Text 1','Text 2')
          </button>
          <button id="linkedIssuesButton" onClick={issueInLinkedIssues}>
            issue in linkedIssues('Text 1') OR
          </button>
        </div>
        <div className={styles.custom}>
          <h2>Custom options</h2>
          <div className={styles.customInputs}>
            <label htmlFor="prefix">Prefix</label>
            <input
              type="text"
              id="prefix"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
            />
            <label htmlFor="suffix">Suffix</label>
            <input
              type="text"
              id="suffix"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
            />
            <label htmlFor="delimiter">Delimiter</label>
            <input
              type="text"
              id="delimiter"
              value={delimiter}
              onChange={(e) => setDelimiter(e.target.value)}
            />
          </div>
          <button id="customPrefixSuffix" onClick={customPrefixSuffix}>
            Custom Prefix & Suffix
          </button>
        </div>
      </section>
      <section className={styles.resultSection}>
        <label htmlFor="result">Result:</label>
        <textarea
          id="result"
          rows="7"
          cols="100"
          value={resultValue}
          readOnly
        ></textarea>
      </section>
      <section className={styles.controlsSection}>
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
