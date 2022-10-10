const allResourceTypes = Object.values(chrome.declarativeNetRequest.ResourceType);

export default [
  {
    id: 1,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      requestHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'x-test-request-header',
          value: 'test-value',
        },
      ]
    },
    condition: {
      urlFilter: '/returnHeaders',
      resourceTypes: allResourceTypes,
    }
  },
  {
    id: 2,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.MODIFY_HEADERS,
      responseHeaders: [
        {
          operation: chrome.declarativeNetRequest.HeaderOperation.SET,
          header: 'x-test-response-header',
          value: 'test-value',
        },
      ]
    },
    condition: {
      urlFilter: 'https://testheaders.com/exampleAPI',
      resourceTypes: allResourceTypes,
    }
  },
];
