// Generated widgets for zensurveys-api
// These can be used with ChatGPT's window.openai API

export const get_user_profile_api_v2_auth_me_getWidget = {
  name: 'get_user_profile_api_v2_auth_me_getWidget',
  description: 'Display results from get_user_profile_api_v2_auth_me_get',
  tool: 'get_user_profile_api_v2_auth_me_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_api_keys_api_v2_auth_api_keys_getWidget = {
  name: 'list_api_keys_api_v2_auth_api_keys_getWidget',
  description: 'Display results from list_api_keys_api_v2_auth_api_keys_get',
  tool: 'list_api_keys_api_v2_auth_api_keys_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_api_key_api_v2_auth_api_keys_postForm = {
  name: 'create_api_key_api_v2_auth_api_keys_postForm',
  description: 'Form for create_api_key_api_v2_auth_api_keys_post',
  tool: 'create_api_key_api_v2_auth_api_keys_post',
  type: 'form',
  fields: [
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'expires_at', label: 'Expires at', type: 'text' },
    { name: 'scopes', label: 'Scopes', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_api_key_api_v2_auth_api_keys_postForm">
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Expires at: <input type="text" name="expires_at" /></label>
      <label>Scopes: <input type="text" name="scopes" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const set_organization_api_v2_auth_set_organization_postForm = {
  name: 'set_organization_api_v2_auth_set_organization_postForm',
  description: 'Form for set_organization_api_v2_auth_set_organization_post',
  tool: 'set_organization_api_v2_auth_set_organization_post',
  type: 'form',
  fields: [
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="set_organization_api_v2_auth_set_organization_postForm">
      <label>Org id: <input type="number" name="org_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_api_logs_api_v2_auth_api_keys__key_id__logs_getDetail = {
  name: 'get_api_logs_api_v2_auth_api_keys__key_id__logs_getDetail',
  description: 'Detail view for get_api_logs_api_v2_auth_api_keys__key_id__logs_get',
  tool: 'get_api_logs_api_v2_auth_api_keys__key_id__logs_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_api_documentation_api_v2_auth_docs_getWidget = {
  name: 'get_api_documentation_api_v2_auth_docs_getWidget',
  description: 'Display results from get_api_documentation_api_v2_auth_docs_get',
  tool: 'get_api_documentation_api_v2_auth_docs_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const generate_example_code_api_v2_auth_generate_code_postForm = {
  name: 'generate_example_code_api_v2_auth_generate_code_postForm',
  description: 'Form for generate_example_code_api_v2_auth_generate_code_post',
  tool: 'generate_example_code_api_v2_auth_generate_code_post',
  type: 'form',
  fields: [
    { name: 'use_case', label: 'Use case', type: 'text', validation: 'required' },
    { name: 'language', label: 'Language', type: 'text', validation: 'required' },
    { name: 'framework', label: 'Framework', type: 'text' },
    { name: 'authentication_type', label: 'Authentication type', type: 'text' },
    { name: 'follow_up_question', label: 'Follow up question', type: 'text' },
    { name: 'conversation_history', label: 'Conversation history', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="generate_example_code_api_v2_auth_generate_code_postForm">
      <label>Use case: <input type="text" name="use_case" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Framework: <input type="text" name="framework" /></label>
      <label>Authentication type: <input type="text" name="authentication_type" /></label>
      <label>Follow up question: <input type="text" name="follow_up_question" /></label>
      <label>Conversation history: <input type="text" name="conversation_history" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_survey_names_api_v2_surveys_names_getWidget = {
  name: 'list_survey_names_api_v2_surveys_names_getWidget',
  description: 'Display results from list_survey_names_api_v2_surveys_names_get',
  tool: 'list_survey_names_api_v2_surveys_names_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_surveys_api_v2_surveys__getWidget = {
  name: 'get_surveys_api_v2_surveys__getWidget',
  description: 'Display results from get_surveys_api_v2_surveys__get',
  tool: 'get_surveys_api_v2_surveys__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_survey_api_v2_surveys__postForm = {
  name: 'create_survey_api_v2_surveys__postForm',
  description: 'Form for create_survey_api_v2_surveys__post',
  tool: 'create_survey_api_v2_surveys__post',
  type: 'form',
  fields: [
    { name: 'org_id', label: 'Org id', type: 'text' },
    { name: 'survey_name', label: 'Survey name', type: 'text', validation: 'required' },
    { name: 'survey_description', label: 'Survey description', type: 'text' },
    { name: 'survey_json', label: 'Survey json', type: 'text', validation: 'required' },
    { name: 'theme_json', label: 'Theme json', type: 'text' },
    { name: 'status', label: 'Status', type: 'text' },
    { name: 'creator_id', label: 'Creator id', type: 'text' },
    { name: 'dictionary_id', label: 'Dictionary id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_survey_api_v2_surveys__postForm">
      <label>Org id: <input type="text" name="org_id" /></label>
      <label>Survey name: <input type="text" name="survey_name" /></label>
      <label>Survey description: <input type="text" name="survey_description" /></label>
      <label>Survey json: <input type="text" name="survey_json" /></label>
      <label>Theme json: <input type="text" name="theme_json" /></label>
      <label>Status: <input type="text" name="status" /></label>
      <label>Creator id: <input type="text" name="creator_id" /></label>
      <label>Dictionary id: <input type="text" name="dictionary_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_tags_api_v2_surveys_tags_getWidget = {
  name: 'list_tags_api_v2_surveys_tags_getWidget',
  description: 'Display results from list_tags_api_v2_surveys_tags_get',
  tool: 'list_tags_api_v2_surveys_tags_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_tag_api_v2_surveys_tags_postForm = {
  name: 'create_tag_api_v2_surveys_tags_postForm',
  description: 'Form for create_tag_api_v2_surveys_tags_post',
  tool: 'create_tag_api_v2_surveys_tags_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'is_favorite', label: 'Is favorite', type: 'checkbox' },
    { name: 'auto_generated', label: 'Auto generated', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_tag_api_v2_surveys_tags_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Is favorite: <input type="checkbox" name="is_favorite" /></label>
      <label>Auto generated: <input type="checkbox" name="auto_generated" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_tag_api_v2_surveys_tags__tag_id__putForm = {
  name: 'update_tag_api_v2_surveys_tags__tag_id__putForm',
  description: 'Form for update_tag_api_v2_surveys_tags__tag_id__put',
  tool: 'update_tag_api_v2_surveys_tags__tag_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'is_favorite', label: 'Is favorite', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_tag_api_v2_surveys_tags__tag_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Is favorite: <input type="text" name="is_favorite" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_tags_by_groups_api_v2_surveys_tags_by_groups_getWidget = {
  name: 'get_tags_by_groups_api_v2_surveys_tags_by_groups_getWidget',
  description: 'Display results from get_tags_by_groups_api_v2_surveys_tags_by_groups_get',
  tool: 'get_tags_by_groups_api_v2_surveys_tags_by_groups_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_survey_api_v2_surveys__survey_id__getDetail = {
  name: 'get_survey_api_v2_surveys__survey_id__getDetail',
  description: 'Detail view for get_survey_api_v2_surveys__survey_id__get',
  tool: 'get_survey_api_v2_surveys__survey_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_survey_api_v2_surveys__survey_id__putForm = {
  name: 'update_survey_api_v2_surveys__survey_id__putForm',
  description: 'Form for update_survey_api_v2_surveys__survey_id__put',
  tool: 'update_survey_api_v2_surveys__survey_id__put',
  type: 'form',
  fields: [
    { name: 'survey_name', label: 'Survey name', type: 'text' },
    { name: 'survey_description', label: 'Survey description', type: 'text' },
    { name: 'survey_json', label: 'Survey json', type: 'text' },
    { name: 'theme_json', label: 'Theme json', type: 'text' },
    { name: 'status', label: 'Status', type: 'text' },
    { name: 'dictionary_id', label: 'Dictionary id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_survey_api_v2_surveys__survey_id__putForm">
      <label>Survey name: <input type="text" name="survey_name" /></label>
      <label>Survey description: <input type="text" name="survey_description" /></label>
      <label>Survey json: <input type="text" name="survey_json" /></label>
      <label>Theme json: <input type="text" name="theme_json" /></label>
      <label>Status: <input type="text" name="status" /></label>
      <label>Dictionary id: <input type="text" name="dictionary_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_survey_status_api_v2_surveys__survey_id__status_putForm = {
  name: 'update_survey_status_api_v2_surveys__survey_id__status_putForm',
  description: 'Form for update_survey_status_api_v2_surveys__survey_id__status_put',
  tool: 'update_survey_status_api_v2_surveys__survey_id__status_put',
  type: 'form',
  fields: [
    { name: 'status', label: 'Status', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_survey_status_api_v2_surveys__survey_id__status_putForm">
      <label>Status: <input type="text" name="status" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_html_embed_api_v2_surveys__survey_id__html_embed_getDetail = {
  name: 'get_html_embed_api_v2_surveys__survey_id__html_embed_getDetail',
  description: 'Detail view for get_html_embed_api_v2_surveys__survey_id__html_embed_get',
  tool: 'get_html_embed_api_v2_surveys__survey_id__html_embed_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_html_embed_api_v2_surveys__survey_id__html_embed_putForm = {
  name: 'update_html_embed_api_v2_surveys__survey_id__html_embed_putForm',
  description: 'Form for update_html_embed_api_v2_surveys__survey_id__html_embed_put',
  tool: 'update_html_embed_api_v2_surveys__survey_id__html_embed_put',
  type: 'form',
  fields: [
    { name: 'html_code', label: 'Html code', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_html_embed_api_v2_surveys__survey_id__html_embed_putForm">
      <label>Html code: <input type="text" name="html_code" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_html_with_instructions_api_v2_surveys__survey_id__html_update_postForm = {
  name: 'update_html_with_instructions_api_v2_surveys__survey_id__html_update_postForm',
  description: 'Form for update_html_with_instructions_api_v2_surveys__survey_id__html_update_post',
  tool: 'update_html_with_instructions_api_v2_surveys__survey_id__html_update_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_html_with_instructions_api_v2_surveys__survey_id__html_update_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_survey_definition_api_v2_surveys__survey_id__definition_getDetail = {
  name: 'get_survey_definition_api_v2_surveys__survey_id__definition_getDetail',
  description: 'Detail view for get_survey_definition_api_v2_surveys__survey_id__definition_get',
  tool: 'get_survey_definition_api_v2_surveys__survey_id__definition_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_getDetail = {
  name: 'get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_getDetail',
  description: 'Detail view for get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_get',
  tool: 'get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_survey_filters_api_v2_surveys__survey_id__filters_getDetail = {
  name: 'get_survey_filters_api_v2_surveys__survey_id__filters_getDetail',
  description: 'Detail view for get_survey_filters_api_v2_surveys__survey_id__filters_get',
  tool: 'get_survey_filters_api_v2_surveys__survey_id__filters_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_survey_labels_api_v2_surveys__survey_id__labels_getDetail = {
  name: 'get_survey_labels_api_v2_surveys__survey_id__labels_getDetail',
  description: 'Detail view for get_survey_labels_api_v2_surveys__survey_id__labels_get',
  tool: 'get_survey_labels_api_v2_surveys__survey_id__labels_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const clone_survey_api_v2_surveys__survey_id__clone_postForm = {
  name: 'clone_survey_api_v2_surveys__survey_id__clone_postForm',
  description: 'Form for clone_survey_api_v2_surveys__survey_id__clone_post',
  tool: 'clone_survey_api_v2_surveys__survey_id__clone_post',
  type: 'form',
  fields: [
    { name: 'new_name', label: 'New name', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'copy_responses', label: 'Copy responses', type: 'checkbox' },
    { name: 'copy_dashboard', label: 'Copy dashboard', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="clone_survey_api_v2_surveys__survey_id__clone_postForm">
      <label>New name: <input type="text" name="new_name" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Copy responses: <input type="checkbox" name="copy_responses" /></label>
      <label>Copy dashboard: <input type="checkbox" name="copy_dashboard" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_themes_api_v2_surveys_themes_getWidget = {
  name: 'list_themes_api_v2_surveys_themes_getWidget',
  description: 'Display results from list_themes_api_v2_surveys_themes_get',
  tool: 'list_themes_api_v2_surveys_themes_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_theme_api_v2_surveys_themes_postForm = {
  name: 'create_theme_api_v2_surveys_themes_postForm',
  description: 'Form for create_theme_api_v2_surveys_themes_post',
  tool: 'create_theme_api_v2_surveys_themes_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'theme_json', label: 'Theme json', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'is_default', label: 'Is default', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_theme_api_v2_surveys_themes_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Theme json: <input type="text" name="theme_json" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Is default: <input type="checkbox" name="is_default" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_theme_api_v2_surveys_themes__theme_id__getDetail = {
  name: 'get_theme_api_v2_surveys_themes__theme_id__getDetail',
  description: 'Detail view for get_theme_api_v2_surveys_themes__theme_id__get',
  tool: 'get_theme_api_v2_surveys_themes__theme_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_theme_api_v2_surveys_themes__theme_id__putForm = {
  name: 'update_theme_api_v2_surveys_themes__theme_id__putForm',
  description: 'Form for update_theme_api_v2_surveys_themes__theme_id__put',
  tool: 'update_theme_api_v2_surveys_themes__theme_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'theme_json', label: 'Theme json', type: 'text' },
    { name: 'is_default', label: 'Is default', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_theme_api_v2_surveys_themes__theme_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Theme json: <input type="text" name="theme_json" /></label>
      <label>Is default: <input type="text" name="is_default" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_getDetail = {
  name: 'get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_getDetail',
  description: 'Detail view for get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_get',
  tool: 'get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const generate_survey_api_v2_surveys_generate_postForm = {
  name: 'generate_survey_api_v2_surveys_generate_postForm',
  description: 'Form for generate_survey_api_v2_surveys_generate_post',
  tool: 'generate_survey_api_v2_surveys_generate_post',
  type: 'form',
  fields: [
    { name: 'user_prompt', label: 'User prompt', type: 'text', validation: 'required' },
    { name: 'style_guidelines', label: 'Style guidelines', type: 'text' },
    { name: 'target_audience', label: 'Target audience', type: 'text' },
    { name: 'survey_type', label: 'Survey type', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="generate_survey_api_v2_surveys_generate_postForm">
      <label>User prompt: <input type="text" name="user_prompt" /></label>
      <label>Style guidelines: <input type="text" name="style_guidelines" /></label>
      <label>Target audience: <input type="text" name="target_audience" /></label>
      <label>Survey type: <input type="text" name="survey_type" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_survey_tags_api_v2_surveys__survey_id__tags_getDetail = {
  name: 'get_survey_tags_api_v2_surveys__survey_id__tags_getDetail',
  description: 'Detail view for get_survey_tags_api_v2_surveys__survey_id__tags_get',
  tool: 'get_survey_tags_api_v2_surveys__survey_id__tags_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_survey_tags_api_v2_surveys__survey_id__tags_putForm = {
  name: 'update_survey_tags_api_v2_surveys__survey_id__tags_putForm',
  description: 'Form for update_survey_tags_api_v2_surveys__survey_id__tags_put',
  tool: 'update_survey_tags_api_v2_surveys__survey_id__tags_put',
  type: 'form',
  fields: [
    { name: 'tag_ids', label: 'Tag ids', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_survey_tags_api_v2_surveys__survey_id__tags_putForm">
      <label>Tag ids: <input type="text" name="tag_ids" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_public_survey_api_v2_surveys_public__survey_id__getDetail = {
  name: 'get_public_survey_api_v2_surveys_public__survey_id__getDetail',
  description: 'Detail view for get_public_survey_api_v2_surveys_public__survey_id__get',
  tool: 'get_public_survey_api_v2_surveys_public__survey_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const initiate_phone_survey_api_v2_surveys__survey_id__call_postForm = {
  name: 'initiate_phone_survey_api_v2_surveys__survey_id__call_postForm',
  description: 'Form for initiate_phone_survey_api_v2_surveys__survey_id__call_post',
  tool: 'initiate_phone_survey_api_v2_surveys__survey_id__call_post',
  type: 'form',
  fields: [
    { name: 'phone_number', label: 'Phone number', type: 'text', validation: 'required' },
    { name: 'from_number', label: 'From number', type: 'text' },
    { name: 'voice', label: 'Voice', type: 'text' },
    { name: 'language', label: 'Language', type: 'text' },
    { name: 'webhook_url', label: 'Webhook url', type: 'text' },
    { name: 'metadata', label: 'Metadata', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="initiate_phone_survey_api_v2_surveys__survey_id__call_postForm">
      <label>Phone number: <input type="text" name="phone_number" /></label>
      <label>From number: <input type="text" name="from_number" /></label>
      <label>Voice: <input type="text" name="voice" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Webhook url: <input type="text" name="webhook_url" /></label>
      <label>Metadata: <input type="text" name="metadata" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_postForm = {
  name: 'handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_postForm',
  description: 'Form for handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_post',
  tool: 'handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_organization_responses_api_v2_organizations_responses_getWidget = {
  name: 'list_organization_responses_api_v2_organizations_responses_getWidget',
  description: 'Display results from list_organization_responses_api_v2_organizations_responses_get',
  tool: 'list_organization_responses_api_v2_organizations_responses_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_responses_api_v2_surveys__survey_id__responses_getDetail = {
  name: 'list_responses_api_v2_surveys__survey_id__responses_getDetail',
  description: 'Detail view for list_responses_api_v2_surveys__survey_id__responses_get',
  tool: 'list_responses_api_v2_surveys__survey_id__responses_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const submit_response_api_v2_surveys__survey_id__responses_postForm = {
  name: 'submit_response_api_v2_surveys__survey_id__responses_postForm',
  description: 'Form for submit_response_api_v2_surveys__survey_id__responses_post',
  tool: 'submit_response_api_v2_surveys__survey_id__responses_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="submit_response_api_v2_surveys__survey_id__responses_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_getDetail = {
  name: 'get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_getDetail',
  description: 'Detail view for get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_get',
  tool: 'get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_response_properties_api_v2_surveys__survey_id__responses_properties_getDetail = {
  name: 'get_response_properties_api_v2_surveys__survey_id__responses_properties_getDetail',
  description: 'Detail view for get_response_properties_api_v2_surveys__survey_id__responses_properties_get',
  tool: 'get_response_properties_api_v2_surveys__survey_id__responses_properties_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_response_api_v2_surveys__survey_id__responses__response_id__getDetail = {
  name: 'get_response_api_v2_surveys__survey_id__responses__response_id__getDetail',
  description: 'Detail view for get_response_api_v2_surveys__survey_id__responses__response_id__get',
  tool: 'get_response_api_v2_surveys__survey_id__responses__response_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_response_api_v2_surveys__survey_id__responses__response_id__putForm = {
  name: 'update_response_api_v2_surveys__survey_id__responses__response_id__putForm',
  description: 'Form for update_response_api_v2_surveys__survey_id__responses__response_id__put',
  tool: 'update_response_api_v2_surveys__survey_id__responses__response_id__put',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_response_api_v2_surveys__survey_id__responses__response_id__putForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const generate_mock_responses_api_v2_surveys__survey_id__responses_mock_postForm = {
  name: 'generate_mock_responses_api_v2_surveys__survey_id__responses_mock_postForm',
  description: 'Form for generate_mock_responses_api_v2_surveys__survey_id__responses_mock_post',
  tool: 'generate_mock_responses_api_v2_surveys__survey_id__responses_mock_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'text', validation: 'required' },
    { name: 'num_responses', label: 'Num responses', type: 'number' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="generate_mock_responses_api_v2_surveys__survey_id__responses_mock_postForm">
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <label>Org id: <input type="text" name="org_id" /></label>
      <label>Num responses: <input type="number" name="num_responses" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_public_widget_responses_api_v2_surveys__survey_id__public_responses_getDetail = {
  name: 'get_public_widget_responses_api_v2_surveys__survey_id__public_responses_getDetail',
  description: 'Detail view for get_public_widget_responses_api_v2_surveys__survey_id__public_responses_get',
  tool: 'get_public_widget_responses_api_v2_surveys__survey_id__public_responses_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_visual_responses_api_v2_surveys__survey_id__visual_responses_getDetail = {
  name: 'get_visual_responses_api_v2_surveys__survey_id__visual_responses_getDetail',
  description: 'Detail view for get_visual_responses_api_v2_surveys__survey_id__visual_responses_get',
  tool: 'get_visual_responses_api_v2_surveys__survey_id__visual_responses_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const list_notes_api_v2_responses__response_id__notes_getDetail = {
  name: 'list_notes_api_v2_responses__response_id__notes_getDetail',
  description: 'Detail view for list_notes_api_v2_responses__response_id__notes_get',
  tool: 'list_notes_api_v2_responses__response_id__notes_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const create_note_api_v2_responses__response_id__notes_postForm = {
  name: 'create_note_api_v2_responses__response_id__notes_postForm',
  description: 'Form for create_note_api_v2_responses__response_id__notes_post',
  tool: 'create_note_api_v2_responses__response_id__notes_post',
  type: 'form',
  fields: [
    { name: 'note', label: 'Note', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_note_api_v2_responses__response_id__notes_postForm">
      <label>Note: <input type="text" name="note" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_note_api_v2_responses__response_id__notes__note_id__putForm = {
  name: 'update_note_api_v2_responses__response_id__notes__note_id__putForm',
  description: 'Form for update_note_api_v2_responses__response_id__notes__note_id__put',
  tool: 'update_note_api_v2_responses__response_id__notes__note_id__put',
  type: 'form',
  fields: [
    { name: 'note', label: 'Note', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_note_api_v2_responses__response_id__notes__note_id__putForm">
      <label>Note: <input type="text" name="note" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_getWidget = {
  name: 'get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_getWidget',
  description: 'Display results from get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_get',
  tool: 'get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const generate_graphs_api_v2_surveys__survey_id__graphs_generate_postForm = {
  name: 'generate_graphs_api_v2_surveys__survey_id__graphs_generate_postForm',
  description: 'Form for generate_graphs_api_v2_surveys__survey_id__graphs_generate_post',
  tool: 'generate_graphs_api_v2_surveys__survey_id__graphs_generate_post',
  type: 'form',
  fields: [
    { name: 'questions', label: 'Questions', type: 'text', validation: 'required' },
    { name: 'graph_type', label: 'Graph type', type: 'text' },
    { name: 'date_range', label: 'Date range', type: 'text' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="generate_graphs_api_v2_surveys__survey_id__graphs_generate_postForm">
      <label>Questions: <input type="text" name="questions" /></label>
      <label>Graph type: <input type="text" name="graph_type" /></label>
      <label>Date range: <input type="text" name="date_range" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const generate_insights_api_v2_surveys__survey_id__insights_postForm = {
  name: 'generate_insights_api_v2_surveys__survey_id__insights_postForm',
  description: 'Form for generate_insights_api_v2_surveys__survey_id__insights_post',
  tool: 'generate_insights_api_v2_surveys__survey_id__insights_post',
  type: 'form',
  fields: [
    { name: 'questions', label: 'Questions', type: 'text', validation: 'required' },
    { name: 'insight_type', label: 'Insight type', type: 'select', validation: 'required' },
    { name: 'date_range', label: 'Date range', type: 'text' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="generate_insights_api_v2_surveys__survey_id__insights_postForm">
      <label>Questions: <input type="text" name="questions" /></label>
      <label>Insight type: <input type="select" name="insight_type" /></label>
      <label>Date range: <input type="text" name="date_range" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_analytics_summary_api_v2_surveys__survey_id__summary_getDetail = {
  name: 'get_analytics_summary_api_v2_surveys__survey_id__summary_getDetail',
  description: 'Detail view for get_analytics_summary_api_v2_surveys__survey_id__summary_get',
  tool: 'get_analytics_summary_api_v2_surveys__survey_id__summary_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_postForm = {
  name: 'update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_postForm',
  description: 'Form for update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_post',
  tool: 'update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_post',
  type: 'form',
  fields: [
    { name: 'question_name', label: 'Question name', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'result_id', label: 'Result id', type: 'number', validation: 'required' },
    { name: 'literal_word_counts', label: 'Literal word counts', type: 'text' },
    { name: 'semantic_word_counts', label: 'Semantic word counts', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_postForm">
      <label>Question name: <input type="text" name="question_name" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Result id: <input type="number" name="result_id" /></label>
      <label>Literal word counts: <input type="text" name="literal_word_counts" /></label>
      <label>Semantic word counts: <input type="text" name="semantic_word_counts" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const export_analytics_api_v2_surveys__survey_id__export_postForm = {
  name: 'export_analytics_api_v2_surveys__survey_id__export_postForm',
  description: 'Form for export_analytics_api_v2_surveys__survey_id__export_post',
  tool: 'export_analytics_api_v2_surveys__survey_id__export_post',
  type: 'form',
  fields: [
    { name: 'format', label: 'Format', type: 'select', validation: 'required' },
    { name: 'questions', label: 'Questions', type: 'text' },
    { name: 'date_range', label: 'Date range', type: 'text' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
    { name: 'webhook_url', label: 'Webhook url', type: 'text' },
    { name: 'emails', label: 'Emails', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="export_analytics_api_v2_surveys__survey_id__export_postForm">
      <label>Format: <input type="select" name="format" /></label>
      <label>Questions: <input type="text" name="questions" /></label>
      <label>Date range: <input type="text" name="date_range" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <label>Webhook url: <input type="text" name="webhook_url" /></label>
      <label>Emails: <input type="text" name="emails" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_export_status_api_v2_surveys__survey_id__export__request_id__getDetail = {
  name: 'get_export_status_api_v2_surveys__survey_id__export__request_id__getDetail',
  description: 'Detail view for get_export_status_api_v2_surveys__survey_id__export__request_id__get',
  tool: 'get_export_status_api_v2_surveys__survey_id__export__request_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const create_export_api_v2_exports_surveys__survey_id__export_postForm = {
  name: 'create_export_api_v2_exports_surveys__survey_id__export_postForm',
  description: 'Form for create_export_api_v2_exports_surveys__survey_id__export_post',
  tool: 'create_export_api_v2_exports_surveys__survey_id__export_post',
  type: 'form',
  fields: [
    { name: 'format', label: 'Format', type: 'select', validation: 'required' },
    { name: 'date_range', label: 'Date range', type: 'text' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
    { name: 'webhook_url', label: 'Webhook url', type: 'text' },
    { name: 'emails', label: 'Emails', type: 'text' },
    { name: 'language', label: 'Language', type: 'text' },
    { name: 'search', label: 'Search', type: 'text' },
    { name: 'search_type', label: 'Search type', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_export_api_v2_exports_surveys__survey_id__export_postForm">
      <label>Format: <input type="select" name="format" /></label>
      <label>Date range: <input type="text" name="date_range" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <label>Webhook url: <input type="text" name="webhook_url" /></label>
      <label>Emails: <input type="text" name="emails" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Search: <input type="text" name="search" /></label>
      <label>Search type: <input type="text" name="search_type" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_export_status_api_v2_exports_surveys__survey_id__export__request_id__getDetail = {
  name: 'get_export_status_api_v2_exports_surveys__survey_id__export__request_id__getDetail',
  description: 'Detail view for get_export_status_api_v2_exports_surveys__survey_id__export__request_id__get',
  tool: 'get_export_status_api_v2_exports_surveys__survey_id__export__request_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const download_csv_api_v2_exports_surveys__survey_id__download_csv_postForm = {
  name: 'download_csv_api_v2_exports_surveys__survey_id__download_csv_postForm',
  description: 'Form for download_csv_api_v2_exports_surveys__survey_id__download_csv_post',
  tool: 'download_csv_api_v2_exports_surveys__survey_id__download_csv_post',
  type: 'form',
  fields: [
    { name: 'format', label: 'Format', type: 'select', validation: 'required' },
    { name: 'date_range', label: 'Date range', type: 'text' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
    { name: 'webhook_url', label: 'Webhook url', type: 'text' },
    { name: 'emails', label: 'Emails', type: 'text' },
    { name: 'language', label: 'Language', type: 'text' },
    { name: 'search', label: 'Search', type: 'text' },
    { name: 'search_type', label: 'Search type', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="download_csv_api_v2_exports_surveys__survey_id__download_csv_postForm">
      <label>Format: <input type="select" name="format" /></label>
      <label>Date range: <input type="text" name="date_range" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <label>Webhook url: <input type="text" name="webhook_url" /></label>
      <label>Emails: <input type="text" name="emails" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Search: <input type="text" name="search" /></label>
      <label>Search type: <input type="text" name="search_type" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const chat_with_surveys_api_v2_surveys_chat_postForm = {
  name: 'chat_with_surveys_api_v2_surveys_chat_postForm',
  description: 'Form for chat_with_surveys_api_v2_surveys_chat_post',
  tool: 'chat_with_surveys_api_v2_surveys_chat_post',
  type: 'form',
  fields: [
    { name: 'user_id', label: 'User id', type: 'text', validation: 'required' },
    { name: 'survey_id', label: 'Survey id', type: 'text' },
    { name: 'initial_message', label: 'Initial message', type: 'text' },
    { name: 'preferences', label: 'Preferences', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="chat_with_surveys_api_v2_surveys_chat_postForm">
      <label>User id: <input type="text" name="user_id" /></label>
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <label>Initial message: <input type="text" name="initial_message" /></label>
      <label>Preferences: <input type="text" name="preferences" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_groups_api_v2_group__getWidget = {
  name: 'get_groups_api_v2_group__getWidget',
  description: 'Display results from get_groups_api_v2_group__get',
  tool: 'get_groups_api_v2_group__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_group_api_v2_group__postForm = {
  name: 'create_group_api_v2_group__postForm',
  description: 'Form for create_group_api_v2_group__post',
  tool: 'create_group_api_v2_group__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'user_roles', label: 'User roles', type: 'text' },
    { name: 'survey_ids', label: 'Survey ids', type: 'text' },
    { name: 'created_by', label: 'Created by', type: 'text' },
    { name: 'user_id', label: 'User id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_group_api_v2_group__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>User roles: <input type="text" name="user_roles" /></label>
      <label>Survey ids: <input type="text" name="survey_ids" /></label>
      <label>Created by: <input type="text" name="created_by" /></label>
      <label>User id: <input type="text" name="user_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_group_api_v2_group__group_id__putForm = {
  name: 'update_group_api_v2_group__group_id__putForm',
  description: 'Form for update_group_api_v2_group__group_id__put',
  tool: 'update_group_api_v2_group__group_id__put',
  type: 'form',
  fields: [
    { name: 'group_name', label: 'Group name', type: 'text' },
    { name: 'survey_ids', label: 'Survey ids', type: 'text' },
    { name: 'user_roles', label: 'User roles', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_group_api_v2_group__group_id__putForm">
      <label>Group name: <input type="text" name="group_name" /></label>
      <label>Survey ids: <input type="text" name="survey_ids" /></label>
      <label>User roles: <input type="text" name="user_roles" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const add_users_to_group_api_v2_group__group_id__users_postForm = {
  name: 'add_users_to_group_api_v2_group__group_id__users_postForm',
  description: 'Form for add_users_to_group_api_v2_group__group_id__users_post',
  tool: 'add_users_to_group_api_v2_group__group_id__users_post',
  type: 'form',
  fields: [
    { name: 'user_ids', label: 'User ids', type: 'text', validation: 'required' },
    { name: 'role', label: 'Role', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="add_users_to_group_api_v2_group__group_id__users_postForm">
      <label>User ids: <input type="text" name="user_ids" /></label>
      <label>Role: <input type="text" name="role" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_group_surveys_api_v2_group__group_id__surveys_getDetail = {
  name: 'get_group_surveys_api_v2_group__group_id__surveys_getDetail',
  description: 'Detail view for get_group_surveys_api_v2_group__group_id__surveys_get',
  tool: 'get_group_surveys_api_v2_group__group_id__surveys_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const assign_surveys_to_group_api_v2_group__group_id__surveys_postForm = {
  name: 'assign_surveys_to_group_api_v2_group__group_id__surveys_postForm',
  description: 'Form for assign_surveys_to_group_api_v2_group__group_id__surveys_post',
  tool: 'assign_surveys_to_group_api_v2_group__group_id__surveys_post',
  type: 'form',
  fields: [
    { name: 'survey_ids', label: 'Survey ids', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="assign_surveys_to_group_api_v2_group__group_id__surveys_postForm">
      <label>Survey ids: <input type="text" name="survey_ids" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_group_details_api_v2_group_details__getWidget = {
  name: 'get_group_details_api_v2_group_details__getWidget',
  description: 'Display results from get_group_details_api_v2_group_details__get',
  tool: 'get_group_details_api_v2_group_details__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_theme_api_v2_themes__theme_id__getDetail = {
  name: 'get_theme_api_v2_themes__theme_id__getDetail',
  description: 'Detail view for get_theme_api_v2_themes__theme_id__get',
  tool: 'get_theme_api_v2_themes__theme_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_theme_api_v2_themes__theme_id__putForm = {
  name: 'update_theme_api_v2_themes__theme_id__putForm',
  description: 'Form for update_theme_api_v2_themes__theme_id__put',
  tool: 'update_theme_api_v2_themes__theme_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'theme_json', label: 'Theme json', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_theme_api_v2_themes__theme_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Theme json: <input type="text" name="theme_json" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_themes_api_v2_themes__getWidget = {
  name: 'get_themes_api_v2_themes__getWidget',
  description: 'Display results from get_themes_api_v2_themes__get',
  tool: 'get_themes_api_v2_themes__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_theme_api_v2_themes__postForm = {
  name: 'create_theme_api_v2_themes__postForm',
  description: 'Form for create_theme_api_v2_themes__post',
  tool: 'create_theme_api_v2_themes__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'theme_json', label: 'Theme json', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_theme_api_v2_themes__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Theme json: <input type="text" name="theme_json" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_dictionaries_api_v2_dictionaries__getWidget = {
  name: 'get_dictionaries_api_v2_dictionaries__getWidget',
  description: 'Display results from get_dictionaries_api_v2_dictionaries__get',
  tool: 'get_dictionaries_api_v2_dictionaries__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_survey_cx_api_v2_surveys__survey_id__cx_getDetail = {
  name: 'get_survey_cx_api_v2_surveys__survey_id__cx_getDetail',
  description: 'Detail view for get_survey_cx_api_v2_surveys__survey_id__cx_get',
  tool: 'get_survey_cx_api_v2_surveys__survey_id__cx_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const suggest_report_name_api_v2_business_insights_name_suggestion_postForm = {
  name: 'suggest_report_name_api_v2_business_insights_name_suggestion_postForm',
  description: 'Form for suggest_report_name_api_v2_business_insights_name_suggestion_post',
  tool: 'suggest_report_name_api_v2_business_insights_name_suggestion_post',
  type: 'form',
  fields: [
    { name: 'journey', label: 'Journey', type: 'text', validation: 'required' },
    { name: 'touchpoints', label: 'Touchpoints', type: 'text', validation: 'required' },
    { name: 'insight_type', label: 'Insight type', type: 'text', validation: 'required' },
    { name: 'target_audience', label: 'Target audience', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="suggest_report_name_api_v2_business_insights_name_suggestion_postForm">
      <label>Journey: <input type="text" name="journey" /></label>
      <label>Touchpoints: <input type="text" name="touchpoints" /></label>
      <label>Insight type: <input type="text" name="insight_type" /></label>
      <label>Target audience: <input type="text" name="target_audience" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_html_with_instructions_api_v2_html_update_postForm = {
  name: 'update_html_with_instructions_api_v2_html_update_postForm',
  description: 'Form for update_html_with_instructions_api_v2_html_update_post',
  tool: 'update_html_with_instructions_api_v2_html_update_post',
  type: 'form',
  fields: [
    { name: 'html_code', label: 'Html code', type: 'text', validation: 'required' },
    { name: 'instructions', label: 'Instructions', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_html_with_instructions_api_v2_html_update_postForm">
      <label>Html code: <input type="text" name="html_code" /></label>
      <label>Instructions: <input type="text" name="instructions" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_templates_api_v2_templates__getWidget = {
  name: 'list_templates_api_v2_templates__getWidget',
  description: 'Display results from list_templates_api_v2_templates__get',
  tool: 'list_templates_api_v2_templates__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_template_api_v2_templates__postForm = {
  name: 'create_template_api_v2_templates__postForm',
  description: 'Form for create_template_api_v2_templates__post',
  tool: 'create_template_api_v2_templates__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'survey_json', label: 'Survey json', type: 'text', validation: 'required' },
    { name: 'questions', label: 'Questions', type: 'text' },
    { name: 'access_type', label: 'Access type', type: 'text' },
    { name: 'org_id', label: 'Org id', type: 'text' },
    { name: 'icon', label: 'Icon', type: 'text' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'is_popular', label: 'Is popular', type: 'checkbox' },
    { name: 'industry', label: 'Industry', type: 'text' },
    { name: 'customer_journey', label: 'Customer journey', type: 'text' },
    { name: 'touchpoint', label: 'Touchpoint', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_template_api_v2_templates__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Survey json: <input type="text" name="survey_json" /></label>
      <label>Questions: <input type="text" name="questions" /></label>
      <label>Access type: <input type="text" name="access_type" /></label>
      <label>Org id: <input type="text" name="org_id" /></label>
      <label>Icon: <input type="text" name="icon" /></label>
      <label>Category: <input type="text" name="category" /></label>
      <label>Is popular: <input type="checkbox" name="is_popular" /></label>
      <label>Industry: <input type="text" name="industry" /></label>
      <label>Customer journey: <input type="text" name="customer_journey" /></label>
      <label>Touchpoint: <input type="text" name="touchpoint" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_template_api_v2_templates__template_id__getDetail = {
  name: 'get_template_api_v2_templates__template_id__getDetail',
  description: 'Detail view for get_template_api_v2_templates__template_id__get',
  tool: 'get_template_api_v2_templates__template_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_template_api_v2_templates__template_id__putForm = {
  name: 'update_template_api_v2_templates__template_id__putForm',
  description: 'Form for update_template_api_v2_templates__template_id__put',
  tool: 'update_template_api_v2_templates__template_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'survey_json', label: 'Survey json', type: 'text' },
    { name: 'questions', label: 'Questions', type: 'text' },
    { name: 'access_type', label: 'Access type', type: 'text' },
    { name: 'org_id', label: 'Org id', type: 'text' },
    { name: 'icon', label: 'Icon', type: 'text' },
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'is_popular', label: 'Is popular', type: 'text' },
    { name: 'industry', label: 'Industry', type: 'text' },
    { name: 'customer_journey', label: 'Customer journey', type: 'text' },
    { name: 'touchpoint', label: 'Touchpoint', type: 'text' },
    { name: 'updator_id', label: 'Updator id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_template_api_v2_templates__template_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Survey json: <input type="text" name="survey_json" /></label>
      <label>Questions: <input type="text" name="questions" /></label>
      <label>Access type: <input type="text" name="access_type" /></label>
      <label>Org id: <input type="text" name="org_id" /></label>
      <label>Icon: <input type="text" name="icon" /></label>
      <label>Category: <input type="text" name="category" /></label>
      <label>Is popular: <input type="text" name="is_popular" /></label>
      <label>Industry: <input type="text" name="industry" /></label>
      <label>Customer journey: <input type="text" name="customer_journey" /></label>
      <label>Touchpoint: <input type="text" name="touchpoint" /></label>
      <label>Updator id: <input type="text" name="updator_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const autocomplete_api_v2_autocomplete__getWidget = {
  name: 'autocomplete_api_v2_autocomplete__getWidget',
  description: 'Display results from autocomplete_api_v2_autocomplete__get',
  tool: 'autocomplete_api_v2_autocomplete__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_workflows_endpoint_api_v2_workflows__getWidget = {
  name: 'get_workflows_endpoint_api_v2_workflows__getWidget',
  description: 'Display results from get_workflows_endpoint_api_v2_workflows__get',
  tool: 'get_workflows_endpoint_api_v2_workflows__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_workflow_endpoint_api_v2_workflows__postForm = {
  name: 'create_workflow_endpoint_api_v2_workflows__postForm',
  description: 'Form for create_workflow_endpoint_api_v2_workflows__post',
  tool: 'create_workflow_endpoint_api_v2_workflows__post',
  type: 'form',
  fields: [
    { name: 'id', label: 'Id', type: 'text' },
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'surveyId', label: 'Survey Id', type: 'text', validation: 'required' },
    { name: 'emails', label: 'Emails', type: 'text', validation: 'required' },
    { name: 'alertEnabled', label: 'Alert Enabled', type: 'checkbox', validation: 'required' },
    { name: 'organizationId', label: 'Organization Id', type: 'text', validation: 'required' },
    { name: 'emailBody', label: 'Email Body', type: 'text' },
    { name: 'filterByQuestion', label: 'Filter By Question', type: 'text' },
    { name: 'channel', label: 'Channel', type: 'text' },
    { name: 'webhookUrl', label: 'Webhook Url', type: 'text' },
    { name: 'webhookPayloadFormat', label: 'Webhook Payload Format', type: 'text' },
    { name: 'webhookIncludeMetadata', label: 'Webhook Include Metadata', type: 'checkbox' },
    { name: 'webhookCustomHeaders', label: 'Webhook Custom Headers', type: 'text' },
    { name: 'webhookCustomPayload', label: 'Webhook Custom Payload', type: 'text' },
    { name: 'webhookSecretKey', label: 'Webhook Secret Key', type: 'text' },
    { name: 'webhookTimeoutSeconds', label: 'Webhook Timeout Seconds', type: 'number' },
    { name: 'webhookRetryCount', label: 'Webhook Retry Count', type: 'number' },
    { name: 'zendeskApiKey', label: 'Zendesk Api Key', type: 'text' },
    { name: 'zendeskSubdomain', label: 'Zendesk Subdomain', type: 'text' },
    { name: 'zendeskEmail', label: 'Zendesk Email', type: 'text' },
    { name: 'emarsysApiKey', label: 'Emarsys Api Key', type: 'text' },
    { name: 'emarsysSecretKey', label: 'Emarsys Secret Key', type: 'text' },
    { name: 'emarsysActionType', label: 'Emarsys Action Type', type: 'text' },
    { name: 'emarsysEventId', label: 'Emarsys Event Id', type: 'text' },
    { name: 'emarsysSegmentId', label: 'Emarsys Segment Id', type: 'text' },
    { name: 'emarsysFieldMappings', label: 'Emarsys Field Mappings', type: 'text' },
    { name: 'emarsysIdentifierField', label: 'Emarsys Identifier Field', type: 'text' },
    { name: 'salesforceClientId', label: 'Salesforce Client Id', type: 'text' },
    { name: 'salesforceClientSecret', label: 'Salesforce Client Secret', type: 'text' },
    { name: 'salesforceAccessToken', label: 'Salesforce Access Token', type: 'text' },
    { name: 'salesforceRefreshToken', label: 'Salesforce Refresh Token', type: 'text' },
    { name: 'salesforceInstanceUrl', label: 'Salesforce Instance Url', type: 'text' },
    { name: 'salesforceConnectedOrgId', label: 'Salesforce Connected Org Id', type: 'text' },
    { name: 'salesforceFieldMappings', label: 'Salesforce Field Mappings', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_workflow_endpoint_api_v2_workflows__postForm">
      <label>Id: <input type="text" name="id" /></label>
      <label>Name: <input type="text" name="name" /></label>
      <label>Survey Id: <input type="text" name="surveyId" /></label>
      <label>Emails: <input type="text" name="emails" /></label>
      <label>Alert Enabled: <input type="checkbox" name="alertEnabled" /></label>
      <label>Organization Id: <input type="text" name="organizationId" /></label>
      <label>Email Body: <input type="text" name="emailBody" /></label>
      <label>Filter By Question: <input type="text" name="filterByQuestion" /></label>
      <label>Channel: <input type="text" name="channel" /></label>
      <label>Webhook Url: <input type="text" name="webhookUrl" /></label>
      <label>Webhook Payload Format: <input type="text" name="webhookPayloadFormat" /></label>
      <label>Webhook Include Metadata: <input type="checkbox" name="webhookIncludeMetadata" /></label>
      <label>Webhook Custom Headers: <input type="text" name="webhookCustomHeaders" /></label>
      <label>Webhook Custom Payload: <input type="text" name="webhookCustomPayload" /></label>
      <label>Webhook Secret Key: <input type="text" name="webhookSecretKey" /></label>
      <label>Webhook Timeout Seconds: <input type="number" name="webhookTimeoutSeconds" /></label>
      <label>Webhook Retry Count: <input type="number" name="webhookRetryCount" /></label>
      <label>Zendesk Api Key: <input type="text" name="zendeskApiKey" /></label>
      <label>Zendesk Subdomain: <input type="text" name="zendeskSubdomain" /></label>
      <label>Zendesk Email: <input type="text" name="zendeskEmail" /></label>
      <label>Emarsys Api Key: <input type="text" name="emarsysApiKey" /></label>
      <label>Emarsys Secret Key: <input type="text" name="emarsysSecretKey" /></label>
      <label>Emarsys Action Type: <input type="text" name="emarsysActionType" /></label>
      <label>Emarsys Event Id: <input type="text" name="emarsysEventId" /></label>
      <label>Emarsys Segment Id: <input type="text" name="emarsysSegmentId" /></label>
      <label>Emarsys Field Mappings: <input type="text" name="emarsysFieldMappings" /></label>
      <label>Emarsys Identifier Field: <input type="text" name="emarsysIdentifierField" /></label>
      <label>Salesforce Client Id: <input type="text" name="salesforceClientId" /></label>
      <label>Salesforce Client Secret: <input type="text" name="salesforceClientSecret" /></label>
      <label>Salesforce Access Token: <input type="text" name="salesforceAccessToken" /></label>
      <label>Salesforce Refresh Token: <input type="text" name="salesforceRefreshToken" /></label>
      <label>Salesforce Instance Url: <input type="text" name="salesforceInstanceUrl" /></label>
      <label>Salesforce Connected Org Id: <input type="text" name="salesforceConnectedOrgId" /></label>
      <label>Salesforce Field Mappings: <input type="text" name="salesforceFieldMappings" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_workflow_endpoint_api_v2_workflows__id__putForm = {
  name: 'update_workflow_endpoint_api_v2_workflows__id__putForm',
  description: 'Form for update_workflow_endpoint_api_v2_workflows__id__put',
  tool: 'update_workflow_endpoint_api_v2_workflows__id__put',
  type: 'form',
  fields: [
    { name: 'id', label: 'Id', type: 'text' },
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'surveyId', label: 'Survey Id', type: 'text', validation: 'required' },
    { name: 'emails', label: 'Emails', type: 'text', validation: 'required' },
    { name: 'alertEnabled', label: 'Alert Enabled', type: 'checkbox', validation: 'required' },
    { name: 'organizationId', label: 'Organization Id', type: 'text', validation: 'required' },
    { name: 'emailBody', label: 'Email Body', type: 'text' },
    { name: 'filterByQuestion', label: 'Filter By Question', type: 'text' },
    { name: 'channel', label: 'Channel', type: 'text' },
    { name: 'webhookUrl', label: 'Webhook Url', type: 'text' },
    { name: 'webhookPayloadFormat', label: 'Webhook Payload Format', type: 'text' },
    { name: 'webhookIncludeMetadata', label: 'Webhook Include Metadata', type: 'checkbox' },
    { name: 'webhookCustomHeaders', label: 'Webhook Custom Headers', type: 'text' },
    { name: 'webhookCustomPayload', label: 'Webhook Custom Payload', type: 'text' },
    { name: 'webhookSecretKey', label: 'Webhook Secret Key', type: 'text' },
    { name: 'webhookTimeoutSeconds', label: 'Webhook Timeout Seconds', type: 'number' },
    { name: 'webhookRetryCount', label: 'Webhook Retry Count', type: 'number' },
    { name: 'zendeskApiKey', label: 'Zendesk Api Key', type: 'text' },
    { name: 'zendeskSubdomain', label: 'Zendesk Subdomain', type: 'text' },
    { name: 'zendeskEmail', label: 'Zendesk Email', type: 'text' },
    { name: 'emarsysApiKey', label: 'Emarsys Api Key', type: 'text' },
    { name: 'emarsysSecretKey', label: 'Emarsys Secret Key', type: 'text' },
    { name: 'emarsysActionType', label: 'Emarsys Action Type', type: 'text' },
    { name: 'emarsysEventId', label: 'Emarsys Event Id', type: 'text' },
    { name: 'emarsysSegmentId', label: 'Emarsys Segment Id', type: 'text' },
    { name: 'emarsysFieldMappings', label: 'Emarsys Field Mappings', type: 'text' },
    { name: 'emarsysIdentifierField', label: 'Emarsys Identifier Field', type: 'text' },
    { name: 'salesforceClientId', label: 'Salesforce Client Id', type: 'text' },
    { name: 'salesforceClientSecret', label: 'Salesforce Client Secret', type: 'text' },
    { name: 'salesforceAccessToken', label: 'Salesforce Access Token', type: 'text' },
    { name: 'salesforceRefreshToken', label: 'Salesforce Refresh Token', type: 'text' },
    { name: 'salesforceInstanceUrl', label: 'Salesforce Instance Url', type: 'text' },
    { name: 'salesforceConnectedOrgId', label: 'Salesforce Connected Org Id', type: 'text' },
    { name: 'salesforceFieldMappings', label: 'Salesforce Field Mappings', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_workflow_endpoint_api_v2_workflows__id__putForm">
      <label>Id: <input type="text" name="id" /></label>
      <label>Name: <input type="text" name="name" /></label>
      <label>Survey Id: <input type="text" name="surveyId" /></label>
      <label>Emails: <input type="text" name="emails" /></label>
      <label>Alert Enabled: <input type="checkbox" name="alertEnabled" /></label>
      <label>Organization Id: <input type="text" name="organizationId" /></label>
      <label>Email Body: <input type="text" name="emailBody" /></label>
      <label>Filter By Question: <input type="text" name="filterByQuestion" /></label>
      <label>Channel: <input type="text" name="channel" /></label>
      <label>Webhook Url: <input type="text" name="webhookUrl" /></label>
      <label>Webhook Payload Format: <input type="text" name="webhookPayloadFormat" /></label>
      <label>Webhook Include Metadata: <input type="checkbox" name="webhookIncludeMetadata" /></label>
      <label>Webhook Custom Headers: <input type="text" name="webhookCustomHeaders" /></label>
      <label>Webhook Custom Payload: <input type="text" name="webhookCustomPayload" /></label>
      <label>Webhook Secret Key: <input type="text" name="webhookSecretKey" /></label>
      <label>Webhook Timeout Seconds: <input type="number" name="webhookTimeoutSeconds" /></label>
      <label>Webhook Retry Count: <input type="number" name="webhookRetryCount" /></label>
      <label>Zendesk Api Key: <input type="text" name="zendeskApiKey" /></label>
      <label>Zendesk Subdomain: <input type="text" name="zendeskSubdomain" /></label>
      <label>Zendesk Email: <input type="text" name="zendeskEmail" /></label>
      <label>Emarsys Api Key: <input type="text" name="emarsysApiKey" /></label>
      <label>Emarsys Secret Key: <input type="text" name="emarsysSecretKey" /></label>
      <label>Emarsys Action Type: <input type="text" name="emarsysActionType" /></label>
      <label>Emarsys Event Id: <input type="text" name="emarsysEventId" /></label>
      <label>Emarsys Segment Id: <input type="text" name="emarsysSegmentId" /></label>
      <label>Emarsys Field Mappings: <input type="text" name="emarsysFieldMappings" /></label>
      <label>Emarsys Identifier Field: <input type="text" name="emarsysIdentifierField" /></label>
      <label>Salesforce Client Id: <input type="text" name="salesforceClientId" /></label>
      <label>Salesforce Client Secret: <input type="text" name="salesforceClientSecret" /></label>
      <label>Salesforce Access Token: <input type="text" name="salesforceAccessToken" /></label>
      <label>Salesforce Refresh Token: <input type="text" name="salesforceRefreshToken" /></label>
      <label>Salesforce Instance Url: <input type="text" name="salesforceInstanceUrl" /></label>
      <label>Salesforce Connected Org Id: <input type="text" name="salesforceConnectedOrgId" /></label>
      <label>Salesforce Field Mappings: <input type="text" name="salesforceFieldMappings" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_getWidget = {
  name: 'get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_getWidget',
  description: 'Display results from get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_get',
  tool: 'get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_getWidget = {
  name: 'get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_getWidget',
  description: 'Display results from get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_get',
  tool: 'get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_postForm = {
  name: 'test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_postForm',
  description: 'Form for test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_post',
  tool: 'test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_post',
  type: 'form',
  fields: [
    { name: 'workflow_data', label: 'Workflow data', type: 'text', validation: 'required' },
    { name: 'sample_data', label: 'Sample data', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_postForm">
      <label>Workflow data: <input type="text" name="workflow_data" /></label>
      <label>Sample data: <input type="text" name="sample_data" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const test_emarsys_connection_api_v2_emarsys_test_connection_postForm = {
  name: 'test_emarsys_connection_api_v2_emarsys_test_connection_postForm',
  description: 'Form for test_emarsys_connection_api_v2_emarsys_test_connection_post',
  tool: 'test_emarsys_connection_api_v2_emarsys_test_connection_post',
  type: 'form',
  fields: [
    { name: 'api_key', label: 'Api key', type: 'text', validation: 'required' },
    { name: 'secret_key', label: 'Secret key', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="test_emarsys_connection_api_v2_emarsys_test_connection_postForm">
      <label>Api key: <input type="text" name="api_key" /></label>
      <label>Secret key: <input type="text" name="secret_key" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_emarsys_fields_api_v2_emarsys_fields_postForm = {
  name: 'get_emarsys_fields_api_v2_emarsys_fields_postForm',
  description: 'Form for get_emarsys_fields_api_v2_emarsys_fields_post',
  tool: 'get_emarsys_fields_api_v2_emarsys_fields_post',
  type: 'form',
  fields: [
    { name: 'api_key', label: 'Api key', type: 'text', validation: 'required' },
    { name: 'secret_key', label: 'Secret key', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="get_emarsys_fields_api_v2_emarsys_fields_postForm">
      <label>Api key: <input type="text" name="api_key" /></label>
      <label>Secret key: <input type="text" name="secret_key" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__postForm = {
  name: 'create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__postForm',
  description: 'Form for create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__post',
  tool: 'create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__post',
  type: 'form',
  fields: [
    { name: 'api_key', label: 'Api key', type: 'text', validation: 'required' },
    { name: 'secret_key', label: 'Secret key', type: 'text', validation: 'required' },
    { name: 'workflow_name', label: 'Workflow name', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__postForm">
      <label>Api key: <input type="text" name="api_key" /></label>
      <label>Secret key: <input type="text" name="secret_key" /></label>
      <label>Workflow name: <input type="text" name="workflow_name" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_survey_questions_api_v2_emarsys_survey_questions__survey_id__getDetail = {
  name: 'get_survey_questions_api_v2_emarsys_survey_questions__survey_id__getDetail',
  description: 'Detail view for get_survey_questions_api_v2_emarsys_survey_questions__survey_id__get',
  tool: 'get_survey_questions_api_v2_emarsys_survey_questions__survey_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_feeds_api_v2_feeds__getWidget = {
  name: 'get_feeds_api_v2_feeds__getWidget',
  description: 'Display results from get_feeds_api_v2_feeds__get',
  tool: 'get_feeds_api_v2_feeds__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_feed_api_v2_feeds__postForm = {
  name: 'create_feed_api_v2_feeds__postForm',
  description: 'Form for create_feed_api_v2_feeds__post',
  tool: 'create_feed_api_v2_feeds__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'text' },
    { name: 'questions', label: 'Questions', type: 'text' },
    { name: 'layout', label: 'Layout', type: 'text' },
    { name: 'trend_period', label: 'Trend period', type: 'text' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_feed_api_v2_feeds__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <label>Org id: <input type="text" name="org_id" /></label>
      <label>Questions: <input type="text" name="questions" /></label>
      <label>Layout: <input type="text" name="layout" /></label>
      <label>Trend period: <input type="text" name="trend_period" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_feed_api_v2_feeds__feed_id__getDetail = {
  name: 'get_feed_api_v2_feeds__feed_id__getDetail',
  description: 'Detail view for get_feed_api_v2_feeds__feed_id__get',
  tool: 'get_feed_api_v2_feeds__feed_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_feed_by_hash_api_v2_feeds_hash__share_link_hash__getDetail = {
  name: 'get_feed_by_hash_api_v2_feeds_hash__share_link_hash__getDetail',
  description: 'Detail view for get_feed_by_hash_api_v2_feeds_hash__share_link_hash__get',
  tool: 'get_feed_by_hash_api_v2_feeds_hash__share_link_hash__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const business_insights_api_v2_resonance_business_insights_postForm = {
  name: 'business_insights_api_v2_resonance_business_insights_postForm',
  description: 'Form for business_insights_api_v2_resonance_business_insights_post',
  tool: 'business_insights_api_v2_resonance_business_insights_post',
  type: 'form',
  fields: [
    { name: 'session_id', label: 'Session id', type: 'text' },
    { name: 'user_input', label: 'User input', type: 'text', validation: 'required' },
    { name: 'current_state', label: 'Current state', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="business_insights_api_v2_resonance_business_insights_postForm">
      <label>Session id: <input type="text" name="session_id" /></label>
      <label>User input: <input type="text" name="user_input" /></label>
      <label>Current state: <input type="text" name="current_state" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_public_feed_api_v2_public_share_feed__share_link_hash__getDetail = {
  name: 'get_public_feed_api_v2_public_share_feed__share_link_hash__getDetail',
  description: 'Detail view for get_public_feed_api_v2_public_share_feed__share_link_hash__get',
  tool: 'get_public_feed_api_v2_public_share_feed__share_link_hash__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_widget_data_api_v2_public_widget__embed_token__getDetail = {
  name: 'get_widget_data_api_v2_public_widget__embed_token__getDetail',
  description: 'Detail view for get_widget_data_api_v2_public_widget__embed_token__get',
  tool: 'get_widget_data_api_v2_public_widget__embed_token__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const track_survey_view_api_v2_public_surveys_track_view_postForm = {
  name: 'track_survey_view_api_v2_public_surveys_track_view_postForm',
  description: 'Form for track_survey_view_api_v2_public_surveys_track_view_post',
  tool: 'track_survey_view_api_v2_public_surveys_track_view_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'distribution_type', label: 'Distribution type', type: 'text' },
    { name: 'user_hash', label: 'User hash', type: 'text' },
    { name: 'session_id', label: 'Session id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="track_survey_view_api_v2_public_surveys_track_view_postForm">
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Distribution type: <input type="text" name="distribution_type" /></label>
      <label>User hash: <input type="text" name="user_hash" /></label>
      <label>Session id: <input type="text" name="session_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_getDetail = {
  name: 'get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_getDetail',
  description: 'Detail view for get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_get',
  tool: 'get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_company_data_api_v2_company_getWidget = {
  name: 'get_company_data_api_v2_company_getWidget',
  description: 'Display results from get_company_data_api_v2_company_get',
  tool: 'get_company_data_api_v2_company_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_reports_api_v2_reports__getWidget = {
  name: 'list_reports_api_v2_reports__getWidget',
  description: 'Display results from list_reports_api_v2_reports__get',
  tool: 'list_reports_api_v2_reports__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_report_api_v2_reports__postForm = {
  name: 'create_report_api_v2_reports__postForm',
  description: 'Form for create_report_api_v2_reports__post',
  tool: 'create_report_api_v2_reports__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'language', label: 'Language', type: 'select' },
    { name: 'survey_id', label: 'Survey id', type: 'text' },
    { name: 'group_id', label: 'Group id', type: 'text' },
    { name: 'selected_questions', label: 'Selected questions', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
    { name: 'time_range', label: 'Time range', type: 'select', validation: 'required' },
    { name: 'time_aggregation', label: 'Time aggregation', type: 'select' },
    { name: 'custom_start_date', label: 'Custom start date', type: 'text' },
    { name: 'custom_end_date', label: 'Custom end date', type: 'text' },
    { name: 'recipient_emails', label: 'Recipient emails', type: 'text' },
    { name: 'schedule_config', label: 'Schedule config', type: 'text', validation: 'required' },
    { name: 'status', label: 'Status', type: 'select' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_report_api_v2_reports__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Language: <input type="select" name="language" /></label>
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <label>Group id: <input type="text" name="group_id" /></label>
      <label>Selected questions: <input type="text" name="selected_questions" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <label>Time range: <input type="select" name="time_range" /></label>
      <label>Time aggregation: <input type="select" name="time_aggregation" /></label>
      <label>Custom start date: <input type="text" name="custom_start_date" /></label>
      <label>Custom end date: <input type="text" name="custom_end_date" /></label>
      <label>Recipient emails: <input type="text" name="recipient_emails" /></label>
      <label>Schedule config: <input type="text" name="schedule_config" /></label>
      <label>Status: <input type="select" name="status" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_scheduler_status_api_v2_reports_scheduler_status_getWidget = {
  name: 'get_scheduler_status_api_v2_reports_scheduler_status_getWidget',
  description: 'Display results from get_scheduler_status_api_v2_reports_scheduler_status_get',
  tool: 'get_scheduler_status_api_v2_reports_scheduler_status_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_getWidget = {
  name: 'get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_getWidget',
  description: 'Display results from get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_get',
  tool: 'get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_scheduled_reports_api_v2_reports_scheduled_getWidget = {
  name: 'get_scheduled_reports_api_v2_reports_scheduled_getWidget',
  description: 'Display results from get_scheduled_reports_api_v2_reports_scheduled_get',
  tool: 'get_scheduled_reports_api_v2_reports_scheduled_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const health_check_api_v2_reports_health_getWidget = {
  name: 'health_check_api_v2_reports_health_getWidget',
  description: 'Display results from health_check_api_v2_reports_health_get',
  tool: 'health_check_api_v2_reports_health_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_report_api_v2_reports__report_id__getDetail = {
  name: 'get_report_api_v2_reports__report_id__getDetail',
  description: 'Detail view for get_report_api_v2_reports__report_id__get',
  tool: 'get_report_api_v2_reports__report_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_report_api_v2_reports__report_id__putForm = {
  name: 'update_report_api_v2_reports__report_id__putForm',
  description: 'Form for update_report_api_v2_reports__report_id__put',
  tool: 'update_report_api_v2_reports__report_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'language', label: 'Language', type: 'text' },
    { name: 'survey_id', label: 'Survey id', type: 'text' },
    { name: 'group_id', label: 'Group id', type: 'text' },
    { name: 'selected_questions', label: 'Selected questions', type: 'text' },
    { name: 'filters', label: 'Filters', type: 'text' },
    { name: 'time_range', label: 'Time range', type: 'text' },
    { name: 'time_aggregation', label: 'Time aggregation', type: 'text' },
    { name: 'custom_start_date', label: 'Custom start date', type: 'text' },
    { name: 'custom_end_date', label: 'Custom end date', type: 'text' },
    { name: 'recipient_emails', label: 'Recipient emails', type: 'text' },
    { name: 'schedule_config', label: 'Schedule config', type: 'text' },
    { name: 'is_active', label: 'Is active', type: 'text' },
    { name: 'status', label: 'Status', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_report_api_v2_reports__report_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <label>Group id: <input type="text" name="group_id" /></label>
      <label>Selected questions: <input type="text" name="selected_questions" /></label>
      <label>Filters: <input type="text" name="filters" /></label>
      <label>Time range: <input type="text" name="time_range" /></label>
      <label>Time aggregation: <input type="text" name="time_aggregation" /></label>
      <label>Custom start date: <input type="text" name="custom_start_date" /></label>
      <label>Custom end date: <input type="text" name="custom_end_date" /></label>
      <label>Recipient emails: <input type="text" name="recipient_emails" /></label>
      <label>Schedule config: <input type="text" name="schedule_config" /></label>
      <label>Is active: <input type="text" name="is_active" /></label>
      <label>Status: <input type="text" name="status" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const execute_report_api_v2_reports__report_id__execute_postForm = {
  name: 'execute_report_api_v2_reports__report_id__execute_postForm',
  description: 'Form for execute_report_api_v2_reports__report_id__execute_post',
  tool: 'execute_report_api_v2_reports__report_id__execute_post',
  type: 'form',
  fields: [
    { name: 'test_mode', label: 'Test mode', type: 'checkbox' },
    { name: 'test_email', label: 'Test email', type: 'text' },
    { name: 'shared_link_expires_days', label: 'Shared link expires days', type: 'number' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="execute_report_api_v2_reports__report_id__execute_postForm">
      <label>Test mode: <input type="checkbox" name="test_mode" /></label>
      <label>Test email: <input type="text" name="test_email" /></label>
      <label>Shared link expires days: <input type="number" name="shared_link_expires_days" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const preview_report_api_v2_reports__report_id__preview_postForm = {
  name: 'preview_report_api_v2_reports__report_id__preview_postForm',
  description: 'Form for preview_report_api_v2_reports__report_id__preview_post',
  tool: 'preview_report_api_v2_reports__report_id__preview_post',
  type: 'form',
  fields: [
    { name: 'limit', label: 'Limit', type: 'number' },
    { name: 'include_charts', label: 'Include charts', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="preview_report_api_v2_reports__report_id__preview_postForm">
      <label>Limit: <input type="number" name="limit" /></label>
      <label>Include charts: <input type="checkbox" name="include_charts" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_report_executions_api_v2_reports__report_id__executions_getDetail = {
  name: 'list_report_executions_api_v2_reports__report_id__executions_getDetail',
  description: 'Detail view for list_report_executions_api_v2_reports__report_id__executions_get',
  tool: 'list_report_executions_api_v2_reports__report_id__executions_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_report_statistics_api_v2_reports__report_id__statistics_getDetail = {
  name: 'get_report_statistics_api_v2_reports__report_id__statistics_getDetail',
  description: 'Detail view for get_report_statistics_api_v2_reports__report_id__statistics_get',
  tool: 'get_report_statistics_api_v2_reports__report_id__statistics_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const force_execute_report_api_v2_reports__report_id__execute_force_postForm = {
  name: 'force_execute_report_api_v2_reports__report_id__execute_force_postForm',
  description: 'Form for force_execute_report_api_v2_reports__report_id__execute_force_post',
  tool: 'force_execute_report_api_v2_reports__report_id__execute_force_post',
  type: 'form',
  fields: [
    { name: 'reason', label: 'Reason', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="force_execute_report_api_v2_reports__report_id__execute_force_postForm">
      <label>Reason: <input type="text" name="reason" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const export_report_api_v2_reports__report_id__export_postForm = {
  name: 'export_report_api_v2_reports__report_id__export_postForm',
  description: 'Form for export_report_api_v2_reports__report_id__export_post',
  tool: 'export_report_api_v2_reports__report_id__export_post',
  type: 'form',
  fields: [
    { name: 'format', label: 'Format', type: 'text' },
    { name: 'include_charts', label: 'Include charts', type: 'checkbox' },
    { name: 'date_range_override', label: 'Date range override', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="export_report_api_v2_reports__report_id__export_postForm">
      <label>Format: <input type="text" name="format" /></label>
      <label>Include charts: <input type="checkbox" name="include_charts" /></label>
      <label>Date range override: <input type="text" name="date_range_override" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const batch_delete_reports_api_v2_reports_batch_delete_postForm = {
  name: 'batch_delete_reports_api_v2_reports_batch_delete_postForm',
  description: 'Form for batch_delete_reports_api_v2_reports_batch_delete_post',
  tool: 'batch_delete_reports_api_v2_reports_batch_delete_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="batch_delete_reports_api_v2_reports_batch_delete_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__getDetail = {
  name: 'get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__getDetail',
  description: 'Detail view for get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__get',
  tool: 'get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_getDetail = {
  name: 'get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_getDetail',
  description: 'Detail view for get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_get',
  tool: 'get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_getDetail = {
  name: 'get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_getDetail',
  description: 'Detail view for get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_get',
  tool: 'get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_auth_url_api_v2_integrations_gominga_auth_getWidget = {
  name: 'get_auth_url_api_v2_integrations_gominga_auth_getWidget',
  description: 'Display results from get_auth_url_api_v2_integrations_gominga_auth_get',
  tool: 'get_auth_url_api_v2_integrations_gominga_auth_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const handle_callback_api_v2_integrations_gominga_callback_getWidget = {
  name: 'handle_callback_api_v2_integrations_gominga_callback_getWidget',
  description: 'Display results from handle_callback_api_v2_integrations_gominga_callback_get',
  tool: 'handle_callback_api_v2_integrations_gominga_callback_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_sync_status_api_v2_integrations_gominga_sync_status_getWidget = {
  name: 'get_sync_status_api_v2_integrations_gominga_sync_status_getWidget',
  description: 'Display results from get_sync_status_api_v2_integrations_gominga_sync_status_get',
  tool: 'get_sync_status_api_v2_integrations_gominga_sync_status_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_reviews_api_v2_integrations_gominga_reviews_getWidget = {
  name: 'get_reviews_api_v2_integrations_gominga_reviews_getWidget',
  description: 'Display results from get_reviews_api_v2_integrations_gominga_reviews_get',
  tool: 'get_reviews_api_v2_integrations_gominga_reviews_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_postForm = {
  name: 'reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_postForm',
  description: 'Form for reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_post',
  tool: 'reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_post',
  type: 'form',
  fields: [
    { name: 'reply_text', label: 'Reply text', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_postForm">
      <label>Reply text: <input type="text" name="reply_text" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_mock_reviews_api_v2_integrations_gominga_reviews_mock_getWidget = {
  name: 'get_mock_reviews_api_v2_integrations_gominga_reviews_mock_getWidget',
  description: 'Display results from get_mock_reviews_api_v2_integrations_gominga_reviews_mock_get',
  tool: 'get_mock_reviews_api_v2_integrations_gominga_reviews_mock_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_surveys_with_scores_api_v2_surveys_with_scores_getWidget = {
  name: 'get_surveys_with_scores_api_v2_surveys_with_scores_getWidget',
  description: 'Display results from get_surveys_with_scores_api_v2_surveys_with_scores_get',
  tool: 'get_surveys_with_scores_api_v2_surveys_with_scores_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_survey_score_details_api_v2_surveys__survey_id__score_details_getDetail = {
  name: 'get_survey_score_details_api_v2_surveys__survey_id__score_details_getDetail',
  description: 'Detail view for get_survey_score_details_api_v2_surveys__survey_id__score_details_get',
  tool: 'get_survey_score_details_api_v2_surveys__survey_id__score_details_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_widget_score_api_v2_widget_surveys__survey_id__score_getDetail = {
  name: 'get_widget_score_api_v2_widget_surveys__survey_id__score_getDetail',
  description: 'Detail view for get_widget_score_api_v2_widget_surveys__survey_id__score_get',
  tool: 'get_widget_score_api_v2_widget_surveys__survey_id__score_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_getDetail = {
  name: 'get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_getDetail',
  description: 'Detail view for get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_get',
  tool: 'get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_used_topics_api_v2_surveys__survey_id__topics_used_getDetail = {
  name: 'get_used_topics_api_v2_surveys__survey_id__topics_used_getDetail',
  description: 'Detail view for get_used_topics_api_v2_surveys__survey_id__topics_used_get',
  tool: 'get_used_topics_api_v2_surveys__survey_id__topics_used_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const list_journeys_api_v2_journeys_getWidget = {
  name: 'list_journeys_api_v2_journeys_getWidget',
  description: 'Display results from list_journeys_api_v2_journeys_get',
  tool: 'list_journeys_api_v2_journeys_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_journey_api_v2_journeys_postForm = {
  name: 'create_journey_api_v2_journeys_postForm',
  description: 'Form for create_journey_api_v2_journeys_post',
  tool: 'create_journey_api_v2_journeys_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'journey_type', label: 'Journey type', type: 'select' },
    { name: 'stages', label: 'Stages', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_journey_api_v2_journeys_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Journey type: <input type="select" name="journey_type" /></label>
      <label>Stages: <input type="text" name="stages" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_templates_api_v2_journeys_templates_getWidget = {
  name: 'list_templates_api_v2_journeys_templates_getWidget',
  description: 'Display results from list_templates_api_v2_journeys_templates_get',
  tool: 'list_templates_api_v2_journeys_templates_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_template_api_v2_journeys_templates__template_id__getDetail = {
  name: 'get_template_api_v2_journeys_templates__template_id__getDetail',
  description: 'Detail view for get_template_api_v2_journeys_templates__template_id__get',
  tool: 'get_template_api_v2_journeys_templates__template_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_journey_api_v2_journeys__journey_id__getDetail = {
  name: 'get_journey_api_v2_journeys__journey_id__getDetail',
  description: 'Detail view for get_journey_api_v2_journeys__journey_id__get',
  tool: 'get_journey_api_v2_journeys__journey_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const generate_journey_ai_api_v2_journeys_generate_postForm = {
  name: 'generate_journey_ai_api_v2_journeys_generate_postForm',
  description: 'Form for generate_journey_ai_api_v2_journeys_generate_post',
  tool: 'generate_journey_ai_api_v2_journeys_generate_post',
  type: 'form',
  fields: [
    { name: 'domain', label: 'Domain', type: 'text' },
    { name: 'industry', label: 'Industry', type: 'text' },
    { name: 'company_description', label: 'Company description', type: 'text' },
    { name: 'template_id', label: 'Template id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="generate_journey_ai_api_v2_journeys_generate_postForm">
      <label>Domain: <input type="text" name="domain" /></label>
      <label>Industry: <input type="text" name="industry" /></label>
      <label>Company description: <input type="text" name="company_description" /></label>
      <label>Template id: <input type="text" name="template_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const save_generated_journeys_api_v2_journeys_generate_save_postForm = {
  name: 'save_generated_journeys_api_v2_journeys_generate_save_postForm',
  description: 'Form for save_generated_journeys_api_v2_journeys_generate_save_post',
  tool: 'save_generated_journeys_api_v2_journeys_generate_save_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="save_generated_journeys_api_v2_journeys_generate_save_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_postForm = {
  name: 'suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_postForm',
  description: 'Form for suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_post',
  tool: 'suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_post',
  type: 'form',
  fields: [
    { name: 'touchpoint_name', label: 'Touchpoint name', type: 'text', validation: 'required' },
    { name: 'touchpoint_description', label: 'Touchpoint description', type: 'text' },
    { name: 'stage_name', label: 'Stage name', type: 'text' },
    { name: 'journey_name', label: 'Journey name', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_postForm">
      <label>Touchpoint name: <input type="text" name="touchpoint_name" /></label>
      <label>Touchpoint description: <input type="text" name="touchpoint_description" /></label>
      <label>Stage name: <input type="text" name="stage_name" /></label>
      <label>Journey name: <input type="text" name="journey_name" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const analyze_csv_journeys_api_v2_journeys_analyze_csv_postForm = {
  name: 'analyze_csv_journeys_api_v2_journeys_analyze_csv_postForm',
  description: 'Form for analyze_csv_journeys_api_v2_journeys_analyze_csv_post',
  tool: 'analyze_csv_journeys_api_v2_journeys_analyze_csv_post',
  type: 'form',
  fields: [
    { name: 'headers', label: 'Headers', type: 'text', validation: 'required' },
    { name: 'rows', label: 'Rows', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="analyze_csv_journeys_api_v2_journeys_analyze_csv_postForm">
      <label>Headers: <input type="text" name="headers" /></label>
      <label>Rows: <input type="text" name="rows" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const create_stage_api_v2_journeys__journey_id__stages_postForm = {
  name: 'create_stage_api_v2_journeys__journey_id__stages_postForm',
  description: 'Form for create_stage_api_v2_journeys__journey_id__stages_post',
  tool: 'create_stage_api_v2_journeys__journey_id__stages_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'sequence', label: 'Sequence', type: 'number' },
    { name: 'touchpoints', label: 'Touchpoints', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_stage_api_v2_journeys__journey_id__stages_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Sequence: <input type="number" name="sequence" /></label>
      <label>Touchpoints: <input type="text" name="touchpoints" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const reorder_stages_api_v2_journeys__journey_id__stages_reorder_putForm = {
  name: 'reorder_stages_api_v2_journeys__journey_id__stages_reorder_putForm',
  description: 'Form for reorder_stages_api_v2_journeys__journey_id__stages_reorder_put',
  tool: 'reorder_stages_api_v2_journeys__journey_id__stages_reorder_put',
  type: 'form',
  fields: [
    { name: 'stage_ids', label: 'Stage ids', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="reorder_stages_api_v2_journeys__journey_id__stages_reorder_putForm">
      <label>Stage ids: <input type="text" name="stage_ids" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_postForm = {
  name: 'create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_postForm',
  description: 'Form for create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_post',
  tool: 'create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'channel', label: 'Channel', type: 'text' },
    { name: 'metric_type', label: 'Metric type', type: 'select' },
    { name: 'timing', label: 'Timing', type: 'text' },
    { name: 'sequence', label: 'Sequence', type: 'number' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Channel: <input type="text" name="channel" /></label>
      <label>Metric type: <input type="select" name="metric_type" /></label>
      <label>Timing: <input type="text" name="timing" /></label>
      <label>Sequence: <input type="number" name="sequence" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_putForm = {
  name: 'reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_putForm',
  description: 'Form for reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_put',
  tool: 'reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_put',
  type: 'form',
  fields: [
    { name: 'touchpoint_ids', label: 'Touchpoint ids', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_putForm">
      <label>Touchpoint ids: <input type="text" name="touchpoint_ids" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_getDetail = {
  name: 'get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_getDetail',
  description: 'Detail view for get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_get',
  tool: 'get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_postForm = {
  name: 'link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_postForm',
  description: 'Form for link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_post',
  tool: 'link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
    { name: 'is_primary', label: 'Is primary', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_postForm">
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <label>Is primary: <input type="checkbox" name="is_primary" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_organization_settings_api_v2_phone_numbers_organization_settings_getWidget = {
  name: 'get_organization_settings_api_v2_phone_numbers_organization_settings_getWidget',
  description: 'Display results from get_organization_settings_api_v2_phone_numbers_organization_settings_get',
  tool: 'get_organization_settings_api_v2_phone_numbers_organization_settings_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_getWidget = {
  name: 'suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_getWidget',
  description: 'Display results from suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_get',
  tool: 'suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const search_region_numbers_api_v2_phone_numbers_search_region_getWidget = {
  name: 'search_region_numbers_api_v2_phone_numbers_search_region_getWidget',
  description: 'Display results from search_region_numbers_api_v2_phone_numbers_search_region_get',
  tool: 'search_region_numbers_api_v2_phone_numbers_search_region_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const search_available_numbers_api_v2_phone_numbers_search_getWidget = {
  name: 'search_available_numbers_api_v2_phone_numbers_search_getWidget',
  description: 'Display results from search_available_numbers_api_v2_phone_numbers_search_get',
  tool: 'search_available_numbers_api_v2_phone_numbers_search_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const purchase_number_api_v2_phone_numbers_purchase_postForm = {
  name: 'purchase_number_api_v2_phone_numbers_purchase_postForm',
  description: 'Form for purchase_number_api_v2_phone_numbers_purchase_post',
  tool: 'purchase_number_api_v2_phone_numbers_purchase_post',
  type: 'form',
  fields: [
    { name: 'phone_number', label: 'Phone number', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'friendly_name', label: 'Friendly name', type: 'text' },
    { name: 'locality', label: 'Locality', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="purchase_number_api_v2_phone_numbers_purchase_postForm">
      <label>Phone number: <input type="text" name="phone_number" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Friendly name: <input type="text" name="friendly_name" /></label>
      <label>Locality: <input type="text" name="locality" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_phone_numbers_api_v2_phone_numbers_getWidget = {
  name: 'list_phone_numbers_api_v2_phone_numbers_getWidget',
  description: 'Display results from list_phone_numbers_api_v2_phone_numbers_get',
  tool: 'list_phone_numbers_api_v2_phone_numbers_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const assign_number_to_survey_api_v2_phone_numbers__number_id__assign_postForm = {
  name: 'assign_number_to_survey_api_v2_phone_numbers__number_id__assign_postForm',
  description: 'Form for assign_number_to_survey_api_v2_phone_numbers__number_id__assign_post',
  tool: 'assign_number_to_survey_api_v2_phone_numbers__number_id__assign_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="assign_number_to_survey_api_v2_phone_numbers__number_id__assign_postForm">
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_postForm = {
  name: 'unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_postForm',
  description: 'Form for unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_post',
  tool: 'unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_postForm">
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_number_details_api_v2_phone_numbers__number_id__getDetail = {
  name: 'get_number_details_api_v2_phone_numbers__number_id__getDetail',
  description: 'Detail view for get_number_details_api_v2_phone_numbers__number_id__get',
  tool: 'get_number_details_api_v2_phone_numbers__number_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_survey_config_api_v2_phone_configs_surveys__survey_id__config_getDetail = {
  name: 'get_survey_config_api_v2_phone_configs_surveys__survey_id__config_getDetail',
  description: 'Detail view for get_survey_config_api_v2_phone_configs_surveys__survey_id__config_get',
  tool: 'get_survey_config_api_v2_phone_configs_surveys__survey_id__config_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_survey_config_api_v2_phone_configs_surveys__survey_id__config_putForm = {
  name: 'update_survey_config_api_v2_phone_configs_surveys__survey_id__config_putForm',
  description: 'Form for update_survey_config_api_v2_phone_configs_surveys__survey_id__config_put',
  tool: 'update_survey_config_api_v2_phone_configs_surveys__survey_id__config_put',
  type: 'form',
  fields: [
    { name: 'voice', label: 'Voice', type: 'text' },
    { name: 'language', label: 'Language', type: 'text' },
    { name: 'interruption_threshold', label: 'Interruption threshold', type: 'text' },
    { name: 'temperature', label: 'Temperature', type: 'text' },
    { name: 'max_duration', label: 'Max duration', type: 'text' },
    { name: 'background_track', label: 'Background track', type: 'text' },
    { name: 'noise_cancellation', label: 'Noise cancellation', type: 'text' },
    { name: 'record', label: 'Record', type: 'text' },
    { name: 'custom_script', label: 'Custom script', type: 'text' },
    { name: 'use_custom_script', label: 'Use custom script', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_survey_config_api_v2_phone_configs_surveys__survey_id__config_putForm">
      <label>Voice: <input type="text" name="voice" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Interruption threshold: <input type="text" name="interruption_threshold" /></label>
      <label>Temperature: <input type="text" name="temperature" /></label>
      <label>Max duration: <input type="text" name="max_duration" /></label>
      <label>Background track: <input type="text" name="background_track" /></label>
      <label>Noise cancellation: <input type="text" name="noise_cancellation" /></label>
      <label>Record: <input type="text" name="record" /></label>
      <label>Custom script: <input type="text" name="custom_script" /></label>
      <label>Use custom script: <input type="text" name="use_custom_script" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_presets_api_v2_phone_configs_presets_getWidget = {
  name: 'list_presets_api_v2_phone_configs_presets_getWidget',
  description: 'Display results from list_presets_api_v2_phone_configs_presets_get',
  tool: 'list_presets_api_v2_phone_configs_presets_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_preset_api_v2_phone_configs_presets_postForm = {
  name: 'create_preset_api_v2_phone_configs_presets_postForm',
  description: 'Form for create_preset_api_v2_phone_configs_presets_post',
  tool: 'create_preset_api_v2_phone_configs_presets_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'voice', label: 'Voice', type: 'text' },
    { name: 'language', label: 'Language', type: 'text' },
    { name: 'interruption_threshold', label: 'Interruption threshold', type: 'number' },
    { name: 'temperature', label: 'Temperature', type: 'number' },
    { name: 'max_duration', label: 'Max duration', type: 'number' },
    { name: 'background_track', label: 'Background track', type: 'text' },
    { name: 'noise_cancellation', label: 'Noise cancellation', type: 'checkbox' },
    { name: 'record', label: 'Record', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_preset_api_v2_phone_configs_presets_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Voice: <input type="text" name="voice" /></label>
      <label>Language: <input type="text" name="language" /></label>
      <label>Interruption threshold: <input type="number" name="interruption_threshold" /></label>
      <label>Temperature: <input type="number" name="temperature" /></label>
      <label>Max duration: <input type="number" name="max_duration" /></label>
      <label>Background track: <input type="text" name="background_track" /></label>
      <label>Noise cancellation: <input type="checkbox" name="noise_cancellation" /></label>
      <label>Record: <input type="checkbox" name="record" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_available_voices_api_v2_phone_configs_voices_getWidget = {
  name: 'list_available_voices_api_v2_phone_configs_voices_getWidget',
  description: 'Display results from list_available_voices_api_v2_phone_configs_voices_get',
  tool: 'list_available_voices_api_v2_phone_configs_voices_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_available_languages_api_v2_phone_configs_languages_getWidget = {
  name: 'list_available_languages_api_v2_phone_configs_languages_getWidget',
  description: 'Display results from list_available_languages_api_v2_phone_configs_languages_get',
  tool: 'list_available_languages_api_v2_phone_configs_languages_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_postForm = {
  name: 'preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_postForm',
  description: 'Form for preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_post',
  tool: 'preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_post',
  type: 'form',
  fields: [
    { name: 'config_id', label: 'Config id', type: 'text' },
    { name: 'save_as_custom', label: 'Save as custom', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_postForm">
      <label>Config id: <input type="text" name="config_id" /></label>
      <label>Save as custom: <input type="checkbox" name="save_as_custom" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_postForm = {
  name: 'create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_postForm',
  description: 'Form for create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_post',
  tool: 'create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_post',
  type: 'form',
  fields: [
    { name: 'phone_number', label: 'Phone number', type: 'text', validation: 'required' },
    { name: 'config_id', label: 'Config id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_postForm">
      <label>Phone number: <input type="text" name="phone_number" /></label>
      <label>Config id: <input type="text" name="config_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_test_calls_api_v2_surveys__survey_id__test_calls_getDetail = {
  name: 'list_test_calls_api_v2_surveys__survey_id__test_calls_getDetail',
  description: 'Detail view for list_test_calls_api_v2_surveys__survey_id__test_calls_get',
  tool: 'list_test_calls_api_v2_surveys__survey_id__test_calls_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const create_test_call_api_v2_surveys__survey_id__test_calls_postForm = {
  name: 'create_test_call_api_v2_surveys__survey_id__test_calls_postForm',
  description: 'Form for create_test_call_api_v2_surveys__survey_id__test_calls_post',
  tool: 'create_test_call_api_v2_surveys__survey_id__test_calls_post',
  type: 'form',
  fields: [
    { name: 'config_id', label: 'Config id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_test_call_api_v2_surveys__survey_id__test_calls_postForm">
      <label>Config id: <input type="text" name="config_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_test_call_api_v2_surveys__survey_id__test_calls__test_id__getDetail = {
  name: 'get_test_call_api_v2_surveys__survey_id__test_calls__test_id__getDetail',
  description: 'Detail view for get_test_call_api_v2_surveys__survey_id__test_calls__test_id__get',
  tool: 'get_test_call_api_v2_surveys__survey_id__test_calls__test_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_postForm = {
  name: 'approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_postForm',
  description: 'Form for approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_post',
  tool: 'approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_post',
  type: 'form',
  fields: [
    { name: 'approved', label: 'Approved', type: 'checkbox', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_postForm">
      <label>Approved: <input type="checkbox" name="approved" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_postForm = {
  name: 'bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_postForm',
  description: 'Form for bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_post',
  tool: 'bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_postForm = {
  name: 'upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_postForm',
  description: 'Form for upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_post',
  tool: 'upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_postForm = {
  name: 'validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_postForm',
  description: 'Form for validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_post',
  tool: 'validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_post',
  type: 'form',
  fields: [
    { name: 'upload_id', label: 'Upload id', type: 'text', validation: 'required' },
    { name: 'column_mapping', label: 'Column mapping', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_postForm">
      <label>Upload id: <input type="text" name="upload_id" /></label>
      <label>Column mapping: <input type="text" name="column_mapping" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_campaigns_api_v2_surveys__survey_id__phone_campaigns_getDetail = {
  name: 'list_campaigns_api_v2_surveys__survey_id__phone_campaigns_getDetail',
  description: 'Detail view for list_campaigns_api_v2_surveys__survey_id__phone_campaigns_get',
  tool: 'list_campaigns_api_v2_surveys__survey_id__phone_campaigns_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const create_campaign_api_v2_surveys__survey_id__phone_campaigns_postForm = {
  name: 'create_campaign_api_v2_surveys__survey_id__phone_campaigns_postForm',
  description: 'Form for create_campaign_api_v2_surveys__survey_id__phone_campaigns_post',
  tool: 'create_campaign_api_v2_surveys__survey_id__phone_campaigns_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'upload_id', label: 'Upload id', type: 'text', validation: 'required' },
    { name: 'column_mapping', label: 'Column mapping', type: 'text', validation: 'required' },
    { name: 'from_number', label: 'From number', type: 'text' },
    { name: 'config_id', label: 'Config id', type: 'text' },
    { name: 'scheduled_start_at', label: 'Scheduled start at', type: 'text' },
    { name: 'throttle_per_hour', label: 'Throttle per hour', type: 'number' },
    { name: 'max_attempts', label: 'Max attempts', type: 'number' },
    { name: 'retry_delay_hours', label: 'Retry delay hours', type: 'number' },
    { name: 'retry_on', label: 'Retry on', type: 'text' },
    { name: 'exclude_invalid', label: 'Exclude invalid', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_campaign_api_v2_surveys__survey_id__phone_campaigns_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Upload id: <input type="text" name="upload_id" /></label>
      <label>Column mapping: <input type="text" name="column_mapping" /></label>
      <label>From number: <input type="text" name="from_number" /></label>
      <label>Config id: <input type="text" name="config_id" /></label>
      <label>Scheduled start at: <input type="text" name="scheduled_start_at" /></label>
      <label>Throttle per hour: <input type="number" name="throttle_per_hour" /></label>
      <label>Max attempts: <input type="number" name="max_attempts" /></label>
      <label>Retry delay hours: <input type="number" name="retry_delay_hours" /></label>
      <label>Retry on: <input type="text" name="retry_on" /></label>
      <label>Exclude invalid: <input type="checkbox" name="exclude_invalid" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__getDetail = {
  name: 'get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__getDetail',
  description: 'Detail view for get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__get',
  tool: 'get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_getDetail = {
  name: 'get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_getDetail',
  description: 'Detail view for get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_get',
  tool: 'get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_products_api_v2_products_getWidget = {
  name: 'get_products_api_v2_products_getWidget',
  description: 'Display results from get_products_api_v2_products_get',
  tool: 'get_products_api_v2_products_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_product_api_v2_products_postForm = {
  name: 'create_product_api_v2_products_postForm',
  description: 'Form for create_product_api_v2_products_post',
  tool: 'create_product_api_v2_products_post',
  type: 'form',
  fields: [
    { name: 'external_id', label: 'External id', type: 'text', validation: 'required' },
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'category_id', label: 'Category id', type: 'text' },
    { name: 'image_url', label: 'Image url', type: 'text' },
    { name: 'product_url', label: 'Product url', type: 'text' },
    { name: 'attributes', label: 'Attributes', type: 'text' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_product_api_v2_products_postForm">
      <label>External id: <input type="text" name="external_id" /></label>
      <label>Name: <input type="text" name="name" /></label>
      <label>Category id: <input type="text" name="category_id" /></label>
      <label>Image url: <input type="text" name="image_url" /></label>
      <label>Product url: <input type="text" name="product_url" /></label>
      <label>Attributes: <input type="text" name="attributes" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_product_api_v2_products__product_id__getDetail = {
  name: 'get_product_api_v2_products__product_id__getDetail',
  description: 'Detail view for get_product_api_v2_products__product_id__get',
  tool: 'get_product_api_v2_products__product_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_product_api_v2_products__product_id__putForm = {
  name: 'update_product_api_v2_products__product_id__putForm',
  description: 'Form for update_product_api_v2_products__product_id__put',
  tool: 'update_product_api_v2_products__product_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'category_id', label: 'Category id', type: 'text' },
    { name: 'image_url', label: 'Image url', type: 'text' },
    { name: 'product_url', label: 'Product url', type: 'text' },
    { name: 'attributes', label: 'Attributes', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_product_api_v2_products__product_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Category id: <input type="text" name="category_id" /></label>
      <label>Image url: <input type="text" name="image_url" /></label>
      <label>Product url: <input type="text" name="product_url" /></label>
      <label>Attributes: <input type="text" name="attributes" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_products_by_external_ids_public_api_v2_by_external_ids_public_getWidget = {
  name: 'get_products_by_external_ids_public_api_v2_by_external_ids_public_getWidget',
  description: 'Display results from get_products_by_external_ids_public_api_v2_by_external_ids_public_get',
  tool: 'get_products_by_external_ids_public_api_v2_by_external_ids_public_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const import_products_api_v2_products_import_postForm = {
  name: 'import_products_api_v2_products_import_postForm',
  description: 'Form for import_products_api_v2_products_import_post',
  tool: 'import_products_api_v2_products_import_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="import_products_api_v2_products_import_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_product_reviews_api_v2_products__product_id__reviews_getDetail = {
  name: 'get_product_reviews_api_v2_products__product_id__reviews_getDetail',
  description: 'Detail view for get_product_reviews_api_v2_products__product_id__reviews_get',
  tool: 'get_product_reviews_api_v2_products__product_id__reviews_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_product_review_summary_api_v2_products__product_id__reviews_summary_getDetail = {
  name: 'get_product_review_summary_api_v2_products__product_id__reviews_summary_getDetail',
  description: 'Detail view for get_product_review_summary_api_v2_products__product_id__reviews_summary_get',
  tool: 'get_product_review_summary_api_v2_products__product_id__reviews_summary_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_categories_api_v2_categories_getWidget = {
  name: 'get_categories_api_v2_categories_getWidget',
  description: 'Display results from get_categories_api_v2_categories_get',
  tool: 'get_categories_api_v2_categories_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_category_api_v2_categories_postForm = {
  name: 'create_category_api_v2_categories_postForm',
  description: 'Form for create_category_api_v2_categories_post',
  tool: 'create_category_api_v2_categories_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'parent_id', label: 'Parent id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_category_api_v2_categories_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Parent id: <input type="text" name="parent_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_category_api_v2_categories__category_id__getDetail = {
  name: 'get_category_api_v2_categories__category_id__getDetail',
  description: 'Detail view for get_category_api_v2_categories__category_id__get',
  tool: 'get_category_api_v2_categories__category_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_category_api_v2_categories__category_id__putForm = {
  name: 'update_category_api_v2_categories__category_id__putForm',
  description: 'Form for update_category_api_v2_categories__category_id__put',
  tool: 'update_category_api_v2_categories__category_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'parent_id', label: 'Parent id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_category_api_v2_categories__category_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Parent id: <input type="text" name="parent_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_orders_api_v2_orders_getWidget = {
  name: 'get_orders_api_v2_orders_getWidget',
  description: 'Display results from get_orders_api_v2_orders_get',
  tool: 'get_orders_api_v2_orders_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_order_api_v2_orders_postForm = {
  name: 'create_order_api_v2_orders_postForm',
  description: 'Form for create_order_api_v2_orders_post',
  tool: 'create_order_api_v2_orders_post',
  type: 'form',
  fields: [
    { name: 'order_number', label: 'Order number', type: 'text', validation: 'required' },
    { name: 'customer_email', label: 'Customer email', type: 'text', validation: 'required' },
    { name: 'order_date', label: 'Order date', type: 'datetime-local', validation: 'required' },
    { name: 'products', label: 'Products', type: 'text' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_order_api_v2_orders_postForm">
      <label>Order number: <input type="text" name="order_number" /></label>
      <label>Customer email: <input type="text" name="customer_email" /></label>
      <label>Order date: <input type="datetime-local" name="order_date" /></label>
      <label>Products: <input type="text" name="products" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_order_api_v2_orders__order_id__getDetail = {
  name: 'get_order_api_v2_orders__order_id__getDetail',
  description: 'Detail view for get_order_api_v2_orders__order_id__get',
  tool: 'get_order_api_v2_orders__order_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_order_api_v2_orders__order_id__putForm = {
  name: 'update_order_api_v2_orders__order_id__putForm',
  description: 'Form for update_order_api_v2_orders__order_id__put',
  tool: 'update_order_api_v2_orders__order_id__put',
  type: 'form',
  fields: [
    { name: 'survey_sent', label: 'Survey sent', type: 'text' },
    { name: 'survey_id', label: 'Survey id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_order_api_v2_orders__order_id__putForm">
      <label>Survey sent: <input type="text" name="survey_sent" /></label>
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_order_detail_api_v2_orders__order_id__detail_getDetail = {
  name: 'get_order_detail_api_v2_orders__order_id__detail_getDetail',
  description: 'Detail view for get_order_detail_api_v2_orders__order_id__detail_get',
  tool: 'get_order_detail_api_v2_orders__order_id__detail_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_order_survey_link_api_v2_orders__order_id__survey_link_getDetail = {
  name: 'get_order_survey_link_api_v2_orders__order_id__survey_link_getDetail',
  description: 'Detail view for get_order_survey_link_api_v2_orders__order_id__survey_link_get',
  tool: 'get_order_survey_link_api_v2_orders__order_id__survey_link_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const import_orders_api_v2_orders_import_postForm = {
  name: 'import_orders_api_v2_orders_import_postForm',
  description: 'Form for import_orders_api_v2_orders_import_post',
  tool: 'import_orders_api_v2_orders_import_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="import_orders_api_v2_orders_import_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_postForm = {
  name: 'send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_postForm',
  description: 'Form for send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_post',
  tool: 'send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_reviews_api_v2_reviews_getWidget = {
  name: 'get_reviews_api_v2_reviews_getWidget',
  description: 'Display results from get_reviews_api_v2_reviews_get',
  tool: 'get_reviews_api_v2_reviews_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const export_google_product_reviews_feed_api_v2_reviews_export_google_feed_getWidget = {
  name: 'export_google_product_reviews_feed_api_v2_reviews_export_google_feed_getWidget',
  description: 'Display results from export_google_product_reviews_feed_api_v2_reviews_export_google_feed_get',
  tool: 'export_google_product_reviews_feed_api_v2_reviews_export_google_feed_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const export_reviews_api_v2_reviews_export_getWidget = {
  name: 'export_reviews_api_v2_reviews_export_getWidget',
  description: 'Display results from export_reviews_api_v2_reviews_export_get',
  tool: 'export_reviews_api_v2_reviews_export_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_product_review_summary_api_v2_reviews_product__product_id__summary_getDetail = {
  name: 'get_product_review_summary_api_v2_reviews_product__product_id__summary_getDetail',
  description: 'Detail view for get_product_review_summary_api_v2_reviews_product__product_id__summary_get',
  tool: 'get_product_review_summary_api_v2_reviews_product__product_id__summary_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const ai_powered_review_search_api_v2_reviews_ai_search_getWidget = {
  name: 'ai_powered_review_search_api_v2_reviews_ai_search_getWidget',
  description: 'Display results from ai_powered_review_search_api_v2_reviews_ai_search_get',
  tool: 'ai_powered_review_search_api_v2_reviews_ai_search_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_getDetail = {
  name: 'get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_getDetail',
  description: 'Detail view for get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_get',
  tool: 'get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_getDetail = {
  name: 'get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_getDetail',
  description: 'Detail view for get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_get',
  tool: 'get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_getDetail = {
  name: 'get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_getDetail',
  description: 'Detail view for get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_get',
  tool: 'get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_power_reviewers_api_v2_reviewers_power_reviewers_getWidget = {
  name: 'get_power_reviewers_api_v2_reviewers_power_reviewers_getWidget',
  description: 'Display results from get_power_reviewers_api_v2_reviewers_power_reviewers_get',
  tool: 'get_power_reviewers_api_v2_reviewers_power_reviewers_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_order_analytics_api_v2_orders_analytics_getWidget = {
  name: 'get_order_analytics_api_v2_orders_analytics_getWidget',
  description: 'Display results from get_order_analytics_api_v2_orders_analytics_get',
  tool: 'get_order_analytics_api_v2_orders_analytics_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_single_order_analytics_api_v2_orders__order_id__analytics_getDetail = {
  name: 'get_single_order_analytics_api_v2_orders__order_id__analytics_getDetail',
  description: 'Detail view for get_single_order_analytics_api_v2_orders__order_id__analytics_get',
  tool: 'get_single_order_analytics_api_v2_orders__order_id__analytics_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_product_config_api_v2_organization_product_config_getWidget = {
  name: 'get_product_config_api_v2_organization_product_config_getWidget',
  description: 'Display results from get_product_config_api_v2_organization_product_config_get',
  tool: 'get_product_config_api_v2_organization_product_config_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const resolve_surveys_by_products_api_v2_surveys_resolve_by_products_getWidget = {
  name: 'resolve_surveys_by_products_api_v2_surveys_resolve_by_products_getWidget',
  description: 'Display results from resolve_surveys_by_products_api_v2_surveys_resolve_by_products_get',
  tool: 'resolve_surveys_by_products_api_v2_surveys_resolve_by_products_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const resolve_surveys_api_v2_surveys_resolve_postForm = {
  name: 'resolve_surveys_api_v2_surveys_resolve_postForm',
  description: 'Form for resolve_surveys_api_v2_surveys_resolve_post',
  tool: 'resolve_surveys_api_v2_surveys_resolve_post',
  type: 'form',
  fields: [
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'product_ids', label: 'Product ids', type: 'text', validation: 'required' },
    { name: 'order_id', label: 'Order id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="resolve_surveys_api_v2_surveys_resolve_postForm">
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Product ids: <input type="text" name="product_ids" /></label>
      <label>Order id: <input type="text" name="order_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_assignments_api_v2_survey_assignments_getWidget = {
  name: 'get_assignments_api_v2_survey_assignments_getWidget',
  description: 'Display results from get_assignments_api_v2_survey_assignments_get',
  tool: 'get_assignments_api_v2_survey_assignments_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_assignment_api_v2_survey_assignments_postForm = {
  name: 'create_assignment_api_v2_survey_assignments_postForm',
  description: 'Form for create_assignment_api_v2_survey_assignments_post',
  tool: 'create_assignment_api_v2_survey_assignments_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
    { name: 'product_id', label: 'Product id', type: 'text' },
    { name: 'category_id', label: 'Category id', type: 'text' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'priority', label: 'Priority', type: 'number' },
    { name: 'assignment_type', label: 'Assignment type', type: 'select' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_assignment_api_v2_survey_assignments_postForm">
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <label>Product id: <input type="text" name="product_id" /></label>
      <label>Category id: <input type="text" name="category_id" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Priority: <input type="number" name="priority" /></label>
      <label>Assignment type: <input type="select" name="assignment_type" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_assignment_api_v2_survey_assignments__assignment_id__putForm = {
  name: 'update_assignment_api_v2_survey_assignments__assignment_id__putForm',
  description: 'Form for update_assignment_api_v2_survey_assignments__assignment_id__put',
  tool: 'update_assignment_api_v2_survey_assignments__assignment_id__put',
  type: 'form',
  fields: [
    { name: 'priority', label: 'Priority', type: 'text' },
    { name: 'assignment_type', label: 'Assignment type', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_assignment_api_v2_survey_assignments__assignment_id__putForm">
      <label>Priority: <input type="text" name="priority" /></label>
      <label>Assignment type: <input type="text" name="assignment_type" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const bulk_create_assignments_api_v2_survey_assignments_bulk_postForm = {
  name: 'bulk_create_assignments_api_v2_survey_assignments_bulk_postForm',
  description: 'Form for bulk_create_assignments_api_v2_survey_assignments_bulk_post',
  tool: 'bulk_create_assignments_api_v2_survey_assignments_bulk_post',
  type: 'form',
  fields: [
    { name: 'assignments', label: 'Assignments', type: 'text', validation: 'required' },
    { name: 'replace_existing', label: 'Replace existing', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="bulk_create_assignments_api_v2_survey_assignments_bulk_postForm">
      <label>Assignments: <input type="text" name="assignments" /></label>
      <label>Replace existing: <input type="checkbox" name="replace_existing" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_assignments_by_products_api_v2_survey_assignments_by_products_postForm = {
  name: 'get_assignments_by_products_api_v2_survey_assignments_by_products_postForm',
  description: 'Form for get_assignments_by_products_api_v2_survey_assignments_by_products_post',
  tool: 'get_assignments_by_products_api_v2_survey_assignments_by_products_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="get_assignments_by_products_api_v2_survey_assignments_by_products_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_assignment_statistics_api_v2_survey_assignments_stats_getWidget = {
  name: 'get_assignment_statistics_api_v2_survey_assignments_stats_getWidget',
  description: 'Display results from get_assignment_statistics_api_v2_survey_assignments_stats_get',
  tool: 'get_assignment_statistics_api_v2_survey_assignments_stats_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_active_configuration_api_v2_survey_chain_config_active_getWidget = {
  name: 'get_active_configuration_api_v2_survey_chain_config_active_getWidget',
  description: 'Display results from get_active_configuration_api_v2_survey_chain_config_active_get',
  tool: 'get_active_configuration_api_v2_survey_chain_config_active_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_all_configurations_api_v2_survey_chain_config_getWidget = {
  name: 'get_all_configurations_api_v2_survey_chain_config_getWidget',
  description: 'Display results from get_all_configurations_api_v2_survey_chain_config_get',
  tool: 'get_all_configurations_api_v2_survey_chain_config_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_configuration_api_v2_survey_chain_config_postForm = {
  name: 'create_configuration_api_v2_survey_chain_config_postForm',
  description: 'Form for create_configuration_api_v2_survey_chain_config_post',
  tool: 'create_configuration_api_v2_survey_chain_config_post',
  type: 'form',
  fields: [
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'optimization_strategy', label: 'Optimization strategy', type: 'select' },
    { name: 'max_surveys_per_chain', label: 'Max surveys per chain', type: 'number' },
    { name: 'fallback_survey_id', label: 'Fallback survey id', type: 'text' },
    { name: 'is_active', label: 'Is active', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_configuration_api_v2_survey_chain_config_postForm">
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Name: <input type="text" name="name" /></label>
      <label>Optimization strategy: <input type="select" name="optimization_strategy" /></label>
      <label>Max surveys per chain: <input type="number" name="max_surveys_per_chain" /></label>
      <label>Fallback survey id: <input type="text" name="fallback_survey_id" /></label>
      <label>Is active: <input type="checkbox" name="is_active" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_configuration_api_v2_survey_chain_config__config_id__putForm = {
  name: 'update_configuration_api_v2_survey_chain_config__config_id__putForm',
  description: 'Form for update_configuration_api_v2_survey_chain_config__config_id__put',
  tool: 'update_configuration_api_v2_survey_chain_config__config_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'optimization_strategy', label: 'Optimization strategy', type: 'text' },
    { name: 'max_surveys_per_chain', label: 'Max surveys per chain', type: 'text' },
    { name: 'fallback_survey_id', label: 'Fallback survey id', type: 'text' },
    { name: 'is_active', label: 'Is active', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_configuration_api_v2_survey_chain_config__config_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Optimization strategy: <input type="text" name="optimization_strategy" /></label>
      <label>Max surveys per chain: <input type="text" name="max_surveys_per_chain" /></label>
      <label>Fallback survey id: <input type="text" name="fallback_survey_id" /></label>
      <label>Is active: <input type="text" name="is_active" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const test_optimization_api_v2_survey_chain_config_test_optimization_postForm = {
  name: 'test_optimization_api_v2_survey_chain_config_test_optimization_postForm',
  description: 'Form for test_optimization_api_v2_survey_chain_config_test_optimization_post',
  tool: 'test_optimization_api_v2_survey_chain_config_test_optimization_post',
  type: 'form',
  fields: [
    { name: 'sample_products', label: 'Sample products', type: 'text', validation: 'required' },
    { name: 'strategy', label: 'Strategy', type: 'text' },
    { name: 'max_surveys', label: 'Max surveys', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="test_optimization_api_v2_survey_chain_config_test_optimization_postForm">
      <label>Sample products: <input type="text" name="sample_products" /></label>
      <label>Strategy: <input type="text" name="strategy" /></label>
      <label>Max surveys: <input type="text" name="max_surveys" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_getWidget = {
  name: 'resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_getWidget',
  description: 'Display results from resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_get',
  tool: 'resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const resolve_surveys_public_api_v2_public_surveys_resolve_postForm = {
  name: 'resolve_surveys_public_api_v2_public_surveys_resolve_postForm',
  description: 'Form for resolve_surveys_public_api_v2_public_surveys_resolve_post',
  tool: 'resolve_surveys_public_api_v2_public_surveys_resolve_post',
  type: 'form',
  fields: [
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'product_ids', label: 'Product ids', type: 'text', validation: 'required' },
    { name: 'order_id', label: 'Order id', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="resolve_surveys_public_api_v2_public_surveys_resolve_postForm">
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Product ids: <input type="text" name="product_ids" /></label>
      <label>Order id: <input type="text" name="order_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const handle_survey_response_api_v2_webhooks_survey_response_postForm = {
  name: 'handle_survey_response_api_v2_webhooks_survey_response_postForm',
  description: 'Form for handle_survey_response_api_v2_webhooks_survey_response_post',
  tool: 'handle_survey_response_api_v2_webhooks_survey_response_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="handle_survey_response_api_v2_webhooks_survey_response_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const handle_order_status_api_v2_webhooks_order_status_postForm = {
  name: 'handle_order_status_api_v2_webhooks_order_status_postForm',
  description: 'Form for handle_order_status_api_v2_webhooks_order_status_post',
  tool: 'handle_order_status_api_v2_webhooks_order_status_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="handle_order_status_api_v2_webhooks_order_status_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const handle_order_shipment_api_v2_webhooks_order_shipment_postForm = {
  name: 'handle_order_shipment_api_v2_webhooks_order_shipment_postForm',
  description: 'Form for handle_order_shipment_api_v2_webhooks_order_shipment_post',
  tool: 'handle_order_shipment_api_v2_webhooks_order_shipment_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="handle_order_shipment_api_v2_webhooks_order_shipment_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const handle_order_delivery_api_v2_webhooks_order_delivery_postForm = {
  name: 'handle_order_delivery_api_v2_webhooks_order_delivery_postForm',
  description: 'Form for handle_order_delivery_api_v2_webhooks_order_delivery_post',
  tool: 'handle_order_delivery_api_v2_webhooks_order_delivery_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="handle_order_delivery_api_v2_webhooks_order_delivery_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_getWidget = {
  name: 'get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_getWidget',
  description: 'Display results from get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_get',
  tool: 'get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_segments_api_v2_contacts_segments__getWidget = {
  name: 'list_segments_api_v2_contacts_segments__getWidget',
  description: 'Display results from list_segments_api_v2_contacts_segments__get',
  tool: 'list_segments_api_v2_contacts_segments__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_segment_api_v2_contacts_segments__postForm = {
  name: 'create_segment_api_v2_contacts_segments__postForm',
  description: 'Form for create_segment_api_v2_contacts_segments__post',
  tool: 'create_segment_api_v2_contacts_segments__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'color', label: 'Color', type: 'text' },
    { name: 'segment_type', label: 'Segment type', type: 'select', validation: 'required' },
    { name: 'filter_criteria', label: 'Filter criteria', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_segment_api_v2_contacts_segments__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Color: <input type="text" name="color" /></label>
      <label>Segment type: <input type="select" name="segment_type" /></label>
      <label>Filter criteria: <input type="text" name="filter_criteria" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_segment_api_v2_contacts_segments__segment_id__getDetail = {
  name: 'get_segment_api_v2_contacts_segments__segment_id__getDetail',
  description: 'Detail view for get_segment_api_v2_contacts_segments__segment_id__get',
  tool: 'get_segment_api_v2_contacts_segments__segment_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_getDetail = {
  name: 'get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_getDetail',
  description: 'Detail view for get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_get',
  tool: 'get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const add_members_api_v2_contacts_segments__segment_id__members_postForm = {
  name: 'add_members_api_v2_contacts_segments__segment_id__members_postForm',
  description: 'Form for add_members_api_v2_contacts_segments__segment_id__members_post',
  tool: 'add_members_api_v2_contacts_segments__segment_id__members_post',
  type: 'form',
  fields: [
    { name: 'contact_ids', label: 'Contact ids', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="add_members_api_v2_contacts_segments__segment_id__members_postForm">
      <label>Contact ids: <input type="text" name="contact_ids" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const quick_search_api_v2_contacts_search__getWidget = {
  name: 'quick_search_api_v2_contacts_search__getWidget',
  description: 'Display results from quick_search_api_v2_contacts_search__get',
  tool: 'quick_search_api_v2_contacts_search__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const semantic_search_api_v2_contacts_search_semantic_postForm = {
  name: 'semantic_search_api_v2_contacts_search_semantic_postForm',
  description: 'Form for semantic_search_api_v2_contacts_search_semantic_post',
  tool: 'semantic_search_api_v2_contacts_search_semantic_post',
  type: 'form',
  fields: [
    { name: 'query', label: 'Query', type: 'text', validation: 'required' },
    { name: 'limit', label: 'Limit', type: 'number' },
    { name: 'min_similarity', label: 'Min similarity', type: 'number' },
    { name: 'content_types', label: 'Content types', type: 'text' },
    { name: 'sentiment_filter', label: 'Sentiment filter', type: 'text' },
    { name: 'pre_filters', label: 'Pre filters', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="semantic_search_api_v2_contacts_search_semantic_postForm">
      <label>Query: <input type="text" name="query" /></label>
      <label>Limit: <input type="number" name="limit" /></label>
      <label>Min similarity: <input type="number" name="min_similarity" /></label>
      <label>Content types: <input type="text" name="content_types" /></label>
      <label>Sentiment filter: <input type="text" name="sentiment_filter" /></label>
      <label>Pre filters: <input type="text" name="pre_filters" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_suggestions_api_v2_contacts_search_suggest_getWidget = {
  name: 'get_suggestions_api_v2_contacts_search_suggest_getWidget',
  description: 'Display results from get_suggestions_api_v2_contacts_search_suggest_get',
  tool: 'get_suggestions_api_v2_contacts_search_suggest_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const search_by_attributes_api_v2_contacts_search_attributes_postForm = {
  name: 'search_by_attributes_api_v2_contacts_search_attributes_postForm',
  description: 'Form for search_by_attributes_api_v2_contacts_search_attributes_post',
  tool: 'search_by_attributes_api_v2_contacts_search_attributes_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="search_by_attributes_api_v2_contacts_search_attributes_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_interactions_api_v2_contacts__contact_id__interactions__getDetail = {
  name: 'list_interactions_api_v2_contacts__contact_id__interactions__getDetail',
  description: 'Detail view for list_interactions_api_v2_contacts__contact_id__interactions__get',
  tool: 'list_interactions_api_v2_contacts__contact_id__interactions__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const log_interaction_api_v2_contacts__contact_id__interactions__postForm = {
  name: 'log_interaction_api_v2_contacts__contact_id__interactions__postForm',
  description: 'Form for log_interaction_api_v2_contacts__contact_id__interactions__post',
  tool: 'log_interaction_api_v2_contacts__contact_id__interactions__post',
  type: 'form',
  fields: [
    { name: 'interaction_type', label: 'Interaction type', type: 'select', validation: 'required' },
    { name: 'channel', label: 'Channel', type: 'select', validation: 'required' },
    { name: 'source_system', label: 'Source system', type: 'text', validation: 'required' },
    { name: 'source_id', label: 'Source id', type: 'text' },
    { name: 'source_url', label: 'Source url', type: 'text' },
    { name: 'metadata', label: 'Metadata', type: 'text' },
    { name: 'sentiment_score', label: 'Sentiment score', type: 'text' },
    { name: 'nps_score', label: 'Nps score', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="log_interaction_api_v2_contacts__contact_id__interactions__postForm">
      <label>Interaction type: <input type="select" name="interaction_type" /></label>
      <label>Channel: <input type="select" name="channel" /></label>
      <label>Source system: <input type="text" name="source_system" /></label>
      <label>Source id: <input type="text" name="source_id" /></label>
      <label>Source url: <input type="text" name="source_url" /></label>
      <label>Metadata: <input type="text" name="metadata" /></label>
      <label>Sentiment score: <input type="text" name="sentiment_score" /></label>
      <label>Nps score: <input type="text" name="nps_score" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_getDetail = {
  name: 'get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_getDetail',
  description: 'Detail view for get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_get',
  tool: 'get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_getDetail = {
  name: 'list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_getDetail',
  description: 'Detail view for list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_get',
  tool: 'list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_postForm = {
  name: 'create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_postForm',
  description: 'Form for create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_post',
  tool: 'create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_post',
  type: 'form',
  fields: [
    { name: 'note', label: 'Note', type: 'text', validation: 'required' },
    { name: 'is_public_reply', label: 'Is public reply', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_postForm">
      <label>Note: <input type="text" name="note" /></label>
      <label>Is public reply: <input type="checkbox" name="is_public_reply" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const update_reply_api_v2_replies__reply_id__putForm = {
  name: 'update_reply_api_v2_replies__reply_id__putForm',
  description: 'Form for update_reply_api_v2_replies__reply_id__put',
  tool: 'update_reply_api_v2_replies__reply_id__put',
  type: 'form',
  fields: [
    { name: 'note', label: 'Note', type: 'text', validation: 'required' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_reply_api_v2_replies__reply_id__putForm">
      <label>Note: <input type="text" name="note" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_contact_content_api_v2_contacts__contact_id__content__getDetail = {
  name: 'get_contact_content_api_v2_contacts__contact_id__content__getDetail',
  description: 'Detail view for get_contact_content_api_v2_contacts__contact_id__content__get',
  tool: 'get_contact_content_api_v2_contacts__contact_id__content__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const list_contact_content_api_v2_contacts__contact_id__content_all_getDetail = {
  name: 'list_contact_content_api_v2_contacts__contact_id__content_all_getDetail',
  description: 'Detail view for list_contact_content_api_v2_contacts__contact_id__content_all_get',
  tool: 'list_contact_content_api_v2_contacts__contact_id__content_all_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const list_definitions_api_v2_contacts_attributes_definitions_getWidget = {
  name: 'list_definitions_api_v2_contacts_attributes_definitions_getWidget',
  description: 'Display results from list_definitions_api_v2_contacts_attributes_definitions_get',
  tool: 'list_definitions_api_v2_contacts_attributes_definitions_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_definition_api_v2_contacts_attributes_definitions_postForm = {
  name: 'create_definition_api_v2_contacts_attributes_definitions_postForm',
  description: 'Form for create_definition_api_v2_contacts_attributes_definitions_post',
  tool: 'create_definition_api_v2_contacts_attributes_definitions_post',
  type: 'form',
  fields: [
    { name: 'attribute_key', label: 'Attribute key', type: 'text', validation: 'required' },
    { name: 'display_name', label: 'Display name', type: 'text', validation: 'required' },
    { name: 'description', label: 'Description', type: 'text' },
    { name: 'data_type', label: 'Data type', type: 'select' },
    { name: 'enum_values', label: 'Enum values', type: 'text' },
    { name: 'is_required', label: 'Is required', type: 'checkbox' },
    { name: 'is_unique', label: 'Is unique', type: 'checkbox' },
    { name: 'validation_regex', label: 'Validation regex', type: 'text' },
    { name: 'min_value', label: 'Min value', type: 'text' },
    { name: 'max_value', label: 'Max value', type: 'text' },
    { name: 'min_length', label: 'Min length', type: 'text' },
    { name: 'max_length', label: 'Max length', type: 'text' },
    { name: 'default_value', label: 'Default value', type: 'text' },
    { name: 'is_searchable', label: 'Is searchable', type: 'checkbox' },
    { name: 'is_filterable', label: 'Is filterable', type: 'checkbox' },
    { name: 'show_in_list', label: 'Show in list', type: 'checkbox' },
    { name: 'show_in_profile', label: 'Show in profile', type: 'checkbox' },
    { name: 'display_order', label: 'Display order', type: 'number' },
    { name: 'attribute_group', label: 'Attribute group', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_definition_api_v2_contacts_attributes_definitions_postForm">
      <label>Attribute key: <input type="text" name="attribute_key" /></label>
      <label>Display name: <input type="text" name="display_name" /></label>
      <label>Description: <input type="text" name="description" /></label>
      <label>Data type: <input type="select" name="data_type" /></label>
      <label>Enum values: <input type="text" name="enum_values" /></label>
      <label>Is required: <input type="checkbox" name="is_required" /></label>
      <label>Is unique: <input type="checkbox" name="is_unique" /></label>
      <label>Validation regex: <input type="text" name="validation_regex" /></label>
      <label>Min value: <input type="text" name="min_value" /></label>
      <label>Max value: <input type="text" name="max_value" /></label>
      <label>Min length: <input type="text" name="min_length" /></label>
      <label>Max length: <input type="text" name="max_length" /></label>
      <label>Default value: <input type="text" name="default_value" /></label>
      <label>Is searchable: <input type="checkbox" name="is_searchable" /></label>
      <label>Is filterable: <input type="checkbox" name="is_filterable" /></label>
      <label>Show in list: <input type="checkbox" name="show_in_list" /></label>
      <label>Show in profile: <input type="checkbox" name="show_in_profile" /></label>
      <label>Display order: <input type="number" name="display_order" /></label>
      <label>Attribute group: <input type="text" name="attribute_group" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_getWidget = {
  name: 'get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_getWidget',
  description: 'Display results from get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_get',
  tool: 'get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_definition_api_v2_contacts_attributes_definitions__definition_id__getDetail = {
  name: 'get_definition_api_v2_contacts_attributes_definitions__definition_id__getDetail',
  description: 'Detail view for get_definition_api_v2_contacts_attributes_definitions__definition_id__get',
  tool: 'get_definition_api_v2_contacts_attributes_definitions__definition_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_rules_api_v2_contacts_throttle_rules_getWidget = {
  name: 'get_rules_api_v2_contacts_throttle_rules_getWidget',
  description: 'Display results from get_rules_api_v2_contacts_throttle_rules_get',
  tool: 'get_rules_api_v2_contacts_throttle_rules_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const update_rules_api_v2_contacts_throttle_rules_putForm = {
  name: 'update_rules_api_v2_contacts_throttle_rules_putForm',
  description: 'Form for update_rules_api_v2_contacts_throttle_rules_put',
  tool: 'update_rules_api_v2_contacts_throttle_rules_put',
  type: 'form',
  fields: [
    { name: 'enabled', label: 'Enabled', type: 'text' },
    { name: 'max_contacts_per_day', label: 'Max contacts per day', type: 'text' },
    { name: 'max_contacts_per_week', label: 'Max contacts per week', type: 'text' },
    { name: 'max_contacts_per_month', label: 'Max contacts per month', type: 'text' },
    { name: 'min_days_between_contacts', label: 'Min days between contacts', type: 'text' },
    { name: 'email_max_per_week', label: 'Email max per week', type: 'text' },
    { name: 'email_min_days_between', label: 'Email min days between', type: 'text' },
    { name: 'sms_max_per_week', label: 'Sms max per week', type: 'text' },
    { name: 'sms_min_days_between', label: 'Sms min days between', type: 'text' },
    { name: 'phone_max_per_week', label: 'Phone max per week', type: 'text' },
    { name: 'phone_min_days_between', label: 'Phone min days between', type: 'text' },
    { name: 'vip_bypass_enabled', label: 'Vip bypass enabled', type: 'text' },
    { name: 'vip_tag', label: 'Vip tag', type: 'text' },
    { name: 'transactional_bypass_enabled', label: 'Transactional bypass enabled', type: 'text' },
    { name: 'quiet_hours_enabled', label: 'Quiet hours enabled', type: 'text' },
    { name: 'quiet_hours_start', label: 'Quiet hours start', type: 'text' },
    { name: 'quiet_hours_end', label: 'Quiet hours end', type: 'text' },
    { name: 'quiet_hours_timezone', label: 'Quiet hours timezone', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_rules_api_v2_contacts_throttle_rules_putForm">
      <label>Enabled: <input type="text" name="enabled" /></label>
      <label>Max contacts per day: <input type="text" name="max_contacts_per_day" /></label>
      <label>Max contacts per week: <input type="text" name="max_contacts_per_week" /></label>
      <label>Max contacts per month: <input type="text" name="max_contacts_per_month" /></label>
      <label>Min days between contacts: <input type="text" name="min_days_between_contacts" /></label>
      <label>Email max per week: <input type="text" name="email_max_per_week" /></label>
      <label>Email min days between: <input type="text" name="email_min_days_between" /></label>
      <label>Sms max per week: <input type="text" name="sms_max_per_week" /></label>
      <label>Sms min days between: <input type="text" name="sms_min_days_between" /></label>
      <label>Phone max per week: <input type="text" name="phone_max_per_week" /></label>
      <label>Phone min days between: <input type="text" name="phone_min_days_between" /></label>
      <label>Vip bypass enabled: <input type="text" name="vip_bypass_enabled" /></label>
      <label>Vip tag: <input type="text" name="vip_tag" /></label>
      <label>Transactional bypass enabled: <input type="text" name="transactional_bypass_enabled" /></label>
      <label>Quiet hours enabled: <input type="text" name="quiet_hours_enabled" /></label>
      <label>Quiet hours start: <input type="text" name="quiet_hours_start" /></label>
      <label>Quiet hours end: <input type="text" name="quiet_hours_end" /></label>
      <label>Quiet hours timezone: <input type="text" name="quiet_hours_timezone" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_throttle_stats_api_v2_contacts_throttle_stats_getWidget = {
  name: 'get_throttle_stats_api_v2_contacts_throttle_stats_getWidget',
  description: 'Display results from get_throttle_stats_api_v2_contacts_throttle_stats_get',
  tool: 'get_throttle_stats_api_v2_contacts_throttle_stats_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_throttle_log_api_v2_contacts_throttle_log_getWidget = {
  name: 'get_throttle_log_api_v2_contacts_throttle_log_getWidget',
  description: 'Display results from get_throttle_log_api_v2_contacts_throttle_log_get',
  tool: 'get_throttle_log_api_v2_contacts_throttle_log_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_import_jobs_api_v2_contacts_import_getWidget = {
  name: 'list_import_jobs_api_v2_contacts_import_getWidget',
  description: 'Display results from list_import_jobs_api_v2_contacts_import_get',
  tool: 'list_import_jobs_api_v2_contacts_import_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_import_job_api_v2_contacts_import_postForm = {
  name: 'create_import_job_api_v2_contacts_import_postForm',
  description: 'Form for create_import_job_api_v2_contacts_import_post',
  tool: 'create_import_job_api_v2_contacts_import_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_import_job_api_v2_contacts_import_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_import_job_api_v2_contacts_import__job_id__getDetail = {
  name: 'get_import_job_api_v2_contacts_import__job_id__getDetail',
  description: 'Detail view for get_import_job_api_v2_contacts_import__job_id__get',
  tool: 'get_import_job_api_v2_contacts_import__job_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const preview_import_api_v2_contacts_import_preview_postForm = {
  name: 'preview_import_api_v2_contacts_import_preview_postForm',
  description: 'Form for preview_import_api_v2_contacts_import_preview_post',
  tool: 'preview_import_api_v2_contacts_import_preview_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="preview_import_api_v2_contacts_import_preview_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_export_jobs_api_v2_contacts_export_getWidget = {
  name: 'list_export_jobs_api_v2_contacts_export_getWidget',
  description: 'Display results from list_export_jobs_api_v2_contacts_export_get',
  tool: 'list_export_jobs_api_v2_contacts_export_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_export_job_api_v2_contacts_export_postForm = {
  name: 'create_export_job_api_v2_contacts_export_postForm',
  description: 'Form for create_export_job_api_v2_contacts_export_post',
  tool: 'create_export_job_api_v2_contacts_export_post',
  type: 'form',
  fields: [
    { name: 'filter_criteria', label: 'Filter criteria', type: 'text' },
    { name: 'segment_id', label: 'Segment id', type: 'text' },
    { name: 'fields', label: 'Fields', type: 'text' },
    { name: 'include_interactions', label: 'Include interactions', type: 'checkbox' },
    { name: 'custom_attribute_keys', label: 'Custom attribute keys', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_export_job_api_v2_contacts_export_postForm">
      <label>Filter criteria: <input type="text" name="filter_criteria" /></label>
      <label>Segment id: <input type="text" name="segment_id" /></label>
      <label>Fields: <input type="text" name="fields" /></label>
      <label>Include interactions: <input type="checkbox" name="include_interactions" /></label>
      <label>Custom attribute keys: <input type="text" name="custom_attribute_keys" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const quick_export_api_v2_contacts_export_quick_getWidget = {
  name: 'quick_export_api_v2_contacts_export_quick_getWidget',
  description: 'Display results from quick_export_api_v2_contacts_export_quick_get',
  tool: 'quick_export_api_v2_contacts_export_quick_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_export_job_api_v2_contacts_export__job_id__getDetail = {
  name: 'get_export_job_api_v2_contacts_export__job_id__getDetail',
  description: 'Detail view for get_export_job_api_v2_contacts_export__job_id__get',
  tool: 'get_export_job_api_v2_contacts_export__job_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const download_export_api_v2_contacts_export__job_id__download_getDetail = {
  name: 'download_export_api_v2_contacts_export__job_id__download_getDetail',
  description: 'Detail view for download_export_api_v2_contacts_export__job_id__download_get',
  tool: 'download_export_api_v2_contacts_export__job_id__download_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__getDetail = {
  name: 'get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__getDetail',
  description: 'Detail view for get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__get',
  tool: 'get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const list_contacts_api_v2_contacts__getWidget = {
  name: 'list_contacts_api_v2_contacts__getWidget',
  description: 'Display results from list_contacts_api_v2_contacts__get',
  tool: 'list_contacts_api_v2_contacts__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_contact_api_v2_contacts__postForm = {
  name: 'create_contact_api_v2_contacts__postForm',
  description: 'Form for create_contact_api_v2_contacts__post',
  tool: 'create_contact_api_v2_contacts__post',
  type: 'form',
  fields: [
    { name: 'external_id', label: 'External id', type: 'text' },
    { name: 'email', label: 'Email', type: 'text' },
    { name: 'phone', label: 'Phone', type: 'text' },
    { name: 'first_name', label: 'First name', type: 'text' },
    { name: 'last_name', label: 'Last name', type: 'text' },
    { name: 'company', label: 'Company', type: 'text' },
    { name: 'job_title', label: 'Job title', type: 'text' },
    { name: 'tags', label: 'Tags', type: 'text' },
    { name: 'custom_attributes', label: 'Custom attributes', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_contact_api_v2_contacts__postForm">
      <label>External id: <input type="text" name="external_id" /></label>
      <label>Email: <input type="text" name="email" /></label>
      <label>Phone: <input type="text" name="phone" /></label>
      <label>First name: <input type="text" name="first_name" /></label>
      <label>Last name: <input type="text" name="last_name" /></label>
      <label>Company: <input type="text" name="company" /></label>
      <label>Job title: <input type="text" name="job_title" /></label>
      <label>Tags: <input type="text" name="tags" /></label>
      <label>Custom attributes: <input type="text" name="custom_attributes" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_contact_stats_api_v2_contacts__contact_id__stats_getDetail = {
  name: 'get_contact_stats_api_v2_contacts__contact_id__stats_getDetail',
  description: 'Detail view for get_contact_stats_api_v2_contacts__contact_id__stats_get',
  tool: 'get_contact_stats_api_v2_contacts__contact_id__stats_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_contact_api_v2_contacts__contact_id__getDetail = {
  name: 'get_contact_api_v2_contacts__contact_id__getDetail',
  description: 'Detail view for get_contact_api_v2_contacts__contact_id__get',
  tool: 'get_contact_api_v2_contacts__contact_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const bulk_update_tags_api_v2_contacts_bulk_tags_postForm = {
  name: 'bulk_update_tags_api_v2_contacts_bulk_tags_postForm',
  description: 'Form for bulk_update_tags_api_v2_contacts_bulk_tags_post',
  tool: 'bulk_update_tags_api_v2_contacts_bulk_tags_post',
  type: 'form',
  fields: [
    { name: 'contact_ids', label: 'Contact ids', type: 'text', validation: 'required' },
    { name: 'add_tags', label: 'Add tags', type: 'text' },
    { name: 'remove_tags', label: 'Remove tags', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="bulk_update_tags_api_v2_contacts_bulk_tags_postForm">
      <label>Contact ids: <input type="text" name="contact_ids" /></label>
      <label>Add tags: <input type="text" name="add_tags" /></label>
      <label>Remove tags: <input type="text" name="remove_tags" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const bulk_update_attributes_api_v2_contacts_bulk_attributes_postForm = {
  name: 'bulk_update_attributes_api_v2_contacts_bulk_attributes_postForm',
  description: 'Form for bulk_update_attributes_api_v2_contacts_bulk_attributes_post',
  tool: 'bulk_update_attributes_api_v2_contacts_bulk_attributes_post',
  type: 'form',
  fields: [
    { name: 'contact_ids', label: 'Contact ids', type: 'text', validation: 'required' },
    { name: 'set_attributes', label: 'Set attributes', type: 'text' },
    { name: 'unset_attributes', label: 'Unset attributes', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="bulk_update_attributes_api_v2_contacts_bulk_attributes_postForm">
      <label>Contact ids: <input type="text" name="contact_ids" /></label>
      <label>Set attributes: <input type="text" name="set_attributes" /></label>
      <label>Unset attributes: <input type="text" name="unset_attributes" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const check_throttle_api_v2_contacts__contact_id__can_contact_postForm = {
  name: 'check_throttle_api_v2_contacts__contact_id__can_contact_postForm',
  description: 'Form for check_throttle_api_v2_contacts__contact_id__can_contact_post',
  tool: 'check_throttle_api_v2_contacts__contact_id__can_contact_post',
  type: 'form',
  fields: [
    { name: 'channel', label: 'Channel', type: 'text', validation: 'required' },
    { name: 'source_system', label: 'Source system', type: 'text', validation: 'required' },
    { name: 'source_id', label: 'Source id', type: 'text' },
    { name: 'is_transactional', label: 'Is transactional', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="check_throttle_api_v2_contacts__contact_id__can_contact_postForm">
      <label>Channel: <input type="text" name="channel" /></label>
      <label>Source system: <input type="text" name="source_system" /></label>
      <label>Source id: <input type="text" name="source_id" /></label>
      <label>Is transactional: <input type="checkbox" name="is_transactional" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_contact_source_links_api_v2_contacts__contact_id__source_links_getDetail = {
  name: 'get_contact_source_links_api_v2_contacts__contact_id__source_links_getDetail',
  description: 'Detail view for get_contact_source_links_api_v2_contacts__contact_id__source_links_get',
  tool: 'get_contact_source_links_api_v2_contacts__contact_id__source_links_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const save_legacy_credentials_api_v2_migration_credentials_postForm = {
  name: 'save_legacy_credentials_api_v2_migration_credentials_postForm',
  description: 'Form for save_legacy_credentials_api_v2_migration_credentials_post',
  tool: 'save_legacy_credentials_api_v2_migration_credentials_post',
  type: 'form',
  fields: [
    { name: 'api_key', label: 'Api key', type: 'text', validation: 'required' },
    { name: 'backend_url', label: 'Backend url', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="save_legacy_credentials_api_v2_migration_credentials_postForm">
      <label>Api key: <input type="text" name="api_key" /></label>
      <label>Backend url: <input type="text" name="backend_url" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_credentials_status_api_v2_migration_credentials_status_getWidget = {
  name: 'get_credentials_status_api_v2_migration_credentials_status_getWidget',
  description: 'Display results from get_credentials_status_api_v2_migration_credentials_status_get',
  tool: 'get_credentials_status_api_v2_migration_credentials_status_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const list_legacy_surveys_api_v2_migration_surveys_getWidget = {
  name: 'list_legacy_surveys_api_v2_migration_surveys_getWidget',
  description: 'Display results from list_legacy_surveys_api_v2_migration_surveys_get',
  tool: 'list_legacy_surveys_api_v2_migration_surveys_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_getDetail = {
  name: 'get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_getDetail',
  description: 'Detail view for get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_get',
  tool: 'get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_getDetail = {
  name: 'preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_getDetail',
  description: 'Detail view for preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_get',
  tool: 'preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const import_survey_api_v2_migration_surveys_import_postForm = {
  name: 'import_survey_api_v2_migration_surveys_import_postForm',
  description: 'Form for import_survey_api_v2_migration_surveys_import_post',
  tool: 'import_survey_api_v2_migration_surveys_import_post',
  type: 'form',
  fields: [
    { name: 'legacy_survey_id', label: 'Legacy survey id', type: 'number', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'creator_id', label: 'Creator id', type: 'text' },
    { name: 'import_responses', label: 'Import responses', type: 'checkbox' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="import_survey_api_v2_migration_surveys_import_postForm">
      <label>Legacy survey id: <input type="number" name="legacy_survey_id" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Creator id: <input type="text" name="creator_id" /></label>
      <label>Import responses: <input type="checkbox" name="import_responses" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const import_survey_responses_api_v2_migration_responses_import_postForm = {
  name: 'import_survey_responses_api_v2_migration_responses_import_postForm',
  description: 'Form for import_survey_responses_api_v2_migration_responses_import_post',
  tool: 'import_survey_responses_api_v2_migration_responses_import_post',
  type: 'form',
  fields: [
    { name: 'survey_id', label: 'Survey id', type: 'text', validation: 'required' },
    { name: 'legacy_survey_id', label: 'Legacy survey id', type: 'number', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'start_date', label: 'Start date', type: 'text' },
    { name: 'end_date', label: 'End date', type: 'text' },
    { name: 'batch_size', label: 'Batch size', type: 'number' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="import_survey_responses_api_v2_migration_responses_import_postForm">
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <label>Legacy survey id: <input type="number" name="legacy_survey_id" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>Start date: <input type="text" name="start_date" /></label>
      <label>End date: <input type="text" name="end_date" /></label>
      <label>Batch size: <input type="number" name="batch_size" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_migration_progress_api_v2_migration_status__migration_id__getDetail = {
  name: 'get_migration_progress_api_v2_migration_status__migration_id__getDetail',
  description: 'Detail view for get_migration_progress_api_v2_migration_status__migration_id__get',
  tool: 'get_migration_progress_api_v2_migration_status__migration_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const chat_http_api_v2_zagents_chat_postForm = {
  name: 'chat_http_api_v2_zagents_chat_postForm',
  description: 'Form for chat_http_api_v2_zagents_chat_post',
  tool: 'chat_http_api_v2_zagents_chat_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="chat_http_api_v2_zagents_chat_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const chat_http_v2_api_v2_zagents_chat_postForm = {
  name: 'chat_http_v2_api_v2_zagents_chat_postForm',
  description: 'Form for chat_http_v2_api_v2_zagents_chat_post',
  tool: 'chat_http_v2_api_v2_zagents_chat_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="chat_http_v2_api_v2_zagents_chat_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const health_check_v2_api_v2_zagents_health_getWidget = {
  name: 'health_check_v2_api_v2_zagents_health_getWidget',
  description: 'Display results from health_check_v2_api_v2_zagents_health_get',
  tool: 'health_check_v2_api_v2_zagents_health_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_voice_token_api_v2_zagents_voice_token_postForm = {
  name: 'create_voice_token_api_v2_zagents_voice_token_postForm',
  description: 'Form for create_voice_token_api_v2_zagents_voice_token_post',
  tool: 'create_voice_token_api_v2_zagents_voice_token_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_voice_token_api_v2_zagents_voice_token_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const voice_health_check_api_v2_zagents_voice_health_getWidget = {
  name: 'voice_health_check_api_v2_zagents_voice_health_getWidget',
  description: 'Display results from voice_health_check_api_v2_zagents_voice_health_get',
  tool: 'voice_health_check_api_v2_zagents_voice_health_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const execute_function_api_v2_zagents_voice_functions_execute_postForm = {
  name: 'execute_function_api_v2_zagents_voice_functions_execute_postForm',
  description: 'Form for execute_function_api_v2_zagents_voice_functions_execute_post',
  tool: 'execute_function_api_v2_zagents_voice_functions_execute_post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'arguments', label: 'Arguments', type: 'text', validation: 'required' },
    { name: 'call_id', label: 'Call id', type: 'text', validation: 'required' },
    { name: 'org_id', label: 'Org id', type: 'number', validation: 'required' },
    { name: 'user_id', label: 'User id', type: 'number' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="execute_function_api_v2_zagents_voice_functions_execute_postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Arguments: <input type="text" name="arguments" /></label>
      <label>Call id: <input type="text" name="call_id" /></label>
      <label>Org id: <input type="number" name="org_id" /></label>
      <label>User id: <input type="number" name="user_id" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_functions_api_v2_zagents_voice_functions_list_getWidget = {
  name: 'list_functions_api_v2_zagents_voice_functions_list_getWidget',
  description: 'Display results from list_functions_api_v2_zagents_voice_functions_list_get',
  tool: 'list_functions_api_v2_zagents_voice_functions_list_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const zenguide_chat_api_v2_zagents_zenguide_chat_postForm = {
  name: 'zenguide_chat_api_v2_zagents_zenguide_chat_postForm',
  description: 'Form for zenguide_chat_api_v2_zagents_zenguide_chat_post',
  tool: 'zenguide_chat_api_v2_zagents_zenguide_chat_post',
  type: 'form',
  fields: [

  ],
  render: (data: Record<string, unknown>) => `
    <form id="zenguide_chat_api_v2_zagents_zenguide_chat_postForm">

      <button type="submit">Submit</button>
    </form>
  `,
};

export const list_widget_embeds_api_v2_widget_embeds__getWidget = {
  name: 'list_widget_embeds_api_v2_widget_embeds__getWidget',
  description: 'Display results from list_widget_embeds_api_v2_widget_embeds__get',
  tool: 'list_widget_embeds_api_v2_widget_embeds__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const create_widget_embed_api_v2_widget_embeds__postForm = {
  name: 'create_widget_embed_api_v2_widget_embeds__postForm',
  description: 'Form for create_widget_embed_api_v2_widget_embeds__post',
  tool: 'create_widget_embed_api_v2_widget_embeds__post',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text', validation: 'required' },
    { name: 'survey_id', label: 'Survey id', type: 'number', validation: 'required' },
    { name: 'question_name', label: 'Question name', type: 'text', validation: 'required' },
    { name: 'allowed_domains', label: 'Allowed domains', type: 'text', validation: 'required' },
    { name: 'theme', label: 'Theme', type: 'text' },
    { name: 'width', label: 'Width', type: 'text' },
    { name: 'strict_domain_check', label: 'Strict domain check', type: 'checkbox' },
    { name: 'time_range', label: 'Time range', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="create_widget_embed_api_v2_widget_embeds__postForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Survey id: <input type="number" name="survey_id" /></label>
      <label>Question name: <input type="text" name="question_name" /></label>
      <label>Allowed domains: <input type="text" name="allowed_domains" /></label>
      <label>Theme: <input type="text" name="theme" /></label>
      <label>Width: <input type="text" name="width" /></label>
      <label>Strict domain check: <input type="checkbox" name="strict_domain_check" /></label>
      <label>Time range: <input type="text" name="time_range" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_widget_embed_api_v2_widget_embeds__embed_id__getDetail = {
  name: 'get_widget_embed_api_v2_widget_embeds__embed_id__getDetail',
  description: 'Detail view for get_widget_embed_api_v2_widget_embeds__embed_id__get',
  tool: 'get_widget_embed_api_v2_widget_embeds__embed_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const update_widget_embed_api_v2_widget_embeds__embed_id__putForm = {
  name: 'update_widget_embed_api_v2_widget_embeds__embed_id__putForm',
  description: 'Form for update_widget_embed_api_v2_widget_embeds__embed_id__put',
  tool: 'update_widget_embed_api_v2_widget_embeds__embed_id__put',
  type: 'form',
  fields: [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'survey_id', label: 'Survey id', type: 'text' },
    { name: 'question_name', label: 'Question name', type: 'text' },
    { name: 'allowed_domains', label: 'Allowed domains', type: 'text' },
    { name: 'theme', label: 'Theme', type: 'text' },
    { name: 'width', label: 'Width', type: 'text' },
    { name: 'strict_domain_check', label: 'Strict domain check', type: 'text' },
    { name: 'time_range', label: 'Time range', type: 'text' },
  ],
  render: (data: Record<string, unknown>) => `
    <form id="update_widget_embed_api_v2_widget_embeds__embed_id__putForm">
      <label>Name: <input type="text" name="name" /></label>
      <label>Survey id: <input type="text" name="survey_id" /></label>
      <label>Question name: <input type="text" name="question_name" /></label>
      <label>Allowed domains: <input type="text" name="allowed_domains" /></label>
      <label>Theme: <input type="text" name="theme" /></label>
      <label>Width: <input type="text" name="width" /></label>
      <label>Strict domain check: <input type="text" name="strict_domain_check" /></label>
      <label>Time range: <input type="text" name="time_range" /></label>
      <button type="submit">Submit</button>
    </form>
  `,
};

export const get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__getDetail = {
  name: 'get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__getDetail',
  description: 'Detail view for get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__get',
  tool: 'get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_widget_responses_api_v2_widget_surveys__survey_id__responses_getDetail = {
  name: 'get_widget_responses_api_v2_widget_surveys__survey_id__responses_getDetail',
  description: 'Detail view for get_widget_responses_api_v2_widget_surveys__survey_id__responses_get',
  tool: 'get_widget_responses_api_v2_widget_surveys__survey_id__responses_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_getDetail = {
  name: 'get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_getDetail',
  description: 'Detail view for get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_get',
  tool: 'get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__getDetail = {
  name: 'get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__getDetail',
  description: 'Detail view for get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__get',
  tool: 'get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__get',
  type: 'detail',
  render: (data: Record<string, unknown>) => {
    const entries = Object.entries(data);
    return `
      <dl>
        ${entries.map(([key, value]) => `<dt>${key}</dt><dd>${value}</dd>`).join('')}
      </dl>
    `;
  },
};

export const test_widget_api_api_v2_test_widget_api_getWidget = {
  name: 'test_widget_api_api_v2_test_widget_api_getWidget',
  description: 'Display results from test_widget_api_api_v2_test_widget_api_get',
  tool: 'test_widget_api_api_v2_test_widget_api_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const root__getWidget = {
  name: 'root__getWidget',
  description: 'Display results from root__get',
  tool: 'root__get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const health_health_getWidget = {
  name: 'health_health_getWidget',
  description: 'Display results from health_health_get',
  tool: 'health_health_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const scheduler_health_health_scheduler_getWidget = {
  name: 'scheduler_health_health_scheduler_getWidget',
  description: 'Display results from scheduler_health_health_scheduler_get',
  tool: 'scheduler_health_health_scheduler_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

export const memory_health_health_memory_getWidget = {
  name: 'memory_health_health_memory_getWidget',
  description: 'Display results from memory_health_health_memory_get',
  tool: 'memory_health_health_memory_get',
  type: 'table',
  render: (data: unknown[]) => {
    if (!Array.isArray(data) || data.length === 0) {
      return '<p>No data available</p>';
    }
    const headers = Object.keys(data[0] as Record<string, unknown>);
    return `
      <table>
        <thead>
          <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.map((row: unknown) => `<tr>${headers.map(h => `<td>${(row as Record<string, unknown>)[h]}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    `;
  },
};

// Widget registry
export const widgets = {
  get_user_profile_api_v2_auth_me_getWidget: get_user_profile_api_v2_auth_me_getWidget,
  list_api_keys_api_v2_auth_api_keys_getWidget: list_api_keys_api_v2_auth_api_keys_getWidget,
  create_api_key_api_v2_auth_api_keys_postForm: create_api_key_api_v2_auth_api_keys_postForm,
  set_organization_api_v2_auth_set_organization_postForm: set_organization_api_v2_auth_set_organization_postForm,
  get_api_logs_api_v2_auth_api_keys__key_id__logs_getDetail: get_api_logs_api_v2_auth_api_keys__key_id__logs_getDetail,
  get_api_documentation_api_v2_auth_docs_getWidget: get_api_documentation_api_v2_auth_docs_getWidget,
  generate_example_code_api_v2_auth_generate_code_postForm: generate_example_code_api_v2_auth_generate_code_postForm,
  list_survey_names_api_v2_surveys_names_getWidget: list_survey_names_api_v2_surveys_names_getWidget,
  get_surveys_api_v2_surveys__getWidget: get_surveys_api_v2_surveys__getWidget,
  create_survey_api_v2_surveys__postForm: create_survey_api_v2_surveys__postForm,
  list_tags_api_v2_surveys_tags_getWidget: list_tags_api_v2_surveys_tags_getWidget,
  create_tag_api_v2_surveys_tags_postForm: create_tag_api_v2_surveys_tags_postForm,
  update_tag_api_v2_surveys_tags__tag_id__putForm: update_tag_api_v2_surveys_tags__tag_id__putForm,
  get_tags_by_groups_api_v2_surveys_tags_by_groups_getWidget: get_tags_by_groups_api_v2_surveys_tags_by_groups_getWidget,
  get_survey_api_v2_surveys__survey_id__getDetail: get_survey_api_v2_surveys__survey_id__getDetail,
  update_survey_api_v2_surveys__survey_id__putForm: update_survey_api_v2_surveys__survey_id__putForm,
  update_survey_status_api_v2_surveys__survey_id__status_putForm: update_survey_status_api_v2_surveys__survey_id__status_putForm,
  get_html_embed_api_v2_surveys__survey_id__html_embed_getDetail: get_html_embed_api_v2_surveys__survey_id__html_embed_getDetail,
  update_html_embed_api_v2_surveys__survey_id__html_embed_putForm: update_html_embed_api_v2_surveys__survey_id__html_embed_putForm,
  update_html_with_instructions_api_v2_surveys__survey_id__html_update_postForm: update_html_with_instructions_api_v2_surveys__survey_id__html_update_postForm,
  get_survey_definition_api_v2_surveys__survey_id__definition_getDetail: get_survey_definition_api_v2_surveys__survey_id__definition_getDetail,
  get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_getDetail: get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_getDetail,
  get_survey_filters_api_v2_surveys__survey_id__filters_getDetail: get_survey_filters_api_v2_surveys__survey_id__filters_getDetail,
  get_survey_labels_api_v2_surveys__survey_id__labels_getDetail: get_survey_labels_api_v2_surveys__survey_id__labels_getDetail,
  clone_survey_api_v2_surveys__survey_id__clone_postForm: clone_survey_api_v2_surveys__survey_id__clone_postForm,
  list_themes_api_v2_surveys_themes_getWidget: list_themes_api_v2_surveys_themes_getWidget,
  create_theme_api_v2_surveys_themes_postForm: create_theme_api_v2_surveys_themes_postForm,
  get_theme_api_v2_surveys_themes__theme_id__getDetail: get_theme_api_v2_surveys_themes__theme_id__getDetail,
  update_theme_api_v2_surveys_themes__theme_id__putForm: update_theme_api_v2_surveys_themes__theme_id__putForm,
  get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_getDetail: get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_getDetail,
  generate_survey_api_v2_surveys_generate_postForm: generate_survey_api_v2_surveys_generate_postForm,
  get_survey_tags_api_v2_surveys__survey_id__tags_getDetail: get_survey_tags_api_v2_surveys__survey_id__tags_getDetail,
  update_survey_tags_api_v2_surveys__survey_id__tags_putForm: update_survey_tags_api_v2_surveys__survey_id__tags_putForm,
  get_public_survey_api_v2_surveys_public__survey_id__getDetail: get_public_survey_api_v2_surveys_public__survey_id__getDetail,
  initiate_phone_survey_api_v2_surveys__survey_id__call_postForm: initiate_phone_survey_api_v2_surveys__survey_id__call_postForm,
  handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_postForm: handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_postForm,
  list_organization_responses_api_v2_organizations_responses_getWidget: list_organization_responses_api_v2_organizations_responses_getWidget,
  list_responses_api_v2_surveys__survey_id__responses_getDetail: list_responses_api_v2_surveys__survey_id__responses_getDetail,
  submit_response_api_v2_surveys__survey_id__responses_postForm: submit_response_api_v2_surveys__survey_id__responses_postForm,
  get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_getDetail: get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_getDetail,
  get_response_properties_api_v2_surveys__survey_id__responses_properties_getDetail: get_response_properties_api_v2_surveys__survey_id__responses_properties_getDetail,
  get_response_api_v2_surveys__survey_id__responses__response_id__getDetail: get_response_api_v2_surveys__survey_id__responses__response_id__getDetail,
  update_response_api_v2_surveys__survey_id__responses__response_id__putForm: update_response_api_v2_surveys__survey_id__responses__response_id__putForm,
  generate_mock_responses_api_v2_surveys__survey_id__responses_mock_postForm: generate_mock_responses_api_v2_surveys__survey_id__responses_mock_postForm,
  get_public_widget_responses_api_v2_surveys__survey_id__public_responses_getDetail: get_public_widget_responses_api_v2_surveys__survey_id__public_responses_getDetail,
  get_visual_responses_api_v2_surveys__survey_id__visual_responses_getDetail: get_visual_responses_api_v2_surveys__survey_id__visual_responses_getDetail,
  list_notes_api_v2_responses__response_id__notes_getDetail: list_notes_api_v2_responses__response_id__notes_getDetail,
  create_note_api_v2_responses__response_id__notes_postForm: create_note_api_v2_responses__response_id__notes_postForm,
  update_note_api_v2_responses__response_id__notes__note_id__putForm: update_note_api_v2_responses__response_id__notes__note_id__putForm,
  get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_getWidget: get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_getWidget,
  generate_graphs_api_v2_surveys__survey_id__graphs_generate_postForm: generate_graphs_api_v2_surveys__survey_id__graphs_generate_postForm,
  generate_insights_api_v2_surveys__survey_id__insights_postForm: generate_insights_api_v2_surveys__survey_id__insights_postForm,
  get_analytics_summary_api_v2_surveys__survey_id__summary_getDetail: get_analytics_summary_api_v2_surveys__survey_id__summary_getDetail,
  update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_postForm: update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_postForm,
  export_analytics_api_v2_surveys__survey_id__export_postForm: export_analytics_api_v2_surveys__survey_id__export_postForm,
  get_export_status_api_v2_surveys__survey_id__export__request_id__getDetail: get_export_status_api_v2_surveys__survey_id__export__request_id__getDetail,
  create_export_api_v2_exports_surveys__survey_id__export_postForm: create_export_api_v2_exports_surveys__survey_id__export_postForm,
  get_export_status_api_v2_exports_surveys__survey_id__export__request_id__getDetail: get_export_status_api_v2_exports_surveys__survey_id__export__request_id__getDetail,
  download_csv_api_v2_exports_surveys__survey_id__download_csv_postForm: download_csv_api_v2_exports_surveys__survey_id__download_csv_postForm,
  chat_with_surveys_api_v2_surveys_chat_postForm: chat_with_surveys_api_v2_surveys_chat_postForm,
  get_groups_api_v2_group__getWidget: get_groups_api_v2_group__getWidget,
  create_group_api_v2_group__postForm: create_group_api_v2_group__postForm,
  update_group_api_v2_group__group_id__putForm: update_group_api_v2_group__group_id__putForm,
  add_users_to_group_api_v2_group__group_id__users_postForm: add_users_to_group_api_v2_group__group_id__users_postForm,
  get_group_surveys_api_v2_group__group_id__surveys_getDetail: get_group_surveys_api_v2_group__group_id__surveys_getDetail,
  assign_surveys_to_group_api_v2_group__group_id__surveys_postForm: assign_surveys_to_group_api_v2_group__group_id__surveys_postForm,
  get_group_details_api_v2_group_details__getWidget: get_group_details_api_v2_group_details__getWidget,
  get_theme_api_v2_themes__theme_id__getDetail: get_theme_api_v2_themes__theme_id__getDetail,
  update_theme_api_v2_themes__theme_id__putForm: update_theme_api_v2_themes__theme_id__putForm,
  get_themes_api_v2_themes__getWidget: get_themes_api_v2_themes__getWidget,
  create_theme_api_v2_themes__postForm: create_theme_api_v2_themes__postForm,
  get_dictionaries_api_v2_dictionaries__getWidget: get_dictionaries_api_v2_dictionaries__getWidget,
  get_survey_cx_api_v2_surveys__survey_id__cx_getDetail: get_survey_cx_api_v2_surveys__survey_id__cx_getDetail,
  suggest_report_name_api_v2_business_insights_name_suggestion_postForm: suggest_report_name_api_v2_business_insights_name_suggestion_postForm,
  update_html_with_instructions_api_v2_html_update_postForm: update_html_with_instructions_api_v2_html_update_postForm,
  list_templates_api_v2_templates__getWidget: list_templates_api_v2_templates__getWidget,
  create_template_api_v2_templates__postForm: create_template_api_v2_templates__postForm,
  get_template_api_v2_templates__template_id__getDetail: get_template_api_v2_templates__template_id__getDetail,
  update_template_api_v2_templates__template_id__putForm: update_template_api_v2_templates__template_id__putForm,
  autocomplete_api_v2_autocomplete__getWidget: autocomplete_api_v2_autocomplete__getWidget,
  get_workflows_endpoint_api_v2_workflows__getWidget: get_workflows_endpoint_api_v2_workflows__getWidget,
  create_workflow_endpoint_api_v2_workflows__postForm: create_workflow_endpoint_api_v2_workflows__postForm,
  update_workflow_endpoint_api_v2_workflows__id__putForm: update_workflow_endpoint_api_v2_workflows__id__putForm,
  get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_getWidget: get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_getWidget,
  get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_getWidget: get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_getWidget,
  test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_postForm: test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_postForm,
  test_emarsys_connection_api_v2_emarsys_test_connection_postForm: test_emarsys_connection_api_v2_emarsys_test_connection_postForm,
  get_emarsys_fields_api_v2_emarsys_fields_postForm: get_emarsys_fields_api_v2_emarsys_fields_postForm,
  create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__postForm: create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__postForm,
  get_survey_questions_api_v2_emarsys_survey_questions__survey_id__getDetail: get_survey_questions_api_v2_emarsys_survey_questions__survey_id__getDetail,
  get_feeds_api_v2_feeds__getWidget: get_feeds_api_v2_feeds__getWidget,
  create_feed_api_v2_feeds__postForm: create_feed_api_v2_feeds__postForm,
  get_feed_api_v2_feeds__feed_id__getDetail: get_feed_api_v2_feeds__feed_id__getDetail,
  get_feed_by_hash_api_v2_feeds_hash__share_link_hash__getDetail: get_feed_by_hash_api_v2_feeds_hash__share_link_hash__getDetail,
  business_insights_api_v2_resonance_business_insights_postForm: business_insights_api_v2_resonance_business_insights_postForm,
  get_public_feed_api_v2_public_share_feed__share_link_hash__getDetail: get_public_feed_api_v2_public_share_feed__share_link_hash__getDetail,
  get_widget_data_api_v2_public_widget__embed_token__getDetail: get_widget_data_api_v2_public_widget__embed_token__getDetail,
  track_survey_view_api_v2_public_surveys_track_view_postForm: track_survey_view_api_v2_public_surveys_track_view_postForm,
  get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_getDetail: get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_getDetail,
  get_company_data_api_v2_company_getWidget: get_company_data_api_v2_company_getWidget,
  list_reports_api_v2_reports__getWidget: list_reports_api_v2_reports__getWidget,
  create_report_api_v2_reports__postForm: create_report_api_v2_reports__postForm,
  get_scheduler_status_api_v2_reports_scheduler_status_getWidget: get_scheduler_status_api_v2_reports_scheduler_status_getWidget,
  get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_getWidget: get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_getWidget,
  get_scheduled_reports_api_v2_reports_scheduled_getWidget: get_scheduled_reports_api_v2_reports_scheduled_getWidget,
  health_check_api_v2_reports_health_getWidget: health_check_api_v2_reports_health_getWidget,
  get_report_api_v2_reports__report_id__getDetail: get_report_api_v2_reports__report_id__getDetail,
  update_report_api_v2_reports__report_id__putForm: update_report_api_v2_reports__report_id__putForm,
  execute_report_api_v2_reports__report_id__execute_postForm: execute_report_api_v2_reports__report_id__execute_postForm,
  preview_report_api_v2_reports__report_id__preview_postForm: preview_report_api_v2_reports__report_id__preview_postForm,
  list_report_executions_api_v2_reports__report_id__executions_getDetail: list_report_executions_api_v2_reports__report_id__executions_getDetail,
  get_report_statistics_api_v2_reports__report_id__statistics_getDetail: get_report_statistics_api_v2_reports__report_id__statistics_getDetail,
  force_execute_report_api_v2_reports__report_id__execute_force_postForm: force_execute_report_api_v2_reports__report_id__execute_force_postForm,
  export_report_api_v2_reports__report_id__export_postForm: export_report_api_v2_reports__report_id__export_postForm,
  batch_delete_reports_api_v2_reports_batch_delete_postForm: batch_delete_reports_api_v2_reports_batch_delete_postForm,
  get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__getDetail: get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__getDetail,
  get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_getDetail: get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_getDetail,
  get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_getDetail: get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_getDetail,
  get_auth_url_api_v2_integrations_gominga_auth_getWidget: get_auth_url_api_v2_integrations_gominga_auth_getWidget,
  handle_callback_api_v2_integrations_gominga_callback_getWidget: handle_callback_api_v2_integrations_gominga_callback_getWidget,
  get_sync_status_api_v2_integrations_gominga_sync_status_getWidget: get_sync_status_api_v2_integrations_gominga_sync_status_getWidget,
  get_reviews_api_v2_integrations_gominga_reviews_getWidget: get_reviews_api_v2_integrations_gominga_reviews_getWidget,
  reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_postForm: reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_postForm,
  get_mock_reviews_api_v2_integrations_gominga_reviews_mock_getWidget: get_mock_reviews_api_v2_integrations_gominga_reviews_mock_getWidget,
  get_surveys_with_scores_api_v2_surveys_with_scores_getWidget: get_surveys_with_scores_api_v2_surveys_with_scores_getWidget,
  get_survey_score_details_api_v2_surveys__survey_id__score_details_getDetail: get_survey_score_details_api_v2_surveys__survey_id__score_details_getDetail,
  get_widget_score_api_v2_widget_surveys__survey_id__score_getDetail: get_widget_score_api_v2_widget_surveys__survey_id__score_getDetail,
  get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_getDetail: get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_getDetail,
  get_used_topics_api_v2_surveys__survey_id__topics_used_getDetail: get_used_topics_api_v2_surveys__survey_id__topics_used_getDetail,
  list_journeys_api_v2_journeys_getWidget: list_journeys_api_v2_journeys_getWidget,
  create_journey_api_v2_journeys_postForm: create_journey_api_v2_journeys_postForm,
  list_templates_api_v2_journeys_templates_getWidget: list_templates_api_v2_journeys_templates_getWidget,
  get_template_api_v2_journeys_templates__template_id__getDetail: get_template_api_v2_journeys_templates__template_id__getDetail,
  get_journey_api_v2_journeys__journey_id__getDetail: get_journey_api_v2_journeys__journey_id__getDetail,
  generate_journey_ai_api_v2_journeys_generate_postForm: generate_journey_ai_api_v2_journeys_generate_postForm,
  save_generated_journeys_api_v2_journeys_generate_save_postForm: save_generated_journeys_api_v2_journeys_generate_save_postForm,
  suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_postForm: suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_postForm,
  analyze_csv_journeys_api_v2_journeys_analyze_csv_postForm: analyze_csv_journeys_api_v2_journeys_analyze_csv_postForm,
  create_stage_api_v2_journeys__journey_id__stages_postForm: create_stage_api_v2_journeys__journey_id__stages_postForm,
  reorder_stages_api_v2_journeys__journey_id__stages_reorder_putForm: reorder_stages_api_v2_journeys__journey_id__stages_reorder_putForm,
  create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_postForm: create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_postForm,
  reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_putForm: reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_putForm,
  get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_getDetail: get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_getDetail,
  link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_postForm: link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_postForm,
  get_organization_settings_api_v2_phone_numbers_organization_settings_getWidget: get_organization_settings_api_v2_phone_numbers_organization_settings_getWidget,
  suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_getWidget: suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_getWidget,
  search_region_numbers_api_v2_phone_numbers_search_region_getWidget: search_region_numbers_api_v2_phone_numbers_search_region_getWidget,
  search_available_numbers_api_v2_phone_numbers_search_getWidget: search_available_numbers_api_v2_phone_numbers_search_getWidget,
  purchase_number_api_v2_phone_numbers_purchase_postForm: purchase_number_api_v2_phone_numbers_purchase_postForm,
  list_phone_numbers_api_v2_phone_numbers_getWidget: list_phone_numbers_api_v2_phone_numbers_getWidget,
  assign_number_to_survey_api_v2_phone_numbers__number_id__assign_postForm: assign_number_to_survey_api_v2_phone_numbers__number_id__assign_postForm,
  unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_postForm: unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_postForm,
  get_number_details_api_v2_phone_numbers__number_id__getDetail: get_number_details_api_v2_phone_numbers__number_id__getDetail,
  get_survey_config_api_v2_phone_configs_surveys__survey_id__config_getDetail: get_survey_config_api_v2_phone_configs_surveys__survey_id__config_getDetail,
  update_survey_config_api_v2_phone_configs_surveys__survey_id__config_putForm: update_survey_config_api_v2_phone_configs_surveys__survey_id__config_putForm,
  list_presets_api_v2_phone_configs_presets_getWidget: list_presets_api_v2_phone_configs_presets_getWidget,
  create_preset_api_v2_phone_configs_presets_postForm: create_preset_api_v2_phone_configs_presets_postForm,
  list_available_voices_api_v2_phone_configs_voices_getWidget: list_available_voices_api_v2_phone_configs_voices_getWidget,
  list_available_languages_api_v2_phone_configs_languages_getWidget: list_available_languages_api_v2_phone_configs_languages_getWidget,
  preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_postForm: preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_postForm,
  create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_postForm: create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_postForm,
  list_test_calls_api_v2_surveys__survey_id__test_calls_getDetail: list_test_calls_api_v2_surveys__survey_id__test_calls_getDetail,
  create_test_call_api_v2_surveys__survey_id__test_calls_postForm: create_test_call_api_v2_surveys__survey_id__test_calls_postForm,
  get_test_call_api_v2_surveys__survey_id__test_calls__test_id__getDetail: get_test_call_api_v2_surveys__survey_id__test_calls__test_id__getDetail,
  approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_postForm: approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_postForm,
  bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_postForm: bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_postForm,
  upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_postForm: upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_postForm,
  validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_postForm: validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_postForm,
  list_campaigns_api_v2_surveys__survey_id__phone_campaigns_getDetail: list_campaigns_api_v2_surveys__survey_id__phone_campaigns_getDetail,
  create_campaign_api_v2_surveys__survey_id__phone_campaigns_postForm: create_campaign_api_v2_surveys__survey_id__phone_campaigns_postForm,
  get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__getDetail: get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__getDetail,
  get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_getDetail: get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_getDetail,
  get_products_api_v2_products_getWidget: get_products_api_v2_products_getWidget,
  create_product_api_v2_products_postForm: create_product_api_v2_products_postForm,
  get_product_api_v2_products__product_id__getDetail: get_product_api_v2_products__product_id__getDetail,
  update_product_api_v2_products__product_id__putForm: update_product_api_v2_products__product_id__putForm,
  get_products_by_external_ids_public_api_v2_by_external_ids_public_getWidget: get_products_by_external_ids_public_api_v2_by_external_ids_public_getWidget,
  import_products_api_v2_products_import_postForm: import_products_api_v2_products_import_postForm,
  get_product_reviews_api_v2_products__product_id__reviews_getDetail: get_product_reviews_api_v2_products__product_id__reviews_getDetail,
  get_product_review_summary_api_v2_products__product_id__reviews_summary_getDetail: get_product_review_summary_api_v2_products__product_id__reviews_summary_getDetail,
  get_categories_api_v2_categories_getWidget: get_categories_api_v2_categories_getWidget,
  create_category_api_v2_categories_postForm: create_category_api_v2_categories_postForm,
  get_category_api_v2_categories__category_id__getDetail: get_category_api_v2_categories__category_id__getDetail,
  update_category_api_v2_categories__category_id__putForm: update_category_api_v2_categories__category_id__putForm,
  get_orders_api_v2_orders_getWidget: get_orders_api_v2_orders_getWidget,
  create_order_api_v2_orders_postForm: create_order_api_v2_orders_postForm,
  get_order_api_v2_orders__order_id__getDetail: get_order_api_v2_orders__order_id__getDetail,
  update_order_api_v2_orders__order_id__putForm: update_order_api_v2_orders__order_id__putForm,
  get_order_detail_api_v2_orders__order_id__detail_getDetail: get_order_detail_api_v2_orders__order_id__detail_getDetail,
  get_order_survey_link_api_v2_orders__order_id__survey_link_getDetail: get_order_survey_link_api_v2_orders__order_id__survey_link_getDetail,
  import_orders_api_v2_orders_import_postForm: import_orders_api_v2_orders_import_postForm,
  send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_postForm: send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_postForm,
  get_reviews_api_v2_reviews_getWidget: get_reviews_api_v2_reviews_getWidget,
  export_google_product_reviews_feed_api_v2_reviews_export_google_feed_getWidget: export_google_product_reviews_feed_api_v2_reviews_export_google_feed_getWidget,
  export_reviews_api_v2_reviews_export_getWidget: export_reviews_api_v2_reviews_export_getWidget,
  get_product_review_summary_api_v2_reviews_product__product_id__summary_getDetail: get_product_review_summary_api_v2_reviews_product__product_id__summary_getDetail,
  ai_powered_review_search_api_v2_reviews_ai_search_getWidget: ai_powered_review_search_api_v2_reviews_ai_search_getWidget,
  get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_getDetail: get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_getDetail,
  get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_getDetail: get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_getDetail,
  get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_getDetail: get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_getDetail,
  get_power_reviewers_api_v2_reviewers_power_reviewers_getWidget: get_power_reviewers_api_v2_reviewers_power_reviewers_getWidget,
  get_order_analytics_api_v2_orders_analytics_getWidget: get_order_analytics_api_v2_orders_analytics_getWidget,
  get_single_order_analytics_api_v2_orders__order_id__analytics_getDetail: get_single_order_analytics_api_v2_orders__order_id__analytics_getDetail,
  get_product_config_api_v2_organization_product_config_getWidget: get_product_config_api_v2_organization_product_config_getWidget,
  resolve_surveys_by_products_api_v2_surveys_resolve_by_products_getWidget: resolve_surveys_by_products_api_v2_surveys_resolve_by_products_getWidget,
  resolve_surveys_api_v2_surveys_resolve_postForm: resolve_surveys_api_v2_surveys_resolve_postForm,
  get_assignments_api_v2_survey_assignments_getWidget: get_assignments_api_v2_survey_assignments_getWidget,
  create_assignment_api_v2_survey_assignments_postForm: create_assignment_api_v2_survey_assignments_postForm,
  update_assignment_api_v2_survey_assignments__assignment_id__putForm: update_assignment_api_v2_survey_assignments__assignment_id__putForm,
  bulk_create_assignments_api_v2_survey_assignments_bulk_postForm: bulk_create_assignments_api_v2_survey_assignments_bulk_postForm,
  get_assignments_by_products_api_v2_survey_assignments_by_products_postForm: get_assignments_by_products_api_v2_survey_assignments_by_products_postForm,
  get_assignment_statistics_api_v2_survey_assignments_stats_getWidget: get_assignment_statistics_api_v2_survey_assignments_stats_getWidget,
  get_active_configuration_api_v2_survey_chain_config_active_getWidget: get_active_configuration_api_v2_survey_chain_config_active_getWidget,
  get_all_configurations_api_v2_survey_chain_config_getWidget: get_all_configurations_api_v2_survey_chain_config_getWidget,
  create_configuration_api_v2_survey_chain_config_postForm: create_configuration_api_v2_survey_chain_config_postForm,
  update_configuration_api_v2_survey_chain_config__config_id__putForm: update_configuration_api_v2_survey_chain_config__config_id__putForm,
  test_optimization_api_v2_survey_chain_config_test_optimization_postForm: test_optimization_api_v2_survey_chain_config_test_optimization_postForm,
  resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_getWidget: resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_getWidget,
  resolve_surveys_public_api_v2_public_surveys_resolve_postForm: resolve_surveys_public_api_v2_public_surveys_resolve_postForm,
  handle_survey_response_api_v2_webhooks_survey_response_postForm: handle_survey_response_api_v2_webhooks_survey_response_postForm,
  handle_order_status_api_v2_webhooks_order_status_postForm: handle_order_status_api_v2_webhooks_order_status_postForm,
  handle_order_shipment_api_v2_webhooks_order_shipment_postForm: handle_order_shipment_api_v2_webhooks_order_shipment_postForm,
  handle_order_delivery_api_v2_webhooks_order_delivery_postForm: handle_order_delivery_api_v2_webhooks_order_delivery_postForm,
  get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_getWidget: get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_getWidget,
  list_segments_api_v2_contacts_segments__getWidget: list_segments_api_v2_contacts_segments__getWidget,
  create_segment_api_v2_contacts_segments__postForm: create_segment_api_v2_contacts_segments__postForm,
  get_segment_api_v2_contacts_segments__segment_id__getDetail: get_segment_api_v2_contacts_segments__segment_id__getDetail,
  get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_getDetail: get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_getDetail,
  add_members_api_v2_contacts_segments__segment_id__members_postForm: add_members_api_v2_contacts_segments__segment_id__members_postForm,
  quick_search_api_v2_contacts_search__getWidget: quick_search_api_v2_contacts_search__getWidget,
  semantic_search_api_v2_contacts_search_semantic_postForm: semantic_search_api_v2_contacts_search_semantic_postForm,
  get_suggestions_api_v2_contacts_search_suggest_getWidget: get_suggestions_api_v2_contacts_search_suggest_getWidget,
  search_by_attributes_api_v2_contacts_search_attributes_postForm: search_by_attributes_api_v2_contacts_search_attributes_postForm,
  list_interactions_api_v2_contacts__contact_id__interactions__getDetail: list_interactions_api_v2_contacts__contact_id__interactions__getDetail,
  log_interaction_api_v2_contacts__contact_id__interactions__postForm: log_interaction_api_v2_contacts__contact_id__interactions__postForm,
  get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_getDetail: get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_getDetail,
  list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_getDetail: list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_getDetail,
  create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_postForm: create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_postForm,
  update_reply_api_v2_replies__reply_id__putForm: update_reply_api_v2_replies__reply_id__putForm,
  get_contact_content_api_v2_contacts__contact_id__content__getDetail: get_contact_content_api_v2_contacts__contact_id__content__getDetail,
  list_contact_content_api_v2_contacts__contact_id__content_all_getDetail: list_contact_content_api_v2_contacts__contact_id__content_all_getDetail,
  list_definitions_api_v2_contacts_attributes_definitions_getWidget: list_definitions_api_v2_contacts_attributes_definitions_getWidget,
  create_definition_api_v2_contacts_attributes_definitions_postForm: create_definition_api_v2_contacts_attributes_definitions_postForm,
  get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_getWidget: get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_getWidget,
  get_definition_api_v2_contacts_attributes_definitions__definition_id__getDetail: get_definition_api_v2_contacts_attributes_definitions__definition_id__getDetail,
  get_rules_api_v2_contacts_throttle_rules_getWidget: get_rules_api_v2_contacts_throttle_rules_getWidget,
  update_rules_api_v2_contacts_throttle_rules_putForm: update_rules_api_v2_contacts_throttle_rules_putForm,
  get_throttle_stats_api_v2_contacts_throttle_stats_getWidget: get_throttle_stats_api_v2_contacts_throttle_stats_getWidget,
  get_throttle_log_api_v2_contacts_throttle_log_getWidget: get_throttle_log_api_v2_contacts_throttle_log_getWidget,
  list_import_jobs_api_v2_contacts_import_getWidget: list_import_jobs_api_v2_contacts_import_getWidget,
  create_import_job_api_v2_contacts_import_postForm: create_import_job_api_v2_contacts_import_postForm,
  get_import_job_api_v2_contacts_import__job_id__getDetail: get_import_job_api_v2_contacts_import__job_id__getDetail,
  preview_import_api_v2_contacts_import_preview_postForm: preview_import_api_v2_contacts_import_preview_postForm,
  list_export_jobs_api_v2_contacts_export_getWidget: list_export_jobs_api_v2_contacts_export_getWidget,
  create_export_job_api_v2_contacts_export_postForm: create_export_job_api_v2_contacts_export_postForm,
  quick_export_api_v2_contacts_export_quick_getWidget: quick_export_api_v2_contacts_export_quick_getWidget,
  get_export_job_api_v2_contacts_export__job_id__getDetail: get_export_job_api_v2_contacts_export__job_id__getDetail,
  download_export_api_v2_contacts_export__job_id__download_getDetail: download_export_api_v2_contacts_export__job_id__download_getDetail,
  get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__getDetail: get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__getDetail,
  list_contacts_api_v2_contacts__getWidget: list_contacts_api_v2_contacts__getWidget,
  create_contact_api_v2_contacts__postForm: create_contact_api_v2_contacts__postForm,
  get_contact_stats_api_v2_contacts__contact_id__stats_getDetail: get_contact_stats_api_v2_contacts__contact_id__stats_getDetail,
  get_contact_api_v2_contacts__contact_id__getDetail: get_contact_api_v2_contacts__contact_id__getDetail,
  bulk_update_tags_api_v2_contacts_bulk_tags_postForm: bulk_update_tags_api_v2_contacts_bulk_tags_postForm,
  bulk_update_attributes_api_v2_contacts_bulk_attributes_postForm: bulk_update_attributes_api_v2_contacts_bulk_attributes_postForm,
  check_throttle_api_v2_contacts__contact_id__can_contact_postForm: check_throttle_api_v2_contacts__contact_id__can_contact_postForm,
  get_contact_source_links_api_v2_contacts__contact_id__source_links_getDetail: get_contact_source_links_api_v2_contacts__contact_id__source_links_getDetail,
  save_legacy_credentials_api_v2_migration_credentials_postForm: save_legacy_credentials_api_v2_migration_credentials_postForm,
  get_credentials_status_api_v2_migration_credentials_status_getWidget: get_credentials_status_api_v2_migration_credentials_status_getWidget,
  list_legacy_surveys_api_v2_migration_surveys_getWidget: list_legacy_surveys_api_v2_migration_surveys_getWidget,
  get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_getDetail: get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_getDetail,
  preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_getDetail: preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_getDetail,
  import_survey_api_v2_migration_surveys_import_postForm: import_survey_api_v2_migration_surveys_import_postForm,
  import_survey_responses_api_v2_migration_responses_import_postForm: import_survey_responses_api_v2_migration_responses_import_postForm,
  get_migration_progress_api_v2_migration_status__migration_id__getDetail: get_migration_progress_api_v2_migration_status__migration_id__getDetail,
  chat_http_api_v2_zagents_chat_postForm: chat_http_api_v2_zagents_chat_postForm,
  chat_http_v2_api_v2_zagents_chat_postForm: chat_http_v2_api_v2_zagents_chat_postForm,
  health_check_v2_api_v2_zagents_health_getWidget: health_check_v2_api_v2_zagents_health_getWidget,
  create_voice_token_api_v2_zagents_voice_token_postForm: create_voice_token_api_v2_zagents_voice_token_postForm,
  voice_health_check_api_v2_zagents_voice_health_getWidget: voice_health_check_api_v2_zagents_voice_health_getWidget,
  execute_function_api_v2_zagents_voice_functions_execute_postForm: execute_function_api_v2_zagents_voice_functions_execute_postForm,
  list_functions_api_v2_zagents_voice_functions_list_getWidget: list_functions_api_v2_zagents_voice_functions_list_getWidget,
  zenguide_chat_api_v2_zagents_zenguide_chat_postForm: zenguide_chat_api_v2_zagents_zenguide_chat_postForm,
  list_widget_embeds_api_v2_widget_embeds__getWidget: list_widget_embeds_api_v2_widget_embeds__getWidget,
  create_widget_embed_api_v2_widget_embeds__postForm: create_widget_embed_api_v2_widget_embeds__postForm,
  get_widget_embed_api_v2_widget_embeds__embed_id__getDetail: get_widget_embed_api_v2_widget_embeds__embed_id__getDetail,
  update_widget_embed_api_v2_widget_embeds__embed_id__putForm: update_widget_embed_api_v2_widget_embeds__embed_id__putForm,
  get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__getDetail: get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__getDetail,
  get_widget_responses_api_v2_widget_surveys__survey_id__responses_getDetail: get_widget_responses_api_v2_widget_surveys__survey_id__responses_getDetail,
  get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_getDetail: get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_getDetail,
  get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__getDetail: get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__getDetail,
  test_widget_api_api_v2_test_widget_api_getWidget: test_widget_api_api_v2_test_widget_api_getWidget,
  root__getWidget: root__getWidget,
  health_health_getWidget: health_health_getWidget,
  scheduler_health_health_scheduler_getWidget: scheduler_health_health_scheduler_getWidget,
  memory_health_health_memory_getWidget: memory_health_health_memory_getWidget,
};
