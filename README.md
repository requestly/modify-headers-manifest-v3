# Modify request & response headers (Chrome Extension Manifest V3)

This Chrome extension will add request header and response header to few network requests triggered in sample website: https://testheaders.com.

## Test environment
Website: https://testheaders.com

There are 2 buttons:

* `Show Request Headers` - makes request to `/returnHeaders` and displays all headers sent in the request.

* `Show Response Headers` - makes request to `/exampleAPI` and displays all headers received in the response.

## Problem Statement

* Add request header `x-test-request-header=test-value` in first request.

* Add response header `x-test-response-header=test-value` in second request.

## Solution via Extension

### Clone this project:

```sh
git clone git@github.com:requestly/modify-headers-mv3-poc.git
cd modify-headers-manifest-v3
```

### Install dependencies:

```sh
npm install
```

### Add rules:
Edit `src/rules.ts` to define headers modifications.

### Build:

```sh
npm run build
```

### Load extension in browser:

1. Open chrome://extensions/ in Chrome.
2. Enable `Developer mode`.
3. Click `Load unpacked`.
4. Select `build` folder in this project.

### Test:

1. Open https://testheaders.com.
2. Click `Show Request Headers` and should see `x-test-request-header=test-value` in table.
3. Click `Show Response Headers` and should see `x-test-response-header=test-value` in table.

## Using Requestly Chrome/Firefox Extension

If you are looking for an existing solution to modify Request & Response headers, you can use Free [Requestly Chrome & Firefox extension](https://requestly.io). Here's a screenshot of Modify headers rule:

![image](https://user-images.githubusercontent.com/3108399/194862734-2b34b682-fc69-4090-9cdd-39e061c65eed.png)
