window.hjSiteSettings = window.hjSiteSettings || {
  site_id: 2052333,
  rec_value: 0.0,
  state_change_listen_mode: "automatic",
  record: true,
  continuous_capture_enabled: true,
  recording_capture_keystrokes: true,
  session_capture_console_consent: false,
  anonymize_digits: true,
  anonymize_emails: true,
  suppress_all: false,
  suppress_all_on_specific_pages: [],
  suppress_text: false,
  suppress_location: false,
  user_attributes_enabled: true,
  legal_name: "",
  privacy_policy_url: "",
  deferred_page_contents: [],
  record_targeting_rules: [],
  feedback_widgets: null,
  heatmaps: [],
  polls: [
    {
      id: 1550237,
      created_epoch_time: 1735119398,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "How satisfied are you with this OPPO Find X8 series product page?",
            required: true,
            labels: [{ text: "Very unsatisfied" }, { text: "Very satisfied" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "What are the reasons behind your ratings? Please give us the feedback as detailed as possible.",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "On a scale from 1 to 10, how satisfied are you with the visual design of this page?",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "Very unsatisfied" }, { text: "Very satisfied" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "On a scale from 1 to 10, how clear is the information on this page?",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "Very unclear" }, { text: "Very clear" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "What went wrong with this information?",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "Incomprehensive or inaccurate specs", comments: false },
              {
                text: "Not understandable product introduction",
                comments: false,
              },
              {
                text: "Incomprehensive or inaccurate features introductions",
                comments: false,
              },
              { text: "Other (please specify)", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "Was this page stable in terms of loading speed, freezes and crashes?",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "Very unstable" }, { text: "Very stable" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "What went wrong about the stability?",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "Loading was slow", comments: false },
              { text: "Page crashed", comments: false },
              { text: "Page was laggy", comments: false },
              { text: "Other (please specify)", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou:
          "Thank you for answering this survey. Your feedback is highly appreciated!",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "en",
      display_condition: "scroll",
      display_delay: 0,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern:
            "https://www.oppo.com/sg/smartphones/series-find-x/find-x8-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern: "https://www.oppo.com/sg/smartphones/series-find-x/find-x8/",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "d7921010-00bc-48e4-81e9-7584a9c02885",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector: null,
      button_survey_label: null,
    },
    {
      id: 1550235,
      created_epoch_time: 1735119252,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "How satisfied are you with this OPPO Find X8 series product page?",
            required: true,
            labels: [{ text: "Very unsatisfied" }, { text: "Very satisfied" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "What are the reasons behind your ratings? Please give us the feedback as detailed as possible.",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "On a scale from 1 to 10, how satisfied are you with the visual design of this page?",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "Very unsatisfied" }, { text: "Very satisfied" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "On a scale from 1 to 10, how clear is the information on this page?",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "Very unclear" }, { text: "Very clear" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "What went wrong with this information?",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "Incomprehensive or inaccurate specs", comments: false },
              {
                text: "Not understandable product introduction",
                comments: false,
              },
              {
                text: "Incomprehensive or inaccurate features introductions",
                comments: false,
              },
              { text: "Other (please specify)", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "Was this page stable in terms of loading speed, freezes and crashes?",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "Very unstable" }, { text: "Very stable" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "What went wrong about the stability?",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "Loading was slow", comments: false },
              { text: "Page crashed", comments: false },
              { text: "Page was laggy", comments: false },
              { text: "Other (please specify)", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou:
          "Thank you for answering this survey. Your feedback is highly appreciated!",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "en",
      display_condition: "scroll",
      display_delay: 0,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern: "https://www.oppo.com/in/smartphones/series-find-x/find-x8/",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern:
            "https://www.oppo.com/in/smartphones/series-find-x/find-x8-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "3b9aa550-a0cd-41a2-b74d-b6500d744293",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector: null,
      button_survey_label: null,
    },
    {
      id: 1545465,
      created_epoch_time: 1734071013,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "How satisfied are you with this OPPO Find X8 series product page?",
            required: true,
            labels: [{ text: "Very unsatisfied" }, { text: "Very satisfied" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "What are the reasons behind your ratings? Please give us the feedback as detailed as possible.",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "On a scale from 1 to 10, how satisfied are you with the visual design of this page?",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "Very unsatisfied" }, { text: "Very satisfied" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "On a scale from 1 to 10, how clear is the information on this page?",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "Very unclear" }, { text: "Very clear" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "What went wrong with this information?",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "Incomprehensive or inaccurate specs", comments: false },
              {
                text: "Not understandable product introduction",
                comments: false,
              },
              {
                text: "Incomprehensive or inaccurate features introductions",
                comments: false,
              },
              { text: "Other (please specify)", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "Was this page stable in terms of loading speed, freezes and crashes?",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "Very unstable" }, { text: "Very stable" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "What went wrong about the stability?",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "Loading was slow", comments: false },
              { text: "Page crashed", comments: false },
              { text: "Page was laggy", comments: false },
              { text: "Other (please specify)", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou:
          "Thank you for answering this survey. Your feedback is highly appreciated!",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "en",
      display_condition: "scroll",
      display_delay: 0,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern:
            "https://www.oppo.com/en/smartphones/series-find-x/find-x8-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern:
            "https://www.oppo.com/en/smartphones/series-find-x/find-x8-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "806cdc86-bd49-4359-837d-f1bb4fabb872",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector: null,
      button_survey_label: null,
    },
    {
      id: 1537108,
      created_epoch_time: 1732692446,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "您对正在浏览产品页的满意程度如何？请根据您的满意程度打分。从0-10分，0分表示“非常不满意”，10分表示“非常满意”",
            required: true,
            labels: [{ text: "非常不满意" }, { text: "非常满意" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "您这次对该页面满意程度打分的理由是什么？请尽可能详细的反馈。",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "您认为该页面有多整洁美观？从0-10分，0分表示“非常不整洁美观”，10分表示“非常整洁美观”",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "非常不整洁美观" }, { text: "非常整洁美观" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "您认为该页面的信息是否清晰易懂？从0-10分，0分表示“非常不清晰易懂”，10分表示“非常清晰易懂”",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "非常不清晰易懂" }, { text: "非常清晰易懂" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "请问该页面的信息有什么问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "参数不全或不准确", comments: false },
              { text: "产品介绍难以理解", comments: false },
              { text: "功能介绍不全或不准确", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "该页面有多稳定？（是否出现加载速度慢、卡顿、崩溃的情况）从0-10分，0分表示“非常不稳定”，10分表示“非常稳定”",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "非常不稳定" }, { text: "非常稳定" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "请问您在该页面遇到了什么稳定性的问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "加载速度慢", comments: false },
              { text: "页面崩溃", comments: false },
              { text: "页面卡顿", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou: "感谢您的参与，祝您生活愉快！",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "zh_CN",
      display_condition: "scroll",
      display_delay: 10,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "starts_with",
          negate: false,
          pattern: "https://www.oppo.com/cn/smartphones/series-reno/reno13/",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "starts_with",
          negate: false,
          pattern:
            "https://www.oppo.com/cn/smartphones/series-reno/reno13-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "d0d83fbf-27c5-4729-9dbf-2f9e6a496717",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector: null,
      button_survey_label: null,
    },
    {
      id: 1530301,
      created_epoch_time: 1731571719,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "您对正在浏览产品页的满意程度如何？请根据您的满意程度打分。从0-10分，0分表示“非常不满意”，10分表示“非常满意”",
            required: true,
            labels: [{ text: "非常不满意" }, { text: "非常满意" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "您这次对该页面满意程度打分的理由是什么？请尽可能详细的反馈。",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "您认为该页面有多整洁美观？从0-10分，0分表示“非常不整洁美观”，10分表示“非常整洁美观”",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "非常不整洁美观" }, { text: "非常整洁美观" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "您认为该页面的信息是否清晰易懂？从0-10分，0分表示“非常不清晰易懂”，10分表示“非常清晰易懂”",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "非常不清晰易懂" }, { text: "非常清晰易懂" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "请问该页面的信息有什么问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "参数不全或不准确", comments: false },
              { text: "产品介绍难以理解", comments: false },
              { text: "功能介绍不全或不准确", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "该页面有多稳定？（是否出现加载速度慢、卡顿、崩溃的情况）从0-10分，0分表示“非常不稳定”，10分表示“非常稳定”",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "非常不稳定" }, { text: "非常稳定" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "请问您在该页面遇到了什么稳定性的问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "加载速度慢", comments: false },
              { text: "页面崩溃", comments: false },
              { text: "页面卡顿", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou: "感谢您的参与，祝您生活愉快！",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "zh_CN",
      display_condition: "scroll",
      display_delay: 10,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "starts_with",
          negate: false,
          pattern: "https://www.oppo.com/cn/smartphones/series-find-n/find-n3/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "starts_with",
          negate: false,
          pattern:
            "https://www.oppo.com/cn/smartphones/series-find-n/find-n3-flip/",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "43a85d57-2ffa-49c6-85fc-5f5370dcf272",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector: null,
      button_survey_label: null,
    },
    {
      id: 1530295,
      created_epoch_time: 1731571335,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "您对正在浏览产品页的满意程度如何？请根据您的满意程度打分。从0-10分，0分表示“非常不满意”，10分表示“非常满意”",
            required: true,
            labels: [{ text: "非常不满意" }, { text: "非常满意" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "您这次对该页面满意程度打分的理由是什么？请尽可能详细的反馈。",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "您认为该页面有多整洁美观？从0-10分，0分表示“非常不整洁美观”，10分表示“非常整洁美观”",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "非常不整洁美观" }, { text: "非常整洁美观" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "您认为该页面的信息是否清晰易懂？从0-10分，0分表示“非常不清晰易懂”，10分表示“非常清晰易懂”",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "非常不清晰易懂" }, { text: "非常清晰易懂" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "请问该页面的信息有什么问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "参数不全或不准确", comments: false },
              { text: "产品介绍难以理解", comments: false },
              { text: "功能介绍不全或不准确", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "该页面有多稳定？（是否出现加载速度慢、卡顿、崩溃的情况）从0-10分，0分表示“非常不稳定”，10分表示“非常稳定”",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "非常不稳定" }, { text: "非常稳定" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "请问您在该页面遇到了什么稳定性的问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "加载速度慢", comments: false },
              { text: "页面崩溃", comments: false },
              { text: "页面卡顿", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou: "感谢您的参与，祝您生活愉快！",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "zh_CN",
      display_condition: "scroll",
      display_delay: 10,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern:
            "https://www.oppo.com/cn/smartphones/series-find-x/find-x8-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "starts_with",
          negate: false,
          pattern: "https://www.oppo.com/cn/smartphones/series-find-x/find-x8/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "2d731ecf-4304-42f3-9a16-43c768b2ef78",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector:
        "#section-discover > div.sports.m-auto.text-black.py-80rpx.w-1312rpx.relative.mo\\:py-48rpx.mo\\:w-screen.mo\\:z-2.pad\\:w-720rpx.pad\\:py-48rpx > div.sticky-container.mo-hidden.h-\\[calc\\(var\\(--content-height\\)\\+1500px\\)\\].w-full.relative.pad\\: > div > div > div.img-wrapper.h-547rpx.w-547rpx.relative.overflow-hidden.pad\\:w-322rpx.pad\\:h-322rpx.pad\\:z-2.pad\\:transform.pad\\:-translate-x-16rpx",
      button_survey_label: null,
    },
    {
      id: 1520680,
      created_epoch_time: 1730082064,
      skin: "light",
      background: "#FFFFFF",
      effective_show_branding: false,
      position: "right",
      content: {
        version: 2,
        questions: [
          {
            uuid: "e59bb864-f7ae-4596-bd0d-1b3bc1f6088a",
            type: "net-promoter-score",
            text: "您对正在浏览产品页的满意程度如何？请根据您的满意程度打分。从0-10分，0分表示“非常不满意”，10分表示“非常满意”",
            required: true,
            labels: [{ text: "非常不满意" }, { text: "非常满意" }],
            next: "byOrder",
          },
          {
            uuid: "ec627eb2-1603-4e38-8f56-6f311f1e061f",
            type: "single-open-ended-multiple-line",
            text: "您这次对该页面满意程度打分的理由是什么？请尽可能详细的反馈。",
            required: false,
            nextIfSkipped: "byOrder",
            next: "byOrder",
          },
          {
            uuid: "49529db9-ffca-4c55-8bf2-69b390fcff4d",
            type: "net-promoter-score",
            text: "您认为该页面有多整洁美观？从0-10分，0分表示“非常不整洁美观”，10分表示“非常整洁美观”",
            required: false,
            nextIfSkipped: "byOrder",
            labels: [{ text: "非常不整洁美观" }, { text: "非常整洁美观" }],
            next: "byOrder",
          },
          {
            uuid: "2543908a-9288-4d5c-a98f-fbad889c4077",
            type: "net-promoter-score",
            text: "您认为该页面的信息是否清晰易懂？从0-10分，0分表示“非常不清晰易懂”，10分表示“非常清晰易懂”",
            required: false,
            nextIfSkipped: "question:6d186922-7f9a-418e-badc-70e143bb755d",
            labels: [{ text: "非常不清晰易懂" }, { text: "非常清晰易懂" }],
            nextByAnswer: [
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:b42196a7-f028-47e3-a7b8-dcd965025d07",
              "question:6d186922-7f9a-418e-badc-70e143bb755d",
            ],
            next: "byAnswer",
          },
          {
            uuid: "b42196a7-f028-47e3-a7b8-dcd965025d07",
            type: "multiple-close-ended",
            text: "请问该页面的信息有什么问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "参数不全或不准确", comments: false },
              { text: "产品介绍难以理解", comments: false },
              { text: "功能介绍不全或不准确", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
          {
            uuid: "6d186922-7f9a-418e-badc-70e143bb755d",
            type: "net-promoter-score",
            text: "该页面有多稳定？（是否出现加载速度慢、卡顿、崩溃的情况）从0-10分，0分表示“非常不稳定”，10分表示“非常稳定”",
            required: false,
            nextIfSkipped: "thankYou",
            labels: [{ text: "非常不稳定" }, { text: "非常稳定" }],
            nextByAnswer: [
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "question:1d4140b7-bddf-45ae-869b-0bc724468e0e",
              "thankYou",
            ],
            next: "byAnswer",
          },
          {
            uuid: "1d4140b7-bddf-45ae-869b-0bc724468e0e",
            type: "multiple-close-ended",
            text: "请问您在该页面遇到了什么稳定性的问题？",
            required: false,
            nextIfSkipped: "byOrder",
            randomize_answer_order: true,
            pin_last_to_bottom: true,
            answers: [
              { text: "加载速度慢", comments: false },
              { text: "页面崩溃", comments: false },
              { text: "页面卡顿", comments: false },
              { text: "其他（请填写）", comments: true },
            ],
            next: "byOrder",
          },
        ],
        thankyou: "感谢您的参与，祝您生活愉快！",
      },
      connect_visit_data: "always",
      ask_for_consent: false,
      language: "zh_CN",
      display_condition: "scroll",
      display_delay: 10,
      persist_condition: "once",
      targeting_percentage: 100,
      targeting: [
        {
          component: "url",
          match_operation: "starts_with",
          negate: false,
          pattern:
            "https://www.oppo.com/cn/smartphones/series-reno/reno12-pro/",
          name: null,
          rule_type: null,
        },
        {
          component: "url",
          match_operation: "simple",
          negate: false,
          pattern: "https://www.oppo.com/cn/smartphones/series-reno/reno12/",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "desktop",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "phone",
          name: null,
          rule_type: null,
        },
        {
          component: "device",
          match_operation: "exact",
          negate: false,
          pattern: "tablet",
          name: null,
          rule_type: null,
        },
      ],
      uuid: "2611d9b2-67a9-4fb1-9fe9-b48dca1a2bb3",
      invite: {
        title: "Your feedback is important to us!",
        description:
          "Tell us what you think about this page by taking our quick Survey.",
        button: "Yes, I will give feedback",
        close: "No thanks",
      },
      invite_enabled: false,
      display_type: "popover",
      auto_screenshot: false,
      show_legal: false,
      logo_path: null,
      button_color: "#00C764",
      parent_element_selector:
        "#section-discover > div.sports.m-auto.text-black.py-80rpx.w-1312rpx.relative.mo\\:py-48rpx.mo\\:w-screen.mo\\:z-2.pad\\:w-720rpx.pad\\:py-48rpx > div.sticky-container.mo-hidden.h-\\[calc\\(var\\(--content-height\\)\\+1500px\\)\\].w-full.relative.pad\\: > div > div > div.img-wrapper.h-547rpx.w-547rpx.relative.overflow-hidden.pad\\:w-322rpx.pad\\:h-322rpx.pad\\:z-2.pad\\:transform.pad\\:-translate-x-16rpx",
      button_survey_label: null,
    },
  ],
  integrations: {
    optimizely: { tag_recordings: false },
    abtasty: { tag_recordings: false },
    kissmetrics: { send_user_id: false },
    mixpanel: { send_events: false },
    unbounce: { tag_recordings: false },
    hubspot: { enabled: false, send_recordings: false, send_surveys: false },
  },
  features: [
    "ask.popover_redesign",
    "client_script.compression.pc",
    "csq_theme",
    "error_reporting",
    "feedback.embeddable_widget",
    "feedback.widgetV2",
    "feedback.widget_telemetry",
    "settings.billing_v2",
    "survey.embeddable_widget",
    "survey.image_question",
    "survey.screenshots",
    "survey.type_button",
  ],
  tracking_code_verified: true,
  cs_project_id: null,
  account_id: 1353322,
  account_signature:
    "4a099f4f3faf95806e713533b4455aa056d2abfdb88bb3bcd76209214388cc64",
};

!(function () {
  "use strict";
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      e(t)
    );
  }
  function t(e, t) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(e, n(i.key), i);
    }
  }
  function n(t) {
    var n = (function (t, n) {
      if ("object" != e(t) || !t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var i = r.call(t, "string");
        if ("object" != e(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == e(n) ? n : String(n);
  }
  var r,
    i = (function () {
      function e(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1e3;
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.send = t),
          (this.batchSize = n),
          (this.flushInterval = r),
          (this.buffer = []),
          (this.flushTimer = null);
      }
      var n, r;
      return (
        (n = e),
        (r = [
          {
            key: "getBuffer",
            value: function () {
              return this.buffer;
            },
          },
          {
            key: "add",
            value: function (e) {
              var t = this;
              this.buffer.push(e),
                this.buffer.length >= this.batchSize
                  ? this.flush()
                  : this.flushTimer ||
                    (this.flushTimer = setTimeout(function () {
                      t.flush();
                    }, this.flushInterval));
            },
          },
          {
            key: "flush",
            value: function () {
              this.buffer.length > 0 &&
                (this.send(this.buffer), (this.buffer = [])),
                this.flushTimer &&
                  (clearTimeout(this.flushTimer), (this.flushTimer = null));
            },
          },
        ]) && t(n.prototype, r),
        Object.defineProperty(n, "prototype", { writable: !1 }),
        e
      );
    })();
  function a() {
    return (
      (a = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      a.apply(this, arguments)
    );
  }
  var o,
    s = function () {
      try {
        return "performance" in window && "now" in window.performance;
      } catch (e) {
        return !1;
      }
    },
    c = {
      version: 6,
      metricsUrl:
        (null === (r = window._hjSettings) || void 0 === r
          ? void 0
          : r.metricsUrl) || "https://metrics.hotjar.io",
      sampling: {
        metrics: 0.1,
        fieldMetrics: 0.01,
        debug: 0.5,
        universalDebug: 0.05 * 0.1,
      },
      browser: { hasPerformance: !1, shouldLogMetrics: !1, inLab: !1 },
      buffer: { bufferSize: 40, flushInterval: 3e3 },
    },
    l = {
      isDebugEnabled: !1,
      isMetricsEnabled: !1,
      isFieldMetricsEnabled: !1,
      loggedMetrics: {},
      genericTags: {},
    },
    u = function (e, t, n) {
      var r;
      l.loggedMetrics[e] = a(
        a({}, l.loggedMetrics[e]),
        {},
        (((r = {})[t] = n || {}), r)
      );
    },
    d = function (e) {
      if (!e) return "value";
      var t = Object.keys(e)[0];
      return (t && e[t]) || "value";
    },
    g = function (e) {
      var t,
        n = null !== (t = e.tag) && void 0 !== t ? t : void 0;
      return l.isDebugEnabled ? a(a(a({}, n), e.extraTags), l.genericTags) : n;
    },
    f = function (e, t) {
      if (!o) return !1;
      var n = l.isMetricsEnabled || l.isDebugEnabled;
      return (
        "lab" === e && (n = c.browser.inLab),
        "field" === e && (n = l.isFieldMetricsEnabled),
        t ? n && t.flush : n
      );
    },
    h = function (e) {
      var t = !1,
        n = "v=".concat(c.version),
        r =
          ""
            .concat(c.metricsUrl, "?")
            .concat(n, "&site_id=")
            .concat(window.hjSiteSettings.site_id) +
          (l.isDebugEnabled ? "&debug=true" : ""),
        i = JSON.stringify(e);
      if ("sendBeacon" in navigator)
        try {
          t = navigator.sendBeacon.bind(navigator)(r, i);
        } catch (e) {}
      if (!1 === t)
        try {
          var a = new XMLHttpRequest();
          a.open("POST", r), (a.timeout = 1e4), a.send(i);
        } catch (e) {}
      c.browser.shouldLogMetrics && console.debug("New Metrics: ", e);
    },
    p = {
      getConfig: function (e) {
        return c[e];
      },
      getState: function (e) {
        return l[e];
      },
      start: function () {
        try {
          c.browser = {
            hasPerformance: s(),
            shouldLogMetrics: /hjMetrics=1/.test(location.search),
            inLab: /hjLab=true/.test(location.search),
          };
          var e = p.time(),
            t = window.hjSiteSettings || {},
            n = t.features,
            r = t.site_id,
            a = new Set(n),
            u = c.sampling;
          return (
            (l.genericTags = { site_id: r }),
            (l.isDebugEnabled =
              Math.random() <= u.universalDebug ||
              (a.has("client_script.metrics.debug") &&
                Math.random() <= u.debug)),
            (l.isMetricsEnabled = Math.random() <= u.metrics),
            (l.isFieldMetricsEnabled =
              l.isMetricsEnabled && Math.random() <= u.fieldMetrics),
            (o = new i(h, c.buffer.bufferSize, c.buffer.flushInterval)),
            e
          );
        } catch (e) {
          console.debug("Error in metrics.start", { error: e });
        }
      },
      reset: function () {
        l.loggedMetrics = {};
      },
      stop: function () {
        (l.isDebugEnabled = !1),
          (l.isMetricsEnabled = !1),
          (l.genericTags = {});
      },
      count: function (e, t) {
        var n = t.incr,
          r = t.tag,
          i = t.extraTags,
          s = t.type;
        try {
          var c,
            u = d(r),
            h = l.loggedMetrics[e],
            p = 0;
          if (
            (n
              ? ((p = ((h && h[u]) || 0) + (n.value || 1)),
                (l.loggedMetrics[e] = a(
                  a({}, h),
                  {},
                  (((c = {})[u] = null != n && n.flush ? 0 : p), c)
                )))
              : (p = 1),
            f(s, n))
          ) {
            var m = {
              name: e,
              type: "count",
              value: p,
              tags: g({ tag: r, extraTags: i }),
            };
            o.add(m);
          }
        } catch (e) {}
      },
      distr: function (e, t) {
        var n = t.task,
          r = t.value,
          i = t.extraTags;
        f() &&
          o.add({
            name: e,
            type: "distribution",
            value: r,
            tags: g({ tag: { task: n }, extraTags: i }),
          });
      },
      time: function () {
        try {
          if (!c.browser.hasPerformance) return;
          return performance.now();
        } catch (e) {}
      },
      timeEnd: function (e, t) {
        var n = t.tag,
          r = t.start,
          i = t.total,
          a = t.extraTags,
          s = t.type;
        try {
          var c = p.time();
          if (!i && !c) return;
          var l = d(n),
            h = i || (r && c ? c - r : void 0);
          if ((u(e, l, {}), h && h > 0 && f(s))) {
            var m = {
              name: e,
              type: "distribution",
              value: Math.round(h),
              tags: g({ tag: n, extraTags: a }),
            };
            o.add(m);
          }
          return c;
        } catch (t) {
          console.debug("Failed to send timer metric: ", {
            name: e,
            tag: n,
            error: t,
          });
        }
      },
      timeIncr: function (e, t) {
        var n,
          r,
          i,
          a,
          o = t.tag,
          s = t.start,
          c = t.flush,
          g = t.extraTags,
          f = t.type,
          h = hj.metrics.time(),
          m = s && h ? h - s : void 0,
          v =
            ((n = e),
            {
              tagName: (r = d(o)),
              start: (a = ((i = l.loggedMetrics[n]) && i[r]) || {}).start,
              total: a.total,
            }),
          w = m ? m + (v.total || 0) : v.total;
        return (
          u(e, v.tagName, { total: w }),
          c && p.timeEnd(e, { tag: o, total: w, extraTags: g, type: f }),
          w
        );
      },
      timeWatcher: function () {
        var e,
          t = 0,
          n = !1,
          r = function () {
            var n,
              r = p.time();
            return (
              (t += null !== (n = e && r && r - e) && void 0 !== n ? n : 0),
              (e = p.time()),
              t
            );
          };
        return {
          start: function () {
            if (!n) return (n = !0), (e = p.time());
          },
          incr: r,
          end: function () {
            var n = r();
            return (t = 0), (e = void 0), n;
          },
        };
      },
      getErrorMessage: function (e) {
        return e instanceof Error ? e.message : "string" == typeof e ? e : "";
      },
    };
  function m(e, t, n) {
    if (t && !Array.isArray(t) && "number" == typeof t.length) {
      var r = t.length;
      return w(t, void 0 !== n && n < r ? n : r);
    }
    return e(t, n);
  }
  function v(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return w(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (e) {
          if ("string" == typeof e) return w(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? w(e, t)
              : void 0
          );
        }
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function w(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var b = (function (e) {
      return (
        (e.replayRecordingMaskedUrlRegex = "replayRecordingMaskedUrlRegex"),
        (e.replayRecordingMaskedUrlRegexRules =
          "replayRecordingMaskedUrlRegexRules"),
        e
      );
    })(b || {}),
    y = (function (e) {
      return (
        (e.START = "start"),
        (e.NOT_START = "not-start"),
        (e.END = "end"),
        (e.NOT_END = "not-end"),
        (e.CONTAIN = "contain"),
        (e.NOT_CONTAIN = "not-contain"),
        (e.EXACT = "exact"),
        (e.NOT_EXACT = "not-exact"),
        e
      );
    })(y || {});
  var j, _;
  (window.hj =
    window.hj ||
    function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      (window.hj.q = window.hj.q || []).push(t);
    }),
    (window.hj.metrics = p);
  var S,
    T,
    E,
    R,
    M,
    O,
    x,
    C,
    A,
    I,
    N,
    k = hj.metrics.start(),
    U = !(
      !window.CS_CONF ||
      null === (j = window.CS_CONF.voc) ||
      void 0 === j ||
      !j.enabled
    ),
    P = !(
      window.CS_CONF ||
      !(
        (null !== (_ = window.hjSiteSettings.features) &&
          void 0 !== _ &&
          _.includes("cs_lite")) ||
        window._hjSettings.csid
      )
    );
  if (
    ((window.hjLazyModules = window.hjLazyModules || {
      SURVEY_V2: { js: "survey-v2.22d050458bcef3d0f056.js" },
      SURVEY_BOOTSTRAPPER: {
        js: "survey-bootstrapper.5280a8379cf419902f72.js",
      },
      SURVEY_ISOLATED: { js: "survey-isolated.a34bbe0ea334bf520b66.js" },
      HEATMAP_RETAKER: { js: "heatmap-retaker.f79c0c7bb13d8a14bddc.js" },
      SURVEY_INVITATION: { js: "survey-invitation.b7982e012811b2fcf55b.js" },
      NOTIFICATION: { js: "notification.ed2bca043f1d9f8c6b56.js" },
      SENTRY: { js: "sentry.58c81e3e25532810f6fd.js" },
      BROWSER_PERF: { js: "browser-perf.8417c6bba72228fa2e29.js" },
      USER_TEST: { js: "user-test.1d69adf5d5d8b961ffcc.js" },
    }),
    U)
  )
    window._uxa.push(["start:hotjar", window.hjSiteSettings]),
      (window.hj.scriptLoaded = !0);
  else if (P) {
    var B =
        ((O =
          (S = window.hjSiteSettings).suppress_all ||
          S.suppress_text ||
          (null === (T = S.suppress_all_on_specific_pages) || void 0 === T
            ? void 0
            : T.length)),
        (x = (function (e) {
          var t,
            n,
            r,
            i,
            a,
            o = {
              anonymisationMethod: null,
              replayRecordingMaskedUrlRegex: null,
              replayRecordingMaskedUrlRegexRules: null,
            };
          if (
            ((e.suppress_all || e.suppress_text) &&
              ((o.anonymisationMethod = b.replayRecordingMaskedUrlRegex),
              (o.replayRecordingMaskedUrlRegex = ".*")),
            null !== (t = e.suppress_all_on_specific_pages) &&
              void 0 !== t &&
              t.length)
          ) {
            o.anonymisationMethod = b.replayRecordingMaskedUrlRegexRules;
            var s =
              ((n = e.suppress_all_on_specific_pages),
              (r = {
                contains: y.CONTAIN,
                regex: y.CONTAIN,
                simple: y.CONTAIN,
                ends_with: y.END,
                exact: y.EXACT,
                starts_with: y.START,
              }),
              (i = []),
              (a = Object.keys(r)),
              n.forEach(function (e) {
                if (e.pattern && a.includes(e.match_operation)) {
                  var t = {
                    operator: r[e.match_operation],
                    value: e.pattern,
                    ignoreQueryParams: "simple" === e.match_operation,
                    ignoreURIFragments: "simple" === e.match_operation,
                    ignoreCaseSensitivity: "simple" === e.match_operation,
                    notOperator: e.negate,
                  };
                  i.push(t);
                }
              }),
              i.length ? i : void 0);
            o.replayRecordingMaskedUrlRegexRules = s || null;
          }
          return o;
        })(S)),
        (C = x.anonymisationMethod),
        (A = x.replayRecordingMaskedUrlRegex),
        (I = x.replayRecordingMaskedUrlRegexRules),
        {
          CS_CONF_BASE: {
            projectId: S.cs_project_id,
            smbConfig: {
              siteId: S.site_id,
              useCSTC: !0,
              csLiteDomain:
                null !== (E = _hjSettings) &&
                void 0 !== E &&
                E.environment &&
                "live" !== _hjSettings.environment
                  ? "insights-integration.live.eks.hotjar.com"
                  : "insights.hotjar.com",
            },
            hostnames: [window.location.hostname],
            voc:
              null !== (R = S.polls) && void 0 !== R && R.length
                ? { enabled: 1, siteId: S.site_id }
                : { enabled: 0 },
            whitelistedAttributes: [],
            anonymizeDigits: !!O || S.anonymize_digits,
            implementations:
              ((M = S),
              m(
                v,
                ((N = M.state_change_listen_mode),
                "manual" === N
                  ? []
                  : [
                      {
                        template: { name: "ArtificialPageview", args: {} },
                        triggers: [
                          {
                            name: "HistoryChange",
                            args: {
                              listeners:
                                "popstate, pushState, replaceState" +
                                ("automatic_with_fragments" === N
                                  ? ", hashchange"
                                  : ""),
                              useDebounce: "no",
                              window: 400,
                            },
                          },
                        ],
                      },
                    ])
              )),
            recordTargetingRules: m(v, S.record_targeting_rules),
            anonymisationMethod: C,
            replayRecordingMaskedUrlRegex: A,
            replayRecordingMaskedUrlRegexRules: I,
          },
          PII_SELECTORS: S.suppress_all ? ["picture, img, video, audio"] : null,
        }),
      D = B.CS_CONF_BASE,
      L = B.PII_SELECTORS;
    (window.CS_CONF_BASE = D),
      (window._uxa = window._uxa || []),
      L && window._uxa.push(["setPIISelectors", { PIISelectors: L }]);
    var F = window._hjSettings.environment,
      z = "t.contentsquare.net";
    F &&
      "live" !== F &&
      (window._hjSettings.csid &&
        (window.CS_CONF_BASE.projectId = window._hjSettings.csid),
      (z = "t-staging.contentsquare.net"));
    var H = document.createElement("script");
    (H.type = "text/javascript"),
      (H.async = !0),
      (H.src = "//".concat(z, "/uxa/smb/tag.js")),
      document.getElementsByTagName("head")[0].appendChild(H);
  } else
    (window.hjBootstrap =
      window.hjBootstrap ||
      function (e, t, n) {
        var r,
          i = new RegExp(
            "bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot|facebook",
            "i"
          ),
          a =
            (null === (r = window.navigator) || void 0 === r
              ? void 0
              : r.userAgent) || "unknown";
        if (i.test(a))
          return (
            hj.metrics.count("session-rejection", { tag: { reason: "bot" } }),
            void console.warn(
              "Hotjar not launching due to suspicious userAgent:",
              a
            )
          );
        var o = "http:" === window.location.protocol,
          s = Boolean(window._hjSettings.preview);
        if (o && !s)
          return (
            hj.metrics.count("session-rejection", { tag: { reason: "https" } }),
            void console.warn(
              "For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047"
            )
          );
        var c = function (e, t, n) {
          (window.hjBootstrapCalled = (window.hjBootstrapCalled || []).concat(
            n
          )),
            window.hj &&
              window.hj._init &&
              window.hj._init._verifyInstallation &&
              hj._init._verifyInstallation();
        };
        c(0, 0, n);
        var l = window.document,
          u = l.head || l.getElementsByTagName("head")[0];
        hj.scriptDomain = e;
        var d = l.createElement("script");
        (d.async = 1),
          (d.src = hj.scriptDomain + t),
          (d.charset = "utf-8"),
          u.appendChild(d),
          (c.revision = "5ff46c9"),
          (window.hjBootstrap = c);
      }),
      window.hjBootstrap(
        "https://script.hotjar.com/",
        "modules.60031afbf51fb3e88a5b.js",
        "2052333"
      ),
      hj.metrics.timeEnd("resource-blocking-time", {
        tag: { resource: "hotjar-js" },
        start: k,
        type: "lab",
      });
})();
