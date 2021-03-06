"use strict";

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi5lc2xpbnRyYy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW52IiwiYnJvd3NlciIsImVzNiIsImV4dGVuZHMiLCJnbG9iYWxzIiwiQXRvbWljcyIsIlNoYXJlZEFycmF5QnVmZmVyIiwicGFyc2VyIiwicGFyc2VyT3B0aW9ucyIsImVjbWFGZWF0dXJlcyIsImpzeCIsImVjbWFWZXJzaW9uIiwic291cmNlVHlwZSIsInBsdWdpbnMiLCJydWxlcyIsInNldHRpbmdzIiwicmVhY3QiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYkMsRUFBQUEsR0FBRyxFQUFFO0FBQ0RDLElBQUFBLE9BQU8sRUFBRSxJQURSO0FBRURDLElBQUFBLEdBQUcsRUFBRTtBQUZKLEdBRFE7QUFLYkMsRUFBQUEsT0FBTyxFQUFFLENBQUMsb0JBQUQsRUFBdUIsMEJBQXZCLENBTEk7QUFNYkMsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLE9BQU8sRUFBRSxVQURKO0FBRUxDLElBQUFBLGlCQUFpQixFQUFFO0FBRmQsR0FOSTtBQVViQyxFQUFBQSxNQUFNLEVBQUUsMkJBVks7QUFXYkMsRUFBQUEsYUFBYSxFQUFFO0FBQ1hDLElBQUFBLFlBQVksRUFBRTtBQUNWQyxNQUFBQSxHQUFHLEVBQUU7QUFESyxLQURIO0FBSVhDLElBQUFBLFdBQVcsRUFBRSxJQUpGO0FBS1hDLElBQUFBLFVBQVUsRUFBRTtBQUxELEdBWEY7QUFrQmJDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLG9CQUFELEVBQXVCLE9BQXZCLEVBQWdDLGFBQWhDLENBbEJJO0FBbUJiQyxFQUFBQSxLQUFLLEVBQUU7QUFDSCxzQkFBa0IsS0FEZjtBQUVILHlDQUFxQyxPQUZsQztBQUdILHdCQUFvQixDQUhqQjtBQUlILGtDQUE4QixPQUozQjtBQUtILG1DQUErQjtBQUw1QixHQW5CTTtBQTBCYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ05DLElBQUFBLEtBQUssRUFBRTtBQUNIQyxNQUFBQSxPQUFPLEVBQUU7QUFETjtBQUREO0FBMUJHLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZW52OiB7XG4gICAgICAgIGJyb3dzZXI6IHRydWUsXG4gICAgICAgIGVzNjogdHJ1ZSxcbiAgICB9LFxuICAgIGV4dGVuZHM6IFsnZXNsaW50OnJlY29tbWVuZGVkJywgJ3BsdWdpbjpyZWFjdC9yZWNvbW1lbmRlZCddLFxuICAgIGdsb2JhbHM6IHtcbiAgICAgICAgQXRvbWljczogJ3JlYWRvbmx5JyxcbiAgICAgICAgU2hhcmVkQXJyYXlCdWZmZXI6ICdyZWFkb25seScsXG4gICAgfSxcbiAgICBwYXJzZXI6ICdAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyJyxcbiAgICBwYXJzZXJPcHRpb25zOiB7XG4gICAgICAgIGVjbWFGZWF0dXJlczoge1xuICAgICAgICAgICAganN4OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlY21hVmVyc2lvbjogMjAxOCxcbiAgICAgICAgc291cmNlVHlwZTogJ21vZHVsZScsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbJ0B0eXBlc2NyaXB0LWVzbGludCcsICdyZWFjdCcsICdyZWFjdC1ob29rcyddLFxuICAgIHJ1bGVzOiB7XG4gICAgICAgICduby11bnVzZWQtdmFycyc6ICdvZmYnLFxuICAgICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzJzogJ2Vycm9yJyxcbiAgICAgICAgJ3JlYWN0L3Byb3AtdHlwZXMnOiAwLFxuICAgICAgICAncmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3MnOiAnZXJyb3InLFxuICAgICAgICAncmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzJzogJ3dhcm4nLFxuICAgIH0sXG4gICAgc2V0dGluZ3M6IHtcbiAgICAgICAgcmVhY3Q6IHtcbiAgICAgICAgICAgIHZlcnNpb246ICdkZXRlY3QnLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIl19