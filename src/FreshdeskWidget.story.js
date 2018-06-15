import React from "react";
import { storiesOf } from "@kadira/storybook";

import FreshdeskWidget from "./FreshdeskWidget";

const supportUrl = "https://support.freshdesk.com";

storiesOf("Incorporated", module)
    .add("With default properties", () => <FreshdeskWidget url={supportUrl} />)

    .add("(formTitle) property", () => (
        <FreshdeskWidget url={supportUrl} formTitle="This is a custom title" />
    ))

    .add("(formHeight) property", () => (
        <FreshdeskWidget url={supportUrl} formHeight="300px" />
    ))

    .add("(submitThanks) property", () => (
        <FreshdeskWidget url={supportUrl} submitThanks="Thank you <3" />
    ))

    .add("(autofill) property", () => (
        <FreshdeskWidget
            url={supportUrl}
            submitThanks="Thank you <3"
            autofill={{ requester: "sample@domain.com" }}
        />
    ))

    .add("(attachFile) property", () => (
        <FreshdeskWidget url={supportUrl} attachFile="no" />
    ))

    .add("(searchArea) property", () => (
        <FreshdeskWidget url={supportUrl} searchArea="no" />
    ))

    .add("(captcha) property", () => (
        <FreshdeskWidget url={supportUrl} captcha="yes" />
    ));

storiesOf("Pop-up", module)
    .add("With default button", () => (
        <FreshdeskWidget url={supportUrl} type="pop-up" />
    ))

    .add("With custom button", () => (
        <FreshdeskWidget url={supportUrl} type="pop-up">
            <button>Send Feedback</button>
        </FreshdeskWidget>
    ));
