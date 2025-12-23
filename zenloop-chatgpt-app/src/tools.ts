import { z } from 'zod';
import { apiClient } from './api-client.js';

// Tool type definition
interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties: Record<string, unknown>;
    required: string[];
  };
}

// Tool definitions for MCP
export const tools: ToolDefinition[] = [
  {
    name: 'get_user_profile_api_v2_auth_me_get',
    description: 'Get User Profile',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'list_api_keys_api_v2_auth_api_keys_get',
    description: 'List Api Keys',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_api_key_api_v2_auth_api_keys_post',
    description: 'Create Api Key',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "name": {
                "type": "string",
                "description": "Name of the API key"
            },
            "description": {
                "type": "string",
                "description": "Description of API key usage"
            },
            "expires_at": {
                "type": "string",
                "description": "Expiration date for the API key. Set to null for no expiration."
            },
            "scopes": {
                "type": "array",
                "description": "List of permission scopes"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'validate_token_api_v2_auth_validate_post',
    description: 'Validate Token',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'delete_api_key_api_v2_auth_api_keys__key_id__delete',
    description: 'Delete Api Key',
    inputSchema: {
        "type": "object",
        "properties": {
            "key_id": {
                "type": "string",
                "description": "key_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "key_id",
            "org_id"
        ]
    }
  },
  {
    name: 'set_organization_api_v2_auth_set_organization_post',
    description: 'Set Organization',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_api_logs_api_v2_auth_api_keys__key_id__logs_get',
    description: 'Get Api Logs',
    inputSchema: {
        "type": "object",
        "properties": {
            "key_id": {
                "type": "string",
                "description": "key_id parameter"
            },
            "log_type": {
                "type": "string",
                "description": "log_type parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            }
        },
        "required": [
            "key_id"
        ]
    }
  },
  {
    name: 'get_api_documentation_api_v2_auth_docs_get',
    description: 'Get Api Documentation',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'generate_example_code_api_v2_auth_generate_code_post',
    description: 'Generate Example Code',
    inputSchema: {
        "type": "object",
        "properties": {
            "use_case": {
                "type": "string",
                "description": "Description of the use case"
            },
            "language": {
                "type": "string",
                "description": "Programming language to generate code in"
            },
            "framework": {
                "type": "string",
                "description": "Optional framework to use (e.g., 'requests', 'axios', 'fetch')"
            },
            "authentication_type": {
                "type": "string",
                "description": "Type of authentication to use (jwt, api_key)"
            },
            "follow_up_question": {
                "type": "string",
                "description": "Optional follow-up question about the previously generated code"
            },
            "conversation_history": {
                "type": "string",
                "description": "Previous conversation history for context"
            }
        },
        "required": [
            "use_case",
            "language"
        ]
    }
  },
  {
    name: 'list_survey_names_api_v2_surveys_names_get',
    description: 'List Survey Names',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_surveys_api_v2_surveys__get',
    description: 'Get Surveys',
    inputSchema: {
        "type": "object",
        "properties": {
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "tags": {
                "type": "string",
                "description": "tags parameter"
            },
            "search": {
                "type": "string",
                "description": "search parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "sort_by": {
                "type": "string",
                "description": "sort_by parameter"
            },
            "sort_order": {
                "type": "string",
                "description": "sort_order parameter"
            },
            "details": {
                "type": "string",
                "description": "Response detail level: 'full' or 'essential'"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_survey_api_v2_surveys__post',
    description: 'Create Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "survey_name": {
                "type": "string",
                "description": "survey_name parameter"
            },
            "survey_description": {
                "type": "string",
                "description": "survey_description parameter"
            },
            "survey_json": {
                "type": "object",
                "description": "survey_json parameter"
            },
            "theme_json": {
                "type": "string",
                "description": "theme_json parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "creator_id": {
                "type": "string",
                "description": "creator_id parameter"
            },
            "dictionary_id": {
                "type": "string",
                "description": "dictionary_id parameter"
            }
        },
        "required": [
            "survey_name",
            "survey_json"
        ]
    }
  },
  {
    name: 'list_tags_api_v2_surveys_tags_get',
    description: 'List Tags',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_tag_api_v2_surveys_tags_post',
    description: 'Create Tag',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "is_favorite": {
                "type": "boolean",
                "description": "is_favorite parameter"
            },
            "auto_generated": {
                "type": "boolean",
                "description": "auto_generated parameter"
            }
        },
        "required": [
            "name",
            "org_id"
        ]
    }
  },
  {
    name: 'update_tag_api_v2_surveys_tags__tag_id__put',
    description: 'Update Tag',
    inputSchema: {
        "type": "object",
        "properties": {
            "tag_id": {
                "type": "string",
                "description": "tag_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "is_favorite": {
                "type": "string",
                "description": "is_favorite parameter"
            }
        },
        "required": [
            "tag_id"
        ]
    }
  },
  {
    name: 'delete_tag_api_v2_surveys_tags__tag_id__delete',
    description: 'Delete Tag',
    inputSchema: {
        "type": "object",
        "properties": {
            "tag_id": {
                "type": "string",
                "description": "tag_id parameter"
            }
        },
        "required": [
            "tag_id"
        ]
    }
  },
  {
    name: 'get_tags_by_groups_api_v2_surveys_tags_by_groups_get',
    description: 'Get Tags By Groups',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_survey_api_v2_surveys__survey_id__get',
    description: 'Get Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'update_survey_api_v2_surveys__survey_id__put',
    description: 'Update Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "survey_name": {
                "type": "string",
                "description": "survey_name parameter"
            },
            "survey_description": {
                "type": "string",
                "description": "survey_description parameter"
            },
            "survey_json": {
                "type": "string",
                "description": "survey_json parameter"
            },
            "theme_json": {
                "type": "string",
                "description": "theme_json parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "dictionary_id": {
                "type": "string",
                "description": "dictionary_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'delete_survey_api_v2_surveys__survey_id__delete',
    description: 'Delete Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'update_survey_status_api_v2_surveys__survey_id__status_put',
    description: 'Update Survey Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            }
        },
        "required": [
            "survey_id",
            "status"
        ]
    }
  },
  {
    name: 'get_html_embed_api_v2_surveys__survey_id__html_embed_get',
    description: 'Get Html Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'create_html_embed_api_v2_surveys__survey_id__html_embed_post',
    description: 'Create Html Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'update_html_embed_api_v2_surveys__survey_id__html_embed_put',
    description: 'Update Html Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "html_code": {
                "type": "string",
                "description": "html_code parameter"
            }
        },
        "required": [
            "survey_id",
            "html_code"
        ]
    }
  },
  {
    name: 'update_html_with_instructions_api_v2_surveys__survey_id__html_update_post',
    description: 'Update Html With Instructions',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_survey_definition_api_v2_surveys__survey_id__definition_get',
    description: 'Get Survey Definition',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_get',
    description: 'Get Clean Survey Definition',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_survey_filters_api_v2_surveys__survey_id__filters_get',
    description: 'Get Survey Filters',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_survey_labels_api_v2_surveys__survey_id__labels_get',
    description: 'Get Survey Labels',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'process_survey_labels_api_v2_surveys__survey_id__process_labels_post',
    description: 'Process Survey Labels',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'clone_survey_api_v2_surveys__survey_id__clone_post',
    description: 'Clone Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "new_name": {
                "type": "string",
                "description": "new_name parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "copy_responses": {
                "type": "boolean",
                "description": "copy_responses parameter"
            },
            "copy_dashboard": {
                "type": "boolean",
                "description": "copy_dashboard parameter"
            }
        },
        "required": [
            "survey_id",
            "new_name",
            "org_id"
        ]
    }
  },
  {
    name: 'list_themes_api_v2_surveys_themes_get',
    description: 'List Themes',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_theme_api_v2_surveys_themes_post',
    description: 'Create Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "theme_json": {
                "type": "object",
                "description": "theme_json parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "is_default": {
                "type": "boolean",
                "description": "is_default parameter"
            }
        },
        "required": [
            "name",
            "theme_json",
            "org_id"
        ]
    }
  },
  {
    name: 'get_theme_api_v2_surveys_themes__theme_id__get',
    description: 'Get Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "theme_id": {
                "type": "string",
                "description": "theme_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "theme_id",
            "org_id"
        ]
    }
  },
  {
    name: 'update_theme_api_v2_surveys_themes__theme_id__put',
    description: 'Update Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "theme_id": {
                "type": "string",
                "description": "theme_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "theme_json": {
                "type": "string",
                "description": "theme_json parameter"
            },
            "is_default": {
                "type": "string",
                "description": "is_default parameter"
            }
        },
        "required": [
            "theme_id"
        ]
    }
  },
  {
    name: 'delete_theme_api_v2_surveys_themes__theme_id__delete',
    description: 'Delete Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "theme_id": {
                "type": "string",
                "description": "theme_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "theme_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_get',
    description: 'Get Trigger Configuration',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'update_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_patch',
    description: 'Update Trigger Configuration',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'generate_survey_api_v2_surveys_generate_post',
    description: 'Generate Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "user_prompt": {
                "type": "string",
                "description": "user_prompt parameter"
            },
            "style_guidelines": {
                "type": "string",
                "description": "style_guidelines parameter"
            },
            "target_audience": {
                "type": "string",
                "description": "target_audience parameter"
            },
            "survey_type": {
                "type": "string",
                "description": "survey_type parameter"
            }
        },
        "required": [
            "user_prompt"
        ]
    }
  },
  {
    name: 'auto_tag_survey_api_v2_surveys__survey_id__auto_tag_post',
    description: 'Auto Tag Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_survey_tags_api_v2_surveys__survey_id__tags_get',
    description: 'Get Survey Tags',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'update_survey_tags_api_v2_surveys__survey_id__tags_put',
    description: 'Update Survey Tags',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "tag_ids": {
                "type": "array",
                "description": "tag_ids parameter"
            }
        },
        "required": [
            "survey_id",
            "tag_ids"
        ]
    }
  },
  {
    name: 'auto_tag_organization_api_v2_surveys_auto_tag_org_post',
    description: 'Auto Tag Organization',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_public_survey_api_v2_surveys_public__survey_id__get',
    description: 'Get Public Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'initiate_phone_survey_api_v2_surveys__survey_id__call_post',
    description: 'Initiate Phone Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "phone_number": {
                "type": "string",
                "description": "Phone number to call in E.164 format"
            },
            "from_number": {
                "type": "string",
                "description": "Caller ID number to display"
            },
            "voice": {
                "type": "string",
                "description": "Voice to use for the call"
            },
            "language": {
                "type": "string",
                "description": "Language for the call"
            },
            "webhook_url": {
                "type": "string",
                "description": "Webhook URL for call events"
            },
            "metadata": {
                "type": "string",
                "description": "Additional metadata for the call"
            }
        },
        "required": [
            "survey_id",
            "phone_number"
        ]
    }
  },
  {
    name: 'handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_post',
    description: 'Handle Phone Survey Webhook',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'list_organization_responses_api_v2_organizations_responses_get',
    description: 'List Organization Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "search": {
                "type": "string",
                "description": "Search term for full-text search across all properties"
            },
            "search_type": {
                "type": "string",
                "description": "Search type: 'exact' or 'fuzzy'"
            },
            "sort_by": {
                "type": "string",
                "description": "Field to sort by: 'created_at', 'date', or any question field name (e.g., 'satisfaction_rating')"
            },
            "sort_order": {
                "type": "string",
                "description": "Sort order: 'asc' or 'desc'"
            }
        },
        "required": []
    }
  },
  {
    name: 'list_responses_api_v2_surveys__survey_id__responses_get',
    description: 'List Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "search": {
                "type": "string",
                "description": "Search term for full-text search across all properties"
            },
            "search_type": {
                "type": "string",
                "description": "Search type: 'exact' or 'fuzzy'"
            },
            "sort_by": {
                "type": "string",
                "description": "Field to sort by: 'created_at', 'date', or any question field name (e.g., 'satisfaction_rating')"
            },
            "sort_order": {
                "type": "string",
                "description": "Sort order: 'asc' or 'desc'"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'submit_response_api_v2_surveys__survey_id__responses_post',
    description: 'Submit Response',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'sync_responses_api_v2_surveys__survey_id__responses_sync_post',
    description: 'Sync Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_get',
    description: 'Get Aggregated Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "Property filters in format 'properties.field=value' or 'properties.*=value' for wildcard search"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_response_properties_api_v2_surveys__survey_id__responses_properties_get',
    description: 'Get Response Properties',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_response_api_v2_surveys__survey_id__responses__response_id__get',
    description: 'Get Response',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "response_id": {
                "type": "string",
                "description": "response_id parameter"
            }
        },
        "required": [
            "survey_id",
            "response_id"
        ]
    }
  },
  {
    name: 'update_response_api_v2_surveys__survey_id__responses__response_id__put',
    description: 'Update Response',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "response_id": {
                "type": "string",
                "description": "response_id parameter"
            }
        },
        "required": [
            "survey_id",
            "response_id"
        ]
    }
  },
  {
    name: 'delete_response_api_v2_surveys__survey_id__responses__response_id__delete',
    description: 'Delete Response',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "response_id": {
                "type": "string",
                "description": "response_id parameter"
            }
        },
        "required": [
            "survey_id",
            "response_id"
        ]
    }
  },
  {
    name: 'generate_mock_responses_api_v2_surveys__survey_id__responses_mock_post',
    description: 'Generate Mock Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "num_responses": {
                "type": "integer",
                "description": "num_responses parameter"
            }
        },
        "required": [
            "survey_id",
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_public_widget_responses_api_v2_surveys__survey_id__public_responses_get',
    description: 'Get Public Widget Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_ids": {
                "type": "array",
                "description": "List of question IDs to include in the response"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": [
            "survey_id",
            "question_ids"
        ]
    }
  },
  {
    name: 'get_visual_responses_api_v2_surveys__survey_id__visual_responses_get',
    description: 'Get Visual Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "query": {
                "type": "string",
                "description": "Search term for Pexels images"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "orientation": {
                "type": "string",
                "description": "Optional image orientation (landscape, portrait, square)"
            },
            "size": {
                "type": "string",
                "description": "Optional image size (large, medium, small)"
            },
            "use_videos": {
                "type": "boolean",
                "description": "Whether to use videos for responses with feedback > 10 words"
            },
            "video_max_duration": {
                "type": "string",
                "description": "Maximum duration of videos in seconds"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'list_notes_api_v2_responses__response_id__notes_get',
    description: 'List Notes',
    inputSchema: {
        "type": "object",
        "properties": {
            "response_id": {
                "type": "integer",
                "description": "response_id parameter"
            }
        },
        "required": [
            "response_id"
        ]
    }
  },
  {
    name: 'create_note_api_v2_responses__response_id__notes_post',
    description: 'Create Note',
    inputSchema: {
        "type": "object",
        "properties": {
            "response_id": {
                "type": "integer",
                "description": "response_id parameter"
            },
            "note": {
                "type": "string",
                "description": "Note content, max 500 characters"
            }
        },
        "required": [
            "response_id",
            "note"
        ]
    }
  },
  {
    name: 'update_note_api_v2_responses__response_id__notes__note_id__put',
    description: 'Update Note',
    inputSchema: {
        "type": "object",
        "properties": {
            "response_id": {
                "type": "integer",
                "description": "response_id parameter"
            },
            "note_id": {
                "type": "integer",
                "description": "note_id parameter"
            },
            "note": {
                "type": "string",
                "description": "Note content, max 500 characters"
            }
        },
        "required": [
            "response_id",
            "note_id",
            "note"
        ]
    }
  },
  {
    name: 'delete_note_api_v2_responses__response_id__notes__note_id__delete',
    description: 'Delete Note',
    inputSchema: {
        "type": "object",
        "properties": {
            "response_id": {
                "type": "integer",
                "description": "response_id parameter"
            },
            "note_id": {
                "type": "integer",
                "description": "note_id parameter"
            }
        },
        "required": [
            "response_id",
            "note_id"
        ]
    }
  },
  {
    name: 'get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_get',
    description: 'Get Response Ids With Notes',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'generate_graphs_api_v2_surveys__survey_id__graphs_generate_post',
    description: 'Generate Graphs',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "questions": {
                "type": "array",
                "description": "questions parameter"
            },
            "graph_type": {
                "type": "string",
                "description": "graph_type parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            }
        },
        "required": [
            "survey_id",
            "questions"
        ]
    }
  },
  {
    name: 'generate_insights_api_v2_surveys__survey_id__insights_post',
    description: 'Generate Insights',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "questions": {
                "type": "array",
                "description": "questions parameter"
            },
            "insight_type": {
                "type": "string",
                "description": "insight_type parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            }
        },
        "required": [
            "survey_id",
            "questions",
            "insight_type"
        ]
    }
  },
  {
    name: 'get_analytics_summary_api_v2_surveys__survey_id__summary_get',
    description: 'Get Analytics Summary',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_post',
    description: 'Update Tag Cloud',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "question_name parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "result_id": {
                "type": "integer",
                "description": "result_id parameter"
            },
            "literal_word_counts": {
                "type": "string",
                "description": "literal_word_counts parameter"
            },
            "semantic_word_counts": {
                "type": "string",
                "description": "semantic_word_counts parameter"
            }
        },
        "required": [
            "survey_id",
            "question_name",
            "org_id",
            "result_id"
        ]
    }
  },
  {
    name: 'export_analytics_api_v2_surveys__survey_id__export_post',
    description: 'Export Analytics',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "format": {
                "type": "string",
                "description": "format parameter"
            },
            "questions": {
                "type": "string",
                "description": "questions parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            },
            "webhook_url": {
                "type": "string",
                "description": "webhook_url parameter"
            },
            "emails": {
                "type": "string",
                "description": "emails parameter"
            }
        },
        "required": [
            "survey_id",
            "format"
        ]
    }
  },
  {
    name: 'get_export_status_api_v2_surveys__survey_id__export__request_id__get',
    description: 'Get Export Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "request_id": {
                "type": "string",
                "description": "request_id parameter"
            }
        },
        "required": [
            "survey_id",
            "request_id"
        ]
    }
  },
  {
    name: 'create_export_api_v2_exports_surveys__survey_id__export_post',
    description: 'Create Export',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "format": {
                "type": "string",
                "description": "format parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            },
            "webhook_url": {
                "type": "string",
                "description": "webhook_url parameter"
            },
            "emails": {
                "type": "string",
                "description": "emails parameter"
            },
            "language": {
                "type": "string",
                "description": "language parameter"
            },
            "search": {
                "type": "string",
                "description": "search parameter"
            },
            "search_type": {
                "type": "string",
                "description": "search_type parameter"
            }
        },
        "required": [
            "survey_id",
            "format"
        ]
    }
  },
  {
    name: 'get_export_status_api_v2_exports_surveys__survey_id__export__request_id__get',
    description: 'Get Export Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "request_id": {
                "type": "string",
                "description": "request_id parameter"
            }
        },
        "required": [
            "survey_id",
            "request_id"
        ]
    }
  },
  {
    name: 'cancel_export_api_v2_exports_surveys__survey_id__export__request_id__delete',
    description: 'Cancel Export',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "request_id": {
                "type": "string",
                "description": "request_id parameter"
            }
        },
        "required": [
            "survey_id",
            "request_id"
        ]
    }
  },
  {
    name: 'download_csv_api_v2_exports_surveys__survey_id__download_csv_post',
    description: 'Download Csv',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "format": {
                "type": "string",
                "description": "format parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            },
            "webhook_url": {
                "type": "string",
                "description": "webhook_url parameter"
            },
            "emails": {
                "type": "string",
                "description": "emails parameter"
            },
            "language": {
                "type": "string",
                "description": "language parameter"
            },
            "search": {
                "type": "string",
                "description": "search parameter"
            },
            "search_type": {
                "type": "string",
                "description": "search_type parameter"
            }
        },
        "required": [
            "survey_id",
            "format"
        ]
    }
  },
  {
    name: 'cleanup_export_files_api_v2_exports_exports_cleanup_post',
    description: 'Cleanup Export Files',
    inputSchema: {
        "type": "object",
        "properties": {
            "max_age_hours": {
                "type": "integer",
                "description": "max_age_hours parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'chat_with_surveys_api_v2_surveys_chat_post',
    description: 'Chat With Surveys',
    inputSchema: {
        "type": "object",
        "properties": {
            "user_id": {
                "type": "string",
                "description": "ID of the user starting the chat"
            },
            "survey_id": {
                "type": "string",
                "description": "ID of the survey to analyze"
            },
            "initial_message": {
                "type": "string",
                "description": "Initial message to start the chat"
            },
            "preferences": {
                "type": "string",
                "description": "User preferences for the chat session"
            }
        },
        "required": [
            "user_id"
        ]
    }
  },
  {
    name: 'get_groups_api_v2_group__get',
    description: 'Get Groups',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "Page number"
            },
            "page_size": {
                "type": "integer",
                "description": "Results per page"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_group_api_v2_group__post',
    description: 'Create Group',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "user_roles": {
                "type": "array",
                "description": "user_roles parameter"
            },
            "survey_ids": {
                "type": "array",
                "description": "survey_ids parameter"
            },
            "created_by": {
                "type": "string",
                "description": "created_by parameter"
            },
            "user_id": {
                "type": "string",
                "description": "user_id parameter"
            }
        },
        "required": [
            "name",
            "org_id"
        ]
    }
  },
  {
    name: 'update_group_api_v2_group__group_id__put',
    description: 'Update Group',
    inputSchema: {
        "type": "object",
        "properties": {
            "group_id": {
                "type": "integer",
                "description": "group_id parameter"
            },
            "group_name": {
                "type": "string",
                "description": "group_name parameter"
            },
            "survey_ids": {
                "type": "string",
                "description": "survey_ids parameter"
            },
            "user_roles": {
                "type": "string",
                "description": "user_roles parameter"
            }
        },
        "required": [
            "group_id"
        ]
    }
  },
  {
    name: 'delete_group_api_v2_group__group_id__delete',
    description: 'Delete Group',
    inputSchema: {
        "type": "object",
        "properties": {
            "group_id": {
                "type": "integer",
                "description": "group_id parameter"
            }
        },
        "required": [
            "group_id"
        ]
    }
  },
  {
    name: 'add_users_to_group_api_v2_group__group_id__users_post',
    description: 'Add Users To Group',
    inputSchema: {
        "type": "object",
        "properties": {
            "group_id": {
                "type": "string",
                "description": "group_id parameter"
            },
            "user_ids": {
                "type": "array",
                "description": "user_ids parameter"
            },
            "role": {
                "type": "string",
                "description": "role parameter"
            }
        },
        "required": [
            "group_id",
            "user_ids",
            "role"
        ]
    }
  },
  {
    name: 'get_group_surveys_api_v2_group__group_id__surveys_get',
    description: 'Get Group Surveys',
    inputSchema: {
        "type": "object",
        "properties": {
            "group_id": {
                "type": "string",
                "description": "group_id parameter"
            },
            "user_role": {
                "type": "string",
                "description": "Filter surveys by user role"
            }
        },
        "required": [
            "group_id"
        ]
    }
  },
  {
    name: 'assign_surveys_to_group_api_v2_group__group_id__surveys_post',
    description: 'Assign Surveys To Group',
    inputSchema: {
        "type": "object",
        "properties": {
            "group_id": {
                "type": "string",
                "description": "group_id parameter"
            },
            "survey_ids": {
                "type": "array",
                "description": "survey_ids parameter"
            }
        },
        "required": [
            "group_id",
            "survey_ids"
        ]
    }
  },
  {
    name: 'get_group_details_api_v2_group_details__get',
    description: 'Get Group Details',
    inputSchema: {
        "type": "object",
        "properties": {
            "group_id": {
                "type": "string",
                "description": "Group ID"
            },
            "org_id": {
                "type": "string",
                "description": "Organization ID"
            },
            "user_id": {
                "type": "string",
                "description": "User ID"
            },
            "user_roles": {
                "type": "string",
                "description": "Filter by user roles"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_theme_api_v2_themes__theme_id__get',
    description: 'Get Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "theme_id": {
                "type": "string",
                "description": "theme_id parameter"
            }
        },
        "required": [
            "theme_id"
        ]
    }
  },
  {
    name: 'update_theme_api_v2_themes__theme_id__put',
    description: 'Update Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "theme_id": {
                "type": "string",
                "description": "theme_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "theme_json": {
                "type": "object",
                "description": "theme_json parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "theme_id",
            "name",
            "theme_json",
            "org_id"
        ]
    }
  },
  {
    name: 'delete_theme_api_v2_themes__theme_id__delete',
    description: 'Delete Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "theme_id": {
                "type": "string",
                "description": "theme_id parameter"
            }
        },
        "required": [
            "theme_id"
        ]
    }
  },
  {
    name: 'get_themes_api_v2_themes__get',
    description: 'Get Themes',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_theme_api_v2_themes__post',
    description: 'Create Theme',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "theme_json": {
                "type": "object",
                "description": "theme_json parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "name",
            "theme_json",
            "org_id"
        ]
    }
  },
  {
    name: 'get_dictionaries_api_v2_dictionaries__get',
    description: 'Get Dictionaries',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_survey_cx_api_v2_surveys__survey_id__cx_get',
    description: 'Get Survey Cx',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "question_name parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "date_grouping": {
                "type": "string",
                "description": "date_grouping parameter"
            },
            "page_size": {
                "type": "string",
                "description": "page_size parameter"
            },
            "filters": {
                "type": "string",
                "description": "Property filters in format 'properties.field=value' or 'properties.*=value' for wildcard search"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'suggest_report_name_api_v2_business_insights_name_suggestion_post',
    description: 'Suggest Report Name',
    inputSchema: {
        "type": "object",
        "properties": {
            "journey": {
                "type": "string",
                "description": "The customer journey name"
            },
            "touchpoints": {
                "type": "array",
                "description": "List of touchpoints in the journey"
            },
            "insight_type": {
                "type": "string",
                "description": "Type of insight to be presented in the report"
            },
            "target_audience": {
                "type": "array",
                "description": "List of target audiences for the report"
            }
        },
        "required": [
            "journey",
            "touchpoints",
            "insight_type",
            "target_audience"
        ]
    }
  },
  {
    name: 'update_html_with_instructions_api_v2_html_update_post',
    description: 'Update Html With Instructions',
    inputSchema: {
        "type": "object",
        "properties": {
            "html_code": {
                "type": "string",
                "description": "The original HTML code to be modified"
            },
            "instructions": {
                "type": "string",
                "description": "User's instructions for modifying the HTML"
            }
        },
        "required": [
            "html_code",
            "instructions"
        ]
    }
  },
  {
    name: 'list_templates_api_v2_templates__get',
    description: 'List Templates',
    inputSchema: {
        "type": "object",
        "properties": {
            "access_type": {
                "type": "string",
                "description": "Template access type (public, premium, private)"
            },
            "category": {
                "type": "string",
                "description": "Template category"
            },
            "industry": {
                "type": "string",
                "description": "Industry the template is designed for"
            },
            "customer_journey": {
                "type": "string",
                "description": "Customer journey stage"
            },
            "touchpoint": {
                "type": "string",
                "description": "Customer touchpoint"
            },
            "is_popular": {
                "type": "string",
                "description": "Filter by popular templates"
            },
            "page": {
                "type": "integer",
                "description": "Page number"
            },
            "page_size": {
                "type": "integer",
                "description": "Results per page"
            },
            "search": {
                "type": "string",
                "description": "Search term for name or description"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_template_api_v2_templates__post',
    description: 'Create Template',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "survey_json": {
                "type": "object",
                "description": "survey_json parameter"
            },
            "questions": {
                "type": "array",
                "description": "questions parameter"
            },
            "access_type": {
                "type": "string",
                "description": "access_type parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "icon": {
                "type": "string",
                "description": "icon parameter"
            },
            "category": {
                "type": "string",
                "description": "category parameter"
            },
            "is_popular": {
                "type": "boolean",
                "description": "is_popular parameter"
            },
            "industry": {
                "type": "string",
                "description": "industry parameter"
            },
            "customer_journey": {
                "type": "string",
                "description": "customer_journey parameter"
            },
            "touchpoint": {
                "type": "string",
                "description": "touchpoint parameter"
            }
        },
        "required": [
            "name",
            "survey_json"
        ]
    }
  },
  {
    name: 'get_template_api_v2_templates__template_id__get',
    description: 'Get Template',
    inputSchema: {
        "type": "object",
        "properties": {
            "template_id": {
                "type": "string",
                "description": "template_id parameter"
            }
        },
        "required": [
            "template_id"
        ]
    }
  },
  {
    name: 'update_template_api_v2_templates__template_id__put',
    description: 'Update Template',
    inputSchema: {
        "type": "object",
        "properties": {
            "template_id": {
                "type": "string",
                "description": "template_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "survey_json": {
                "type": "string",
                "description": "survey_json parameter"
            },
            "questions": {
                "type": "string",
                "description": "questions parameter"
            },
            "access_type": {
                "type": "string",
                "description": "access_type parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "icon": {
                "type": "string",
                "description": "icon parameter"
            },
            "category": {
                "type": "string",
                "description": "category parameter"
            },
            "is_popular": {
                "type": "string",
                "description": "is_popular parameter"
            },
            "industry": {
                "type": "string",
                "description": "industry parameter"
            },
            "customer_journey": {
                "type": "string",
                "description": "customer_journey parameter"
            },
            "touchpoint": {
                "type": "string",
                "description": "touchpoint parameter"
            },
            "updator_id": {
                "type": "string",
                "description": "updator_id parameter"
            }
        },
        "required": [
            "template_id"
        ]
    }
  },
  {
    name: 'delete_template_api_v2_templates__template_id__delete',
    description: 'Delete Template',
    inputSchema: {
        "type": "object",
        "properties": {
            "template_id": {
                "type": "string",
                "description": "template_id parameter"
            }
        },
        "required": [
            "template_id"
        ]
    }
  },
  {
    name: 'autocomplete_api_v2_autocomplete__get',
    description: 'Autocomplete',
    inputSchema: {
        "type": "object",
        "properties": {
            "search": {
                "type": "string",
                "description": "Free text search to search on survey title"
            },
            "limit": {
                "type": "integer",
                "description": "Limit the number of results"
            }
        },
        "required": [
            "search"
        ]
    }
  },
  {
    name: 'get_workflows_endpoint_api_v2_workflows__get',
    description: 'Get Workflows Endpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "organization_id": {
                "type": "string",
                "description": "organization_id parameter"
            }
        },
        "required": [
            "organization_id"
        ]
    }
  },
  {
    name: 'create_workflow_endpoint_api_v2_workflows__post',
    description: 'Create Workflow Endpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "description": "id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "surveyId": {
                "type": "string",
                "description": "surveyId parameter"
            },
            "emails": {
                "type": "array",
                "description": "emails parameter"
            },
            "alertEnabled": {
                "type": "boolean",
                "description": "alertEnabled parameter"
            },
            "organizationId": {
                "type": "string",
                "description": "organizationId parameter"
            },
            "emailBody": {
                "type": "string",
                "description": "emailBody parameter"
            },
            "filterByQuestion": {
                "type": "string",
                "description": "filterByQuestion parameter"
            },
            "channel": {
                "type": "string",
                "description": "channel parameter"
            },
            "webhookUrl": {
                "type": "string",
                "description": "webhookUrl parameter"
            },
            "webhookPayloadFormat": {
                "type": "string",
                "description": "webhookPayloadFormat parameter"
            },
            "webhookIncludeMetadata": {
                "type": "boolean",
                "description": "webhookIncludeMetadata parameter"
            },
            "webhookCustomHeaders": {
                "type": "string",
                "description": "webhookCustomHeaders parameter"
            },
            "webhookCustomPayload": {
                "type": "string",
                "description": "webhookCustomPayload parameter"
            },
            "webhookSecretKey": {
                "type": "string",
                "description": "webhookSecretKey parameter"
            },
            "webhookTimeoutSeconds": {
                "type": "integer",
                "description": "webhookTimeoutSeconds parameter"
            },
            "webhookRetryCount": {
                "type": "integer",
                "description": "webhookRetryCount parameter"
            },
            "zendeskApiKey": {
                "type": "string",
                "description": "zendeskApiKey parameter"
            },
            "zendeskSubdomain": {
                "type": "string",
                "description": "zendeskSubdomain parameter"
            },
            "zendeskEmail": {
                "type": "string",
                "description": "zendeskEmail parameter"
            },
            "emarsysApiKey": {
                "type": "string",
                "description": "emarsysApiKey parameter"
            },
            "emarsysSecretKey": {
                "type": "string",
                "description": "emarsysSecretKey parameter"
            },
            "emarsysActionType": {
                "type": "string",
                "description": "emarsysActionType parameter"
            },
            "emarsysEventId": {
                "type": "string",
                "description": "emarsysEventId parameter"
            },
            "emarsysSegmentId": {
                "type": "string",
                "description": "emarsysSegmentId parameter"
            },
            "emarsysFieldMappings": {
                "type": "string",
                "description": "emarsysFieldMappings parameter"
            },
            "emarsysIdentifierField": {
                "type": "string",
                "description": "emarsysIdentifierField parameter"
            },
            "salesforceClientId": {
                "type": "string",
                "description": "salesforceClientId parameter"
            },
            "salesforceClientSecret": {
                "type": "string",
                "description": "salesforceClientSecret parameter"
            },
            "salesforceAccessToken": {
                "type": "string",
                "description": "salesforceAccessToken parameter"
            },
            "salesforceRefreshToken": {
                "type": "string",
                "description": "salesforceRefreshToken parameter"
            },
            "salesforceInstanceUrl": {
                "type": "string",
                "description": "salesforceInstanceUrl parameter"
            },
            "salesforceConnectedOrgId": {
                "type": "string",
                "description": "salesforceConnectedOrgId parameter"
            },
            "salesforceFieldMappings": {
                "type": "string",
                "description": "salesforceFieldMappings parameter"
            }
        },
        "required": [
            "name",
            "surveyId",
            "emails",
            "alertEnabled",
            "organizationId"
        ]
    }
  },
  {
    name: 'update_workflow_endpoint_api_v2_workflows__id__put',
    description: 'Update Workflow Endpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "description": "id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "surveyId": {
                "type": "string",
                "description": "surveyId parameter"
            },
            "emails": {
                "type": "array",
                "description": "emails parameter"
            },
            "alertEnabled": {
                "type": "boolean",
                "description": "alertEnabled parameter"
            },
            "organizationId": {
                "type": "string",
                "description": "organizationId parameter"
            },
            "emailBody": {
                "type": "string",
                "description": "emailBody parameter"
            },
            "filterByQuestion": {
                "type": "string",
                "description": "filterByQuestion parameter"
            },
            "channel": {
                "type": "string",
                "description": "channel parameter"
            },
            "webhookUrl": {
                "type": "string",
                "description": "webhookUrl parameter"
            },
            "webhookPayloadFormat": {
                "type": "string",
                "description": "webhookPayloadFormat parameter"
            },
            "webhookIncludeMetadata": {
                "type": "boolean",
                "description": "webhookIncludeMetadata parameter"
            },
            "webhookCustomHeaders": {
                "type": "string",
                "description": "webhookCustomHeaders parameter"
            },
            "webhookCustomPayload": {
                "type": "string",
                "description": "webhookCustomPayload parameter"
            },
            "webhookSecretKey": {
                "type": "string",
                "description": "webhookSecretKey parameter"
            },
            "webhookTimeoutSeconds": {
                "type": "integer",
                "description": "webhookTimeoutSeconds parameter"
            },
            "webhookRetryCount": {
                "type": "integer",
                "description": "webhookRetryCount parameter"
            },
            "zendeskApiKey": {
                "type": "string",
                "description": "zendeskApiKey parameter"
            },
            "zendeskSubdomain": {
                "type": "string",
                "description": "zendeskSubdomain parameter"
            },
            "zendeskEmail": {
                "type": "string",
                "description": "zendeskEmail parameter"
            },
            "emarsysApiKey": {
                "type": "string",
                "description": "emarsysApiKey parameter"
            },
            "emarsysSecretKey": {
                "type": "string",
                "description": "emarsysSecretKey parameter"
            },
            "emarsysActionType": {
                "type": "string",
                "description": "emarsysActionType parameter"
            },
            "emarsysEventId": {
                "type": "string",
                "description": "emarsysEventId parameter"
            },
            "emarsysSegmentId": {
                "type": "string",
                "description": "emarsysSegmentId parameter"
            },
            "emarsysFieldMappings": {
                "type": "string",
                "description": "emarsysFieldMappings parameter"
            },
            "emarsysIdentifierField": {
                "type": "string",
                "description": "emarsysIdentifierField parameter"
            },
            "salesforceClientId": {
                "type": "string",
                "description": "salesforceClientId parameter"
            },
            "salesforceClientSecret": {
                "type": "string",
                "description": "salesforceClientSecret parameter"
            },
            "salesforceAccessToken": {
                "type": "string",
                "description": "salesforceAccessToken parameter"
            },
            "salesforceRefreshToken": {
                "type": "string",
                "description": "salesforceRefreshToken parameter"
            },
            "salesforceInstanceUrl": {
                "type": "string",
                "description": "salesforceInstanceUrl parameter"
            },
            "salesforceConnectedOrgId": {
                "type": "string",
                "description": "salesforceConnectedOrgId parameter"
            },
            "salesforceFieldMappings": {
                "type": "string",
                "description": "salesforceFieldMappings parameter"
            }
        },
        "required": [
            "id",
            "name",
            "surveyId",
            "emails",
            "alertEnabled",
            "organizationId"
        ]
    }
  },
  {
    name: 'delete_workflow_endpoint_api_v2_workflows__id__delete',
    description: 'Delete Workflow Endpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "id": {
                "type": "string",
                "description": "id parameter"
            }
        },
        "required": [
            "id"
        ]
    }
  },
  {
    name: 'get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_get',
    description: 'Get Salesforce Auth Url',
    inputSchema: {
        "type": "object",
        "properties": {
            "client_id": {
                "type": "string",
                "description": "client_id parameter"
            },
            "state": {
                "type": "string",
                "description": "state parameter"
            }
        },
        "required": [
            "client_id"
        ]
    }
  },
  {
    name: 'exchange_salesforce_token_api_v2_workflows_salesforce_exchange_token_post',
    description: 'Exchange Salesforce Token',
    inputSchema: {
        "type": "object",
        "properties": {
            "code": {
                "type": "string",
                "description": "code parameter"
            },
            "code_verifier": {
                "type": "string",
                "description": "code_verifier parameter"
            },
            "client_id": {
                "type": "string",
                "description": "client_id parameter"
            },
            "client_secret": {
                "type": "string",
                "description": "client_secret parameter"
            }
        },
        "required": [
            "code",
            "code_verifier",
            "client_id",
            "client_secret"
        ]
    }
  },
  {
    name: 'refresh_salesforce_token_api_v2_workflows_salesforce_refresh_token_post',
    description: 'Refresh Salesforce Token',
    inputSchema: {
        "type": "object",
        "properties": {
            "refresh_token": {
                "type": "string",
                "description": "refresh_token parameter"
            },
            "client_id": {
                "type": "string",
                "description": "client_id parameter"
            },
            "client_secret": {
                "type": "string",
                "description": "client_secret parameter"
            }
        },
        "required": [
            "refresh_token",
            "client_id",
            "client_secret"
        ]
    }
  },
  {
    name: 'revoke_salesforce_token_api_v2_workflows_salesforce_revoke_token_post',
    description: 'Revoke Salesforce Token',
    inputSchema: {
        "type": "object",
        "properties": {
            "token": {
                "type": "string",
                "description": "token parameter"
            },
            "client_id": {
                "type": "string",
                "description": "client_id parameter"
            },
            "client_secret": {
                "type": "string",
                "description": "client_secret parameter"
            }
        },
        "required": [
            "token"
        ]
    }
  },
  {
    name: 'get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_get',
    description: 'Get Salesforce Case Fields',
    inputSchema: {
        "type": "object",
        "properties": {
            "access_token": {
                "type": "string",
                "description": "access_token parameter"
            },
            "instance_url": {
                "type": "string",
                "description": "instance_url parameter"
            }
        },
        "required": [
            "access_token",
            "instance_url"
        ]
    }
  },
  {
    name: 'test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_post',
    description: 'Test Salesforce Mapping',
    inputSchema: {
        "type": "object",
        "properties": {
            "workflow_data": {
                "type": "object",
                "description": "workflow_data parameter"
            },
            "sample_data": {
                "type": "object",
                "description": "sample_data parameter"
            }
        },
        "required": [
            "workflow_data",
            "sample_data"
        ]
    }
  },
  {
    name: 'validate_salesforce_connection_api_v2_workflows_salesforce_validate_connection_post',
    description: 'Validate Salesforce Connection',
    inputSchema: {
        "type": "object",
        "properties": {
            "access_token": {
                "type": "string",
                "description": "access_token parameter"
            },
            "instance_url": {
                "type": "string",
                "description": "instance_url parameter"
            }
        },
        "required": [
            "access_token",
            "instance_url"
        ]
    }
  },
  {
    name: 'test_emarsys_connection_api_v2_emarsys_test_connection_post',
    description: 'Test Emarsys Connection',
    inputSchema: {
        "type": "object",
        "properties": {
            "api_key": {
                "type": "string",
                "description": "api_key parameter"
            },
            "secret_key": {
                "type": "string",
                "description": "secret_key parameter"
            }
        },
        "required": [
            "api_key",
            "secret_key"
        ]
    }
  },
  {
    name: 'get_emarsys_fields_api_v2_emarsys_fields_post',
    description: 'Get Emarsys Fields',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "Survey ID to create dynamic fields for"
            },
            "api_key": {
                "type": "string",
                "description": "api_key parameter"
            },
            "secret_key": {
                "type": "string",
                "description": "secret_key parameter"
            }
        },
        "required": [
            "api_key",
            "secret_key"
        ]
    }
  },
  {
    name: 'create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__post',
    description: 'Create Dynamic Fields For Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "api_key": {
                "type": "string",
                "description": "api_key parameter"
            },
            "secret_key": {
                "type": "string",
                "description": "secret_key parameter"
            },
            "workflow_name": {
                "type": "string",
                "description": "workflow_name parameter"
            }
        },
        "required": [
            "survey_id",
            "api_key",
            "secret_key"
        ]
    }
  },
  {
    name: 'get_survey_questions_api_v2_emarsys_survey_questions__survey_id__get',
    description: 'Get Survey Questions',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_feeds_api_v2_feeds__get',
    description: 'Get Feeds',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "Filter by survey ID"
            },
            "page": {
                "type": "integer",
                "description": "Page number"
            },
            "page_size": {
                "type": "integer",
                "description": "Items per page"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_feed_api_v2_feeds__post',
    description: 'Create Feed',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "questions": {
                "type": "string",
                "description": "questions parameter"
            },
            "layout": {
                "type": "string",
                "description": "layout parameter"
            },
            "trend_period": {
                "type": "string",
                "description": "trend_period parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            }
        },
        "required": [
            "name",
            "survey_id"
        ]
    }
  },
  {
    name: 'get_feed_api_v2_feeds__feed_id__get',
    description: 'Get Feed',
    inputSchema: {
        "type": "object",
        "properties": {
            "feed_id": {
                "type": "integer",
                "description": "feed_id parameter"
            }
        },
        "required": [
            "feed_id"
        ]
    }
  },
  {
    name: 'update_feed_api_v2_feeds__feed_id__patch',
    description: 'Update Feed',
    inputSchema: {
        "type": "object",
        "properties": {
            "feed_id": {
                "type": "integer",
                "description": "feed_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "questions": {
                "type": "string",
                "description": "questions parameter"
            },
            "layout": {
                "type": "string",
                "description": "layout parameter"
            },
            "trend_period": {
                "type": "string",
                "description": "trend_period parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            }
        },
        "required": [
            "feed_id"
        ]
    }
  },
  {
    name: 'delete_feed_api_v2_feeds__feed_id__delete',
    description: 'Delete Feed',
    inputSchema: {
        "type": "object",
        "properties": {
            "feed_id": {
                "type": "integer",
                "description": "feed_id parameter"
            }
        },
        "required": [
            "feed_id"
        ]
    }
  },
  {
    name: 'get_feed_by_hash_api_v2_feeds_hash__share_link_hash__get',
    description: 'Get Feed By Hash',
    inputSchema: {
        "type": "object",
        "properties": {
            "share_link_hash": {
                "type": "string",
                "description": "share_link_hash parameter"
            }
        },
        "required": [
            "share_link_hash"
        ]
    }
  },
  {
    name: 'business_insights_api_v2_resonance_business_insights_post',
    description: 'Business Insights',
    inputSchema: {
        "type": "object",
        "properties": {
            "authorization": {
                "type": "string",
                "description": "authorization parameter"
            },
            "session_id": {
                "type": "string",
                "description": "session_id parameter"
            },
            "user_input": {
                "type": "string",
                "description": "user_input parameter"
            },
            "current_state": {
                "type": "object",
                "description": "Model representing the current state of the report creation process."
            }
        },
        "required": [
            "user_input"
        ]
    }
  },
  {
    name: 'get_public_feed_api_v2_public_share_feed__share_link_hash__get',
    description: 'Get Public Feed',
    inputSchema: {
        "type": "object",
        "properties": {
            "share_link_hash": {
                "type": "string",
                "description": "share_link_hash parameter"
            }
        },
        "required": [
            "share_link_hash"
        ]
    }
  },
  {
    name: 'get_widget_data_api_v2_public_widget__embed_token__get',
    description: 'Get Widget Data',
    inputSchema: {
        "type": "object",
        "properties": {
            "embed_token": {
                "type": "string",
                "description": "embed_token parameter"
            }
        },
        "required": [
            "embed_token"
        ]
    }
  },
  {
    name: 'track_survey_view_api_v2_public_surveys_track_view_post',
    description: 'Track Survey View',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "distribution_type": {
                "type": "string",
                "description": "distribution_type parameter"
            },
            "user_hash": {
                "type": "string",
                "description": "user_hash parameter"
            },
            "session_id": {
                "type": "string",
                "description": "session_id parameter"
            }
        },
        "required": [
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_get',
    description: 'Get Survey View Stats',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_company_data_api_v2_company_get',
    description: 'Get company data',
    inputSchema: {
        "type": "object",
        "properties": {
            "google_place_id": {
                "type": "string",
                "description": "google_place_id parameter"
            },
            "trustpilot_business_unit": {
                "type": "string",
                "description": "trustpilot_business_unit parameter"
            },
            "max_reviews": {
                "type": "integer",
                "description": "max_reviews parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'list_reports_api_v2_reports__get',
    description: 'List Reports',
    inputSchema: {
        "type": "object",
        "properties": {
            "page": {
                "type": "integer",
                "description": "Page number"
            },
            "per_page": {
                "type": "integer",
                "description": "Items per page"
            },
            "status": {
                "type": "string",
                "description": "Filter by status (DRAFT, ACTIVE, INACTIVE)"
            },
            "is_active": {
                "type": "string",
                "description": "Filter by active state"
            },
            "survey_id": {
                "type": "string",
                "description": "Filter by survey ID"
            },
            "group_id": {
                "type": "string",
                "description": "Filter by group ID"
            },
            "search": {
                "type": "string",
                "description": "Search in name and description"
            },
            "filters": {
                "type": "string",
                "description": "Filter by generic filters (JSON format)"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_report_api_v2_reports__post',
    description: 'Create Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Report name"
            },
            "description": {
                "type": "string",
                "description": "Report description"
            },
            "language": {
                "type": "string",
                "description": "Supported report languages."
            },
            "survey_id": {
                "type": "string",
                "description": "Survey ID to report on"
            },
            "group_id": {
                "type": "string",
                "description": "User group ID to report on"
            },
            "selected_questions": {
                "type": "array",
                "description": "Selected questions to include in report"
            },
            "filters": {
                "type": "string",
                "description": "Generic filters for response filtering. Supports property filters, topic filters, and sentiment filters. Can be a dict or string array."
            },
            "time_range": {
                "type": "string",
                "description": "Predefined time range options."
            },
            "time_aggregation": {
                "type": "string",
                "description": "Time aggregation options."
            },
            "custom_start_date": {
                "type": "string",
                "description": "Custom range start"
            },
            "custom_end_date": {
                "type": "string",
                "description": "Custom range end"
            },
            "recipient_emails": {
                "type": "string",
                "description": "Email recipients (required when status=ACTIVE)"
            },
            "schedule_config": {
                "type": "object",
                "description": "Schedule configuration for report execution."
            },
            "status": {
                "type": "string",
                "description": "Report status options."
            }
        },
        "required": [
            "name",
            "time_range",
            "schedule_config"
        ]
    }
  },
  {
    name: 'get_scheduler_status_api_v2_reports_scheduler_status_get',
    description: 'Get Scheduler Status',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_get',
    description: 'Get Upcoming Report Runs',
    inputSchema: {
        "type": "object",
        "properties": {
            "hours": {
                "type": "integer",
                "description": "Hours to look ahead (max 1 week)"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_scheduled_reports_api_v2_reports_scheduled_get',
    description: 'Get Scheduled Reports',
    inputSchema: {
        "type": "object",
        "properties": {
            "next_hours": {
                "type": "integer",
                "description": "Look ahead hours"
            }
        },
        "required": []
    }
  },
  {
    name: 'health_check_api_v2_reports_health_get',
    description: 'Health Check',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_report_api_v2_reports__report_id__get',
    description: 'Get Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'update_report_api_v2_reports__report_id__put',
    description: 'Update Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "language": {
                "type": "string",
                "description": "language parameter"
            },
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "group_id": {
                "type": "string",
                "description": "group_id parameter"
            },
            "selected_questions": {
                "type": "string",
                "description": "selected_questions parameter"
            },
            "filters": {
                "type": "string",
                "description": "filters parameter"
            },
            "time_range": {
                "type": "string",
                "description": "time_range parameter"
            },
            "time_aggregation": {
                "type": "string",
                "description": "time_aggregation parameter"
            },
            "custom_start_date": {
                "type": "string",
                "description": "custom_start_date parameter"
            },
            "custom_end_date": {
                "type": "string",
                "description": "custom_end_date parameter"
            },
            "recipient_emails": {
                "type": "string",
                "description": "recipient_emails parameter"
            },
            "schedule_config": {
                "type": "string",
                "description": "schedule_config parameter"
            },
            "is_active": {
                "type": "string",
                "description": "is_active parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'delete_report_api_v2_reports__report_id__delete',
    description: 'Delete Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'execute_report_api_v2_reports__report_id__execute_post',
    description: 'Execute Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "test_mode": {
                "type": "boolean",
                "description": "Run in test mode"
            },
            "test_email": {
                "type": "string",
                "description": "Override recipient email for testing"
            },
            "shared_link_expires_days": {
                "type": "integer",
                "description": "Days until shared link expires"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'preview_report_api_v2_reports__report_id__preview_post',
    description: 'Preview Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "limit": {
                "type": "integer",
                "description": "Number of data rows to preview"
            },
            "include_charts": {
                "type": "boolean",
                "description": "Include chart data in preview"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'list_report_executions_api_v2_reports__report_id__executions_get',
    description: 'List Report Executions',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "limit": {
                "type": "integer",
                "description": "Number of executions to return"
            },
            "offset": {
                "type": "integer",
                "description": "Number of executions to skip"
            },
            "status": {
                "type": "string",
                "description": "Filter by execution status"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'get_report_statistics_api_v2_reports__report_id__statistics_get',
    description: 'Get Report Statistics',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'force_execute_report_api_v2_reports__report_id__execute_force_post',
    description: 'Force Execute Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "reason": {
                "type": "string",
                "description": "reason parameter"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'export_report_api_v2_reports__report_id__export_post',
    description: 'Export Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "format": {
                "type": "string",
                "description": "Export format (pdf, csv, excel)"
            },
            "include_charts": {
                "type": "boolean",
                "description": "Include charts in export"
            },
            "date_range_override": {
                "type": "string",
                "description": "Override configured date range"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'duplicate_report_api_v2_reports__report_id__duplicate_post',
    description: 'Duplicate Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            },
            "new_name": {
                "type": "string",
                "description": "Name for the duplicated report"
            }
        },
        "required": [
            "report_id",
            "new_name"
        ]
    }
  },
  {
    name: 'toggle_report_active_status_api_v2_reports__report_id__toggle_active_patch',
    description: 'Toggle Report Active Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "report_id parameter"
            }
        },
        "required": [
            "report_id"
        ]
    }
  },
  {
    name: 'test_send_report_api_v2_reports_test_send_post',
    description: 'Test Send Report',
    inputSchema: {
        "type": "object",
        "properties": {
            "report_id": {
                "type": "string",
                "description": "Existing report ID to send as test"
            },
            "test_email": {
                "type": "string",
                "description": "Email address to send test report to"
            },
            "shared_link_expires_days": {
                "type": "integer",
                "description": "Days until shared link expires"
            }
        },
        "required": [
            "report_id",
            "test_email"
        ]
    }
  },
  {
    name: 'batch_delete_reports_api_v2_reports_batch_delete_post',
    description: 'Batch Delete Reports',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__get',
    description: 'Get Shared Snapshot Info',
    inputSchema: {
        "type": "object",
        "properties": {
            "share_link_hash": {
                "type": "string",
                "description": "share_link_hash parameter"
            }
        },
        "required": [
            "share_link_hash"
        ]
    }
  },
  {
    name: 'get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_get',
    description: 'Get Shared Snapshot Data',
    inputSchema: {
        "type": "object",
        "properties": {
            "share_link_hash": {
                "type": "string",
                "description": "share_link_hash parameter"
            },
            "format": {
                "type": "string",
                "description": "format parameter"
            }
        },
        "required": [
            "share_link_hash"
        ]
    }
  },
  {
    name: 'get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_get',
    description: 'Get Shared Snapshot Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "share_link_hash": {
                "type": "string",
                "description": "share_link_hash parameter"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": [
            "share_link_hash"
        ]
    }
  },
  {
    name: 'cleanup_expired_shared_snapshots_api_v2_reports_shared_expired_delete',
    description: 'Cleanup Expired Shared Snapshots',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'connect_gominga_api_v2_integrations_gominga_connect_post',
    description: 'Connect Gominga',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_auth_url_api_v2_integrations_gominga_auth_get',
    description: 'Get Auth Url',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'handle_callback_api_v2_integrations_gominga_callback_get',
    description: 'Handle Callback',
    inputSchema: {
        "type": "object",
        "properties": {
            "code": {
                "type": "string",
                "description": "code parameter"
            },
            "state": {
                "type": "string",
                "description": "state parameter"
            }
        },
        "required": [
            "code",
            "state"
        ]
    }
  },
  {
    name: 'sync_reviews_api_v2_integrations_gominga_sync_post',
    description: 'Sync Reviews',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_sync_status_api_v2_integrations_gominga_sync_status_get',
    description: 'Get Sync Status',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_reviews_api_v2_integrations_gominga_reviews_get',
    description: 'Get Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "review_type": {
                "type": "string",
                "description": "review_type parameter"
            },
            "platform": {
                "type": "string",
                "description": "platform parameter"
            },
            "rating": {
                "type": "string",
                "description": "rating parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            },
            "include_count": {
                "type": "boolean",
                "description": "Include total count (slower)"
            }
        },
        "required": []
    }
  },
  {
    name: 'reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_post',
    description: 'Reply To Review',
    inputSchema: {
        "type": "object",
        "properties": {
            "review_id": {
                "type": "string",
                "description": "review_id parameter"
            },
            "reply_text": {
                "type": "string",
                "description": "reply_text parameter"
            }
        },
        "required": [
            "review_id",
            "reply_text"
        ]
    }
  },
  {
    name: 'disconnect_gominga_api_v2_integrations_gominga_disconnect_delete',
    description: 'Disconnect Gominga',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_mock_reviews_api_v2_integrations_gominga_reviews_mock_get',
    description: 'Get Mock Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "review_type": {
                "type": "string",
                "description": "review_type parameter"
            },
            "platform": {
                "type": "string",
                "description": "platform parameter"
            },
            "rating": {
                "type": "string",
                "description": "rating parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_surveys_with_scores_api_v2_surveys_with_scores_get',
    description: 'Get Surveys With Scores',
    inputSchema: {
        "type": "object",
        "properties": {
            "score_type": {
                "type": "string",
                "description": "Filter by score type (nps, csat, ces)"
            },
            "min_responses": {
                "type": "integer",
                "description": "Minimum number of responses"
            },
            "days_back": {
                "type": "string",
                "description": "Include only responses from last N days"
            },
            "company_id": {
                "type": "string",
                "description": "Filter by company ID"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_survey_score_details_api_v2_surveys__survey_id__score_details_get',
    description: 'Get Survey Score Details',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "Get details for specific question"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_widget_score_api_v2_widget_surveys__survey_id__score_get',
    description: 'Get Widget Score',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "Question name to get score for"
            }
        },
        "required": [
            "survey_id",
            "question_name"
        ]
    }
  },
  {
    name: 'get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_get',
    description: 'Get Sentiment Analytics',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "date_range": {
                "type": "string",
                "description": "date_range parameter"
            },
            "grouping": {
                "type": "string",
                "description": "Date grouping: day, week, month, quarter, year"
            },
            "topic_ids": {
                "type": "string",
                "description": "Filter by specific topic IDs"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_used_topics_api_v2_surveys__survey_id__topics_used_get',
    description: 'Get Used Topics',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "date_range": {
                "type": "string",
                "description": "Predefined date range (e.g., 'last_7_days', 'last_30_days')"
            },
            "start_date": {
                "type": "string",
                "description": "Start date in ISO format"
            },
            "end_date": {
                "type": "string",
                "description": "End date in ISO format"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'list_journeys_api_v2_journeys_get',
    description: 'List Journeys',
    inputSchema: {
        "type": "object",
        "properties": {
            "status": {
                "type": "string",
                "description": "Filter by status (draft, active, archived)"
            },
            "journey_type": {
                "type": "string",
                "description": "Filter by journey type"
            },
            "search": {
                "type": "string",
                "description": "Search by name or description"
            },
            "page": {
                "type": "integer",
                "description": "Page number"
            },
            "page_size": {
                "type": "integer",
                "description": "Items per page"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_journey_api_v2_journeys_post',
    description: 'Create Journey',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "Name of the journey"
            },
            "description": {
                "type": "string",
                "description": "Description of the journey"
            },
            "journey_type": {
                "type": "string",
                "description": "Types of customer journeys."
            },
            "stages": {
                "type": "array",
                "description": "Stages to create with the journey"
            }
        },
        "required": [
            "name"
        ]
    }
  },
  {
    name: 'list_templates_api_v2_journeys_templates_get',
    description: 'List Templates',
    inputSchema: {
        "type": "object",
        "properties": {
            "industry": {
                "type": "string",
                "description": "Filter by industry"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_template_api_v2_journeys_templates__template_id__get',
    description: 'Get Template',
    inputSchema: {
        "type": "object",
        "properties": {
            "template_id": {
                "type": "string",
                "description": "template_id parameter"
            }
        },
        "required": [
            "template_id"
        ]
    }
  },
  {
    name: 'create_from_template_api_v2_journeys_templates__template_id__create_post',
    description: 'Create From Template',
    inputSchema: {
        "type": "object",
        "properties": {
            "template_id": {
                "type": "string",
                "description": "template_id parameter"
            }
        },
        "required": [
            "template_id"
        ]
    }
  },
  {
    name: 'get_journey_api_v2_journeys__journey_id__get',
    description: 'Get Journey',
    inputSchema: {
        "type": "object",
        "properties": {
            "journey_id": {
                "type": "string",
                "description": "journey_id parameter"
            }
        },
        "required": [
            "journey_id"
        ]
    }
  },
  {
    name: 'update_journey_api_v2_journeys__journey_id__patch',
    description: 'Update Journey',
    inputSchema: {
        "type": "object",
        "properties": {
            "journey_id": {
                "type": "string",
                "description": "journey_id parameter"
            },
            "name": {
                "type": "string",
                "description": "Name of the journey"
            },
            "description": {
                "type": "string",
                "description": "Description of the journey"
            },
            "journey_type": {
                "type": "string",
                "description": "Type of journey"
            },
            "status": {
                "type": "string",
                "description": "Status of the journey"
            }
        },
        "required": [
            "journey_id"
        ]
    }
  },
  {
    name: 'delete_journey_api_v2_journeys__journey_id__delete',
    description: 'Delete Journey',
    inputSchema: {
        "type": "object",
        "properties": {
            "journey_id": {
                "type": "string",
                "description": "journey_id parameter"
            }
        },
        "required": [
            "journey_id"
        ]
    }
  },
  {
    name: 'generate_journey_ai_api_v2_journeys_generate_post',
    description: 'Generate Journey Ai',
    inputSchema: {
        "type": "object",
        "properties": {
            "domain": {
                "type": "string",
                "description": "Company domain to analyze"
            },
            "industry": {
                "type": "string",
                "description": "Industry hint"
            },
            "company_description": {
                "type": "string",
                "description": "Description of the company"
            },
            "template_id": {
                "type": "string",
                "description": "Template ID to use as base"
            }
        },
        "required": []
    }
  },
  {
    name: 'save_generated_journeys_api_v2_journeys_generate_save_post',
    description: 'Save Generated Journeys',
    inputSchema: {
        "type": "object",
        "properties": {
            "source_domain": {
                "type": "string",
                "description": "Domain used for generation"
            },
            "detected_industry": {
                "type": "string",
                "description": "Detected industry"
            }
        },
        "required": []
    }
  },
  {
    name: 'suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_post',
    description: 'Suggest Touchpoint Config',
    inputSchema: {
        "type": "object",
        "properties": {
            "touchpoint_name": {
                "type": "string",
                "description": "Name of the touchpoint"
            },
            "touchpoint_description": {
                "type": "string",
                "description": "Description of the touchpoint"
            },
            "stage_name": {
                "type": "string",
                "description": "Name of the parent stage for context"
            },
            "journey_name": {
                "type": "string",
                "description": "Name of the journey for context"
            }
        },
        "required": [
            "touchpoint_name"
        ]
    }
  },
  {
    name: 'analyze_csv_journeys_api_v2_journeys_analyze_csv_post',
    description: 'Analyze Csv Journeys',
    inputSchema: {
        "type": "object",
        "properties": {
            "headers": {
                "type": "array",
                "description": "CSV column headers"
            },
            "rows": {
                "type": "array",
                "description": "CSV data rows"
            }
        },
        "required": [
            "headers",
            "rows"
        ]
    }
  },
  {
    name: 'create_stage_api_v2_journeys__journey_id__stages_post',
    description: 'Create Stage',
    inputSchema: {
        "type": "object",
        "properties": {
            "journey_id": {
                "type": "string",
                "description": "journey_id parameter"
            },
            "name": {
                "type": "string",
                "description": "Name of the stage"
            },
            "description": {
                "type": "string",
                "description": "Description of the stage"
            },
            "sequence": {
                "type": "integer",
                "description": "Order of the stage within the journey"
            },
            "touchpoints": {
                "type": "array",
                "description": "Touchpoints to create with the stage"
            }
        },
        "required": [
            "journey_id",
            "name"
        ]
    }
  },
  {
    name: 'update_stage_api_v2_journeys_stages__stage_id__patch',
    description: 'Update Stage',
    inputSchema: {
        "type": "object",
        "properties": {
            "stage_id": {
                "type": "string",
                "description": "stage_id parameter"
            },
            "name": {
                "type": "string",
                "description": "Name of the stage"
            },
            "description": {
                "type": "string",
                "description": "Description of the stage"
            },
            "sequence": {
                "type": "string",
                "description": "Order of the stage within the journey"
            }
        },
        "required": [
            "stage_id"
        ]
    }
  },
  {
    name: 'delete_stage_api_v2_journeys_stages__stage_id__delete',
    description: 'Delete Stage',
    inputSchema: {
        "type": "object",
        "properties": {
            "stage_id": {
                "type": "string",
                "description": "stage_id parameter"
            }
        },
        "required": [
            "stage_id"
        ]
    }
  },
  {
    name: 'reorder_stages_api_v2_journeys__journey_id__stages_reorder_put',
    description: 'Reorder Stages',
    inputSchema: {
        "type": "object",
        "properties": {
            "journey_id": {
                "type": "string",
                "description": "journey_id parameter"
            },
            "stage_ids": {
                "type": "array",
                "description": "Ordered list of stage IDs"
            }
        },
        "required": [
            "journey_id",
            "stage_ids"
        ]
    }
  },
  {
    name: 'create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_post',
    description: 'Create Touchpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "stage_id": {
                "type": "string",
                "description": "stage_id parameter"
            },
            "name": {
                "type": "string",
                "description": "Name of the touchpoint"
            },
            "description": {
                "type": "string",
                "description": "Description of the touchpoint"
            },
            "channel": {
                "type": "string",
                "description": "Distribution channel"
            },
            "metric_type": {
                "type": "string",
                "description": "Types of survey metrics."
            },
            "timing": {
                "type": "string",
                "description": "When to trigger the survey"
            },
            "sequence": {
                "type": "integer",
                "description": "Order of the touchpoint within the stage"
            }
        },
        "required": [
            "stage_id",
            "name"
        ]
    }
  },
  {
    name: 'update_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__patch',
    description: 'Update Touchpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "touchpoint_id": {
                "type": "string",
                "description": "touchpoint_id parameter"
            },
            "name": {
                "type": "string",
                "description": "Name of the touchpoint"
            },
            "description": {
                "type": "string",
                "description": "Description of the touchpoint"
            },
            "channel": {
                "type": "string",
                "description": "Distribution channel"
            },
            "metric_type": {
                "type": "string",
                "description": "Type of survey metric"
            },
            "timing": {
                "type": "string",
                "description": "When to trigger the survey"
            },
            "sequence": {
                "type": "string",
                "description": "Order of the touchpoint within the stage"
            }
        },
        "required": [
            "touchpoint_id"
        ]
    }
  },
  {
    name: 'delete_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__delete',
    description: 'Delete Touchpoint',
    inputSchema: {
        "type": "object",
        "properties": {
            "touchpoint_id": {
                "type": "string",
                "description": "touchpoint_id parameter"
            }
        },
        "required": [
            "touchpoint_id"
        ]
    }
  },
  {
    name: 'reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_put',
    description: 'Reorder Touchpoints',
    inputSchema: {
        "type": "object",
        "properties": {
            "stage_id": {
                "type": "string",
                "description": "stage_id parameter"
            },
            "touchpoint_ids": {
                "type": "array",
                "description": "Ordered list of touchpoint IDs"
            }
        },
        "required": [
            "stage_id",
            "touchpoint_ids"
        ]
    }
  },
  {
    name: 'get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_get',
    description: 'Get Touchpoint Surveys',
    inputSchema: {
        "type": "object",
        "properties": {
            "touchpoint_id": {
                "type": "string",
                "description": "touchpoint_id parameter"
            }
        },
        "required": [
            "touchpoint_id"
        ]
    }
  },
  {
    name: 'link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_post',
    description: 'Link Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "touchpoint_id": {
                "type": "string",
                "description": "touchpoint_id parameter"
            },
            "survey_id": {
                "type": "integer",
                "description": "Survey ID to link (integer)"
            },
            "is_primary": {
                "type": "boolean",
                "description": "Whether this is the primary survey for the touchpoint"
            }
        },
        "required": [
            "touchpoint_id",
            "survey_id"
        ]
    }
  },
  {
    name: 'unlink_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys__survey_id__delete',
    description: 'Unlink Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "touchpoint_id": {
                "type": "string",
                "description": "touchpoint_id parameter"
            },
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "touchpoint_id",
            "survey_id"
        ]
    }
  },
  {
    name: 'get_organization_settings_api_v2_phone_numbers_organization_settings_get',
    description: 'Get Organization Settings',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_get',
    description: 'Suggest Area Codes',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'search_region_numbers_api_v2_phone_numbers_search_region_get',
    description: 'Search Region Numbers',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "country_code": {
                "type": "string",
                "description": "country_code parameter"
            },
            "include_national": {
                "type": "boolean",
                "description": "include_national parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'search_available_numbers_api_v2_phone_numbers_search_get',
    description: 'Search Available Numbers',
    inputSchema: {
        "type": "object",
        "properties": {
            "country_code": {
                "type": "string",
                "description": "country_code parameter"
            },
            "area_code": {
                "type": "string",
                "description": "area_code parameter"
            },
            "type": {
                "type": "string",
                "description": "type parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'purchase_number_api_v2_phone_numbers_purchase_post',
    description: 'Purchase Number',
    inputSchema: {
        "type": "object",
        "properties": {
            "phone_number": {
                "type": "string",
                "description": "phone_number parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "friendly_name": {
                "type": "string",
                "description": "friendly_name parameter"
            },
            "locality": {
                "type": "string",
                "description": "locality parameter"
            }
        },
        "required": [
            "phone_number",
            "org_id"
        ]
    }
  },
  {
    name: 'list_phone_numbers_api_v2_phone_numbers_get',
    description: 'List Phone Numbers',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "status_filter": {
                "type": "string",
                "description": "status_filter parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'assign_number_to_survey_api_v2_phone_numbers__number_id__assign_post',
    description: 'Assign Number To Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "number_id": {
                "type": "integer",
                "description": "number_id parameter"
            },
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "number_id",
            "survey_id"
        ]
    }
  },
  {
    name: 'unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_post',
    description: 'Unassign Number From Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "number_id": {
                "type": "integer",
                "description": "number_id parameter"
            },
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "number_id",
            "survey_id"
        ]
    }
  },
  {
    name: 'release_number_api_v2_phone_numbers__number_id__release_post',
    description: 'Release Number',
    inputSchema: {
        "type": "object",
        "properties": {
            "number_id": {
                "type": "integer",
                "description": "number_id parameter"
            }
        },
        "required": [
            "number_id"
        ]
    }
  },
  {
    name: 'get_number_details_api_v2_phone_numbers__number_id__get',
    description: 'Get Number Details',
    inputSchema: {
        "type": "object",
        "properties": {
            "number_id": {
                "type": "integer",
                "description": "number_id parameter"
            }
        },
        "required": [
            "number_id"
        ]
    }
  },
  {
    name: 'get_survey_config_api_v2_phone_configs_surveys__survey_id__config_get',
    description: 'Get Survey Config',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'update_survey_config_api_v2_phone_configs_surveys__survey_id__config_put',
    description: 'Update Survey Config',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "voice": {
                "type": "string",
                "description": "voice parameter"
            },
            "language": {
                "type": "string",
                "description": "language parameter"
            },
            "interruption_threshold": {
                "type": "string",
                "description": "interruption_threshold parameter"
            },
            "temperature": {
                "type": "string",
                "description": "temperature parameter"
            },
            "max_duration": {
                "type": "string",
                "description": "max_duration parameter"
            },
            "background_track": {
                "type": "string",
                "description": "background_track parameter"
            },
            "noise_cancellation": {
                "type": "string",
                "description": "noise_cancellation parameter"
            },
            "record": {
                "type": "string",
                "description": "record parameter"
            },
            "custom_script": {
                "type": "string",
                "description": "custom_script parameter"
            },
            "use_custom_script": {
                "type": "string",
                "description": "use_custom_script parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'list_presets_api_v2_phone_configs_presets_get',
    description: 'List Presets',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_preset_api_v2_phone_configs_presets_post',
    description: 'Create Preset',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "voice": {
                "type": "string",
                "description": "voice parameter"
            },
            "language": {
                "type": "string",
                "description": "language parameter"
            },
            "interruption_threshold": {
                "type": "integer",
                "description": "interruption_threshold parameter"
            },
            "temperature": {
                "type": "number",
                "description": "temperature parameter"
            },
            "max_duration": {
                "type": "integer",
                "description": "max_duration parameter"
            },
            "background_track": {
                "type": "string",
                "description": "background_track parameter"
            },
            "noise_cancellation": {
                "type": "boolean",
                "description": "noise_cancellation parameter"
            },
            "record": {
                "type": "boolean",
                "description": "record parameter"
            }
        },
        "required": [
            "name"
        ]
    }
  },
  {
    name: 'delete_preset_api_v2_phone_configs_presets__preset_id__delete',
    description: 'Delete Preset',
    inputSchema: {
        "type": "object",
        "properties": {
            "preset_id": {
                "type": "integer",
                "description": "preset_id parameter"
            }
        },
        "required": [
            "preset_id"
        ]
    }
  },
  {
    name: 'list_available_voices_api_v2_phone_configs_voices_get',
    description: 'List Available Voices',
    inputSchema: {
        "type": "object",
        "properties": {
            "language": {
                "type": "string",
                "description": "language parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'list_available_languages_api_v2_phone_configs_languages_get',
    description: 'List Available Languages',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_post',
    description: 'Preview Test Script',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "config_id": {
                "type": "string",
                "description": "config_id parameter"
            },
            "save_as_custom": {
                "type": "boolean",
                "description": "save_as_custom parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_post',
    description: 'Create Phone Test Call',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "phone_number": {
                "type": "string",
                "description": "phone_number parameter"
            },
            "config_id": {
                "type": "string",
                "description": "config_id parameter"
            }
        },
        "required": [
            "survey_id",
            "phone_number"
        ]
    }
  },
  {
    name: 'list_test_calls_api_v2_surveys__survey_id__test_calls_get',
    description: 'List Test Calls',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "status_filter": {
                "type": "string",
                "description": "status_filter parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'create_test_call_api_v2_surveys__survey_id__test_calls_post',
    description: 'Create Test Call',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "config_id": {
                "type": "string",
                "description": "config_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_test_call_api_v2_surveys__survey_id__test_calls__test_id__get',
    description: 'Get Test Call',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "test_id": {
                "type": "string",
                "description": "test_id parameter"
            }
        },
        "required": [
            "survey_id",
            "test_id"
        ]
    }
  },
  {
    name: 'delete_test_call_api_v2_surveys__survey_id__test_calls__test_id__delete',
    description: 'Delete Test Call',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "test_id": {
                "type": "string",
                "description": "test_id parameter"
            }
        },
        "required": [
            "survey_id",
            "test_id"
        ]
    }
  },
  {
    name: 'approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_post',
    description: 'Approve Test Call',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "test_id": {
                "type": "string",
                "description": "test_id parameter"
            },
            "approved": {
                "type": "boolean",
                "description": "approved parameter"
            }
        },
        "required": [
            "survey_id",
            "test_id",
            "approved"
        ]
    }
  },
  {
    name: 'sync_test_call_results_api_v2_surveys__survey_id__test_calls__test_id__sync_post',
    description: 'Sync Test Call Results',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "test_id": {
                "type": "string",
                "description": "test_id parameter"
            }
        },
        "required": [
            "survey_id",
            "test_id"
        ]
    }
  },
  {
    name: 'complete_test_call_api_v2_surveys__survey_id__test_calls__test_id__complete_post',
    description: 'Complete Test Call',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "test_id": {
                "type": "string",
                "description": "test_id parameter"
            }
        },
        "required": [
            "survey_id",
            "test_id"
        ]
    }
  },
  {
    name: 'bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_post',
    description: 'Bland Webhook Handler',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_post',
    description: 'Upload Csv',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_post',
    description: 'Validate Csv',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "upload_id": {
                "type": "string",
                "description": "upload_id parameter"
            },
            "column_mapping": {
                "type": "object",
                "description": "column_mapping parameter"
            }
        },
        "required": [
            "survey_id",
            "upload_id",
            "column_mapping"
        ]
    }
  },
  {
    name: 'list_campaigns_api_v2_surveys__survey_id__phone_campaigns_get',
    description: 'List Campaigns',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "status_filter": {
                "type": "string",
                "description": "status_filter parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'create_campaign_api_v2_surveys__survey_id__phone_campaigns_post',
    description: 'Create Campaign',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "upload_id": {
                "type": "string",
                "description": "upload_id parameter"
            },
            "column_mapping": {
                "type": "object",
                "description": "column_mapping parameter"
            },
            "from_number": {
                "type": "string",
                "description": "from_number parameter"
            },
            "config_id": {
                "type": "string",
                "description": "config_id parameter"
            },
            "scheduled_start_at": {
                "type": "string",
                "description": "scheduled_start_at parameter"
            },
            "throttle_per_hour": {
                "type": "integer",
                "description": "throttle_per_hour parameter"
            },
            "max_attempts": {
                "type": "integer",
                "description": "max_attempts parameter"
            },
            "retry_delay_hours": {
                "type": "integer",
                "description": "retry_delay_hours parameter"
            },
            "retry_on": {
                "type": "array",
                "description": "retry_on parameter"
            },
            "exclude_invalid": {
                "type": "boolean",
                "description": "exclude_invalid parameter"
            }
        },
        "required": [
            "survey_id",
            "name",
            "upload_id",
            "column_mapping"
        ]
    }
  },
  {
    name: 'get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__get',
    description: 'Get Campaign',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'delete_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__delete',
    description: 'Delete Campaign',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'start_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__start_post',
    description: 'Start Campaign',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'pause_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__pause_put',
    description: 'Pause Campaign',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'resume_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__resume_put',
    description: 'Resume Campaign',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'retry_failed_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_retry_post',
    description: 'Retry Failed Contacts',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_get',
    description: 'Get Campaign Contacts',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            },
            "status_filter": {
                "type": "string",
                "description": "status_filter parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'handle_campaign_webhook_api_v2_surveys__survey_id__phone_campaigns__campaign_id__webhook_post',
    description: 'Handle Campaign Webhook',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "campaign_id": {
                "type": "integer",
                "description": "campaign_id parameter"
            }
        },
        "required": [
            "survey_id",
            "campaign_id"
        ]
    }
  },
  {
    name: 'get_products_api_v2_products_get',
    description: 'Get Products',
    inputSchema: {
        "type": "object",
        "properties": {
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "category_id": {
                "type": "string",
                "description": "category_id parameter"
            },
            "search": {
                "type": "string",
                "description": "search parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_product_api_v2_products_post',
    description: 'Create Product',
    inputSchema: {
        "type": "object",
        "properties": {
            "external_id": {
                "type": "string",
                "description": "external_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "category_id": {
                "type": "string",
                "description": "category_id parameter"
            },
            "image_url": {
                "type": "string",
                "description": "image_url parameter"
            },
            "product_url": {
                "type": "string",
                "description": "product_url parameter"
            },
            "attributes": {
                "type": "object",
                "description": "attributes parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "external_id",
            "name",
            "org_id"
        ]
    }
  },
  {
    name: 'get_product_api_v2_products__product_id__get',
    description: 'Get Product',
    inputSchema: {
        "type": "object",
        "properties": {
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            }
        },
        "required": [
            "product_id"
        ]
    }
  },
  {
    name: 'update_product_api_v2_products__product_id__put',
    description: 'Update Product',
    inputSchema: {
        "type": "object",
        "properties": {
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "category_id": {
                "type": "string",
                "description": "category_id parameter"
            },
            "image_url": {
                "type": "string",
                "description": "image_url parameter"
            },
            "product_url": {
                "type": "string",
                "description": "product_url parameter"
            },
            "attributes": {
                "type": "string",
                "description": "attributes parameter"
            }
        },
        "required": [
            "product_id"
        ]
    }
  },
  {
    name: 'delete_product_api_v2_products__product_id__delete',
    description: 'Delete Product',
    inputSchema: {
        "type": "object",
        "properties": {
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            }
        },
        "required": [
            "product_id"
        ]
    }
  },
  {
    name: 'get_products_by_external_ids_public_api_v2_by_external_ids_public_get',
    description: 'Get Products By External Ids Public',
    inputSchema: {
        "type": "object",
        "properties": {
            "external_ids": {
                "type": "string",
                "description": "Comma-separated list of external IDs"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "external_ids",
            "org_id"
        ]
    }
  },
  {
    name: 'import_products_api_v2_products_import_post',
    description: 'Import Products',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_product_review_summary_api_v2_products__product_id__reviews_summary_get',
    description: 'Get Product Review Summary',
    inputSchema: {
        "type": "object",
        "properties": {
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            }
        },
        "required": [
            "product_id"
        ]
    }
  },
  {
    name: 'get_product_reviews_api_v2_products__product_id__reviews_get',
    description: 'Get Product Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "rating": {
                "type": "string",
                "description": "rating parameter"
            },
            "start_date": {
                "type": "string",
                "description": "start_date parameter"
            },
            "end_date": {
                "type": "string",
                "description": "end_date parameter"
            },
            "verified_only": {
                "type": "boolean",
                "description": "verified_only parameter"
            }
        },
        "required": [
            "product_id"
        ]
    }
  },
  {
    name: 'get_order_detail_api_v2_orders__order_id__detail_get',
    description: 'Get Order Detail',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'get_reviews_api_v2_reviews_get',
    description: 'Get Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            },
            "category_id": {
                "type": "string",
                "description": "category_id parameter"
            },
            "rating": {
                "type": "string",
                "description": "rating parameter"
            },
            "response_type": {
                "type": "string",
                "description": "response_type parameter"
            },
            "sentiment": {
                "type": "string",
                "description": "sentiment parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "order_id": {
                "type": "string",
                "description": "Filter by order ID"
            },
            "order_number": {
                "type": "string",
                "description": "Search by order number"
            },
            "start_date": {
                "type": "string",
                "description": "Start date (YYYY-MM-DD)"
            },
            "end_date": {
                "type": "string",
                "description": "End date (YYYY-MM-DD)"
            },
            "sort_by": {
                "type": "string",
                "description": "Sort by: newest, oldest, highest, lowest"
            }
        },
        "required": []
    }
  },
  {
    name: 'export_google_product_reviews_feed_api_v2_reviews_export_google_feed_get',
    description: 'Export Google Product Reviews Feed',
    inputSchema: {
        "type": "object",
        "properties": {
            "publisher_name": {
                "type": "string",
                "description": "Publisher/retailer name"
            },
            "publisher_favicon": {
                "type": "string",
                "description": "Publisher favicon URL"
            },
            "product_id": {
                "type": "string",
                "description": "Filter by specific product ID"
            },
            "category_id": {
                "type": "string",
                "description": "Filter by category ID"
            },
            "limit": {
                "type": "string",
                "description": "Maximum number of reviews to export"
            }
        },
        "required": []
    }
  },
  {
    name: 'export_reviews_api_v2_reviews_export_get',
    description: 'Export Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "format": {
                "type": "string",
                "description": "Export format: csv, google_shopping, microsoft_shopping"
            },
            "product_id": {
                "type": "string",
                "description": "Filter by product ID"
            },
            "min_rating": {
                "type": "string",
                "description": "Minimum rating filter"
            },
            "verified_only": {
                "type": "boolean",
                "description": "Only verified purchases"
            },
            "start_date": {
                "type": "string",
                "description": "Start date (YYYY-MM-DD)"
            },
            "end_date": {
                "type": "string",
                "description": "End date (YYYY-MM-DD)"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'update_review_status_api_v2_reviews__review_id__status_patch',
    description: 'Update Review Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "review_id": {
                "type": "string",
                "description": "review_id parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            }
        },
        "required": [
            "review_id",
            "status"
        ]
    }
  },
  {
    name: 'add_review_response_api_v2_reviews__review_id__response_post',
    description: 'Add Review Response',
    inputSchema: {
        "type": "object",
        "properties": {
            "review_id": {
                "type": "string",
                "description": "review_id parameter"
            },
            "response_text": {
                "type": "string",
                "description": "response_text parameter"
            }
        },
        "required": [
            "review_id",
            "response_text"
        ]
    }
  },
  {
    name: 'delete_review_response_api_v2_reviews__review_id__response_delete',
    description: 'Delete Review Response',
    inputSchema: {
        "type": "object",
        "properties": {
            "review_id": {
                "type": "string",
                "description": "review_id parameter"
            }
        },
        "required": [
            "review_id"
        ]
    }
  },
  {
    name: 'get_product_review_summary_api_v2_reviews_product__product_id__summary_get',
    description: 'Get Product Review Summary',
    inputSchema: {
        "type": "object",
        "properties": {
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            }
        },
        "required": [
            "product_id"
        ]
    }
  },
  {
    name: 'get_categories_api_v2_categories_get',
    description: 'Get Categories',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'create_category_api_v2_categories_post',
    description: 'Create Category',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "parent_id": {
                "type": "string",
                "description": "parent_id parameter"
            }
        },
        "required": [
            "name"
        ]
    }
  },
  {
    name: 'get_category_api_v2_categories__category_id__get',
    description: 'Get Category',
    inputSchema: {
        "type": "object",
        "properties": {
            "category_id": {
                "type": "integer",
                "description": "category_id parameter"
            }
        },
        "required": [
            "category_id"
        ]
    }
  },
  {
    name: 'update_category_api_v2_categories__category_id__put',
    description: 'Update Category',
    inputSchema: {
        "type": "object",
        "properties": {
            "category_id": {
                "type": "integer",
                "description": "category_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "parent_id": {
                "type": "string",
                "description": "parent_id parameter"
            }
        },
        "required": [
            "category_id"
        ]
    }
  },
  {
    name: 'delete_category_api_v2_categories__category_id__delete',
    description: 'Delete Category',
    inputSchema: {
        "type": "object",
        "properties": {
            "category_id": {
                "type": "integer",
                "description": "category_id parameter"
            }
        },
        "required": [
            "category_id"
        ]
    }
  },
  {
    name: 'get_orders_api_v2_orders_get',
    description: 'Get Orders',
    inputSchema: {
        "type": "object",
        "properties": {
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "customer_email": {
                "type": "string",
                "description": "customer_email parameter"
            },
            "survey_sent": {
                "type": "string",
                "description": "survey_sent parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_order_api_v2_orders_post',
    description: 'Create Order',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_number": {
                "type": "string",
                "description": "order_number parameter"
            },
            "customer_email": {
                "type": "string",
                "description": "customer_email parameter"
            },
            "order_date": {
                "type": "string",
                "description": "order_date parameter"
            },
            "products": {
                "type": "array",
                "description": "products parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            }
        },
        "required": [
            "order_number",
            "customer_email",
            "order_date",
            "org_id"
        ]
    }
  },
  {
    name: 'get_order_api_v2_orders__order_id__get',
    description: 'Get Order',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'update_order_api_v2_orders__order_id__put',
    description: 'Update Order',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            },
            "survey_sent": {
                "type": "string",
                "description": "survey_sent parameter"
            },
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'delete_order_api_v2_orders__order_id__delete',
    description: 'Delete Order',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'get_order_survey_link_api_v2_orders__order_id__survey_link_get',
    description: 'Get Order Survey Link',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'import_orders_api_v2_orders_import_post',
    description: 'Import Orders',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'send_review_request_api_v2_orders__order_id__send_review_request_post',
    description: 'Send Review Request',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            },
            "delay_hours": {
                "type": "integer",
                "description": "delay_hours parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_post',
    description: 'Send Bulk Review Requests',
    inputSchema: {
        "type": "object",
        "properties": {
            "delay_hours": {
                "type": "integer",
                "description": "delay_hours parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'ai_powered_review_search_api_v2_reviews_ai_search_get',
    description: 'Ai Powered Review Search',
    inputSchema: {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Natural language search query"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            }
        },
        "required": [
            "query"
        ]
    }
  },
  {
    name: 'get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_get',
    description: 'Get Reviewer Profile',
    inputSchema: {
        "type": "object",
        "properties": {
            "reviewer_email": {
                "type": "string",
                "description": "reviewer_email parameter"
            }
        },
        "required": [
            "reviewer_email"
        ]
    }
  },
  {
    name: 'get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_get',
    description: 'Get Reviewer Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "reviewer_email": {
                "type": "string",
                "description": "reviewer_email parameter"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": [
            "reviewer_email"
        ]
    }
  },
  {
    name: 'get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_get',
    description: 'Get Similar Reviewers',
    inputSchema: {
        "type": "object",
        "properties": {
            "reviewer_email": {
                "type": "string",
                "description": "reviewer_email parameter"
            },
            "limit": {
                "type": "integer",
                "description": "Max number of similar reviewers"
            },
            "min_similarity": {
                "type": "number",
                "description": "Minimum similarity threshold (0-1)"
            }
        },
        "required": [
            "reviewer_email"
        ]
    }
  },
  {
    name: 'get_power_reviewers_api_v2_reviewers_power_reviewers_get',
    description: 'Get Power Reviewers',
    inputSchema: {
        "type": "object",
        "properties": {
            "min_reviews": {
                "type": "integer",
                "description": "Minimum number of reviews to qualify"
            },
            "sort_by": {
                "type": "string",
                "description": "Sort field"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'generate_embeddings_bulk_api_v2_reviewers_generate_embeddings_post',
    description: 'Generate Embeddings Bulk',
    inputSchema: {
        "type": "object",
        "properties": {
            "limit": {
                "type": "string",
                "description": "Limit number of embeddings (for testing)"
            },
            "force_refresh": {
                "type": "boolean",
                "description": "Regenerate existing embeddings"
            },
            "run_async": {
                "type": "boolean",
                "description": "Run in background (recommended for large orgs)"
            }
        },
        "required": []
    }
  },
  {
    name: 'refresh_reviewer_stats_api_v2_reviewers_refresh_stats_post',
    description: 'Refresh Reviewer Stats',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_order_analytics_api_v2_orders_analytics_get',
    description: 'Get Order Analytics',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "date_range": {
                "type": "integer",
                "description": "Number of days to analyze"
            },
            "product_id": {
                "type": "string",
                "description": "Filter by product ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_single_order_analytics_api_v2_orders__order_id__analytics_get',
    description: 'Get Single Order Analytics',
    inputSchema: {
        "type": "object",
        "properties": {
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "order_id"
        ]
    }
  },
  {
    name: 'get_product_config_api_v2_organization_product_config_get',
    description: 'Get Product Config',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'update_product_config_api_v2_organization_product_config_patch',
    description: 'Update Product Config',
    inputSchema: {
        "type": "object",
        "properties": {
            "industry": {
                "type": "string",
                "description": "industry parameter"
            },
            "review_aggregation": {
                "type": "string",
                "description": "review_aggregation parameter"
            },
            "max_category_depth": {
                "type": "string",
                "description": "max_category_depth parameter"
            },
            "use_collections": {
                "type": "string",
                "description": "use_collections parameter"
            },
            "use_product_lines": {
                "type": "string",
                "description": "use_product_lines parameter"
            },
            "use_variants": {
                "type": "string",
                "description": "use_variants parameter"
            },
            "variant_attributes": {
                "type": "string",
                "description": "variant_attributes parameter"
            },
            "allow_discontinued_in_orders": {
                "type": "string",
                "description": "allow_discontinued_in_orders parameter"
            },
            "warn_on_discontinued": {
                "type": "string",
                "description": "warn_on_discontinued parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'apply_config_preset_api_v2_organization_product_config_preset__preset_name__post',
    description: 'Apply Config Preset',
    inputSchema: {
        "type": "object",
        "properties": {
            "preset_name": {
                "type": "string",
                "description": "preset_name parameter"
            }
        },
        "required": [
            "preset_name"
        ]
    }
  },
  {
    name: 'resolve_surveys_by_products_api_v2_surveys_resolve_by_products_get',
    description: 'Resolve Surveys By Products',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "products": {
                "type": "string",
                "description": "Comma-separated list of product IDs"
            },
            "order_id": {
                "type": "string",
                "description": "Optional order ID for tracking"
            }
        },
        "required": [
            "org_id",
            "products"
        ]
    }
  },
  {
    name: 'resolve_surveys_api_v2_surveys_resolve_post',
    description: 'Resolve Surveys',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "product_ids": {
                "type": "array",
                "description": "product_ids parameter"
            },
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "org_id",
            "product_ids"
        ]
    }
  },
  {
    name: 'get_assignments_api_v2_survey_assignments_get',
    description: 'Get Assignments',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "Organization ID"
            },
            "survey_id": {
                "type": "string",
                "description": "Filter by survey ID"
            },
            "product_id": {
                "type": "string",
                "description": "Filter by product ID"
            },
            "category_id": {
                "type": "string",
                "description": "Filter by category ID"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_assignment_api_v2_survey_assignments_post',
    description: 'Create Assignment',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "product_id": {
                "type": "string",
                "description": "product_id parameter"
            },
            "category_id": {
                "type": "string",
                "description": "category_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "priority": {
                "type": "integer",
                "description": "priority parameter"
            },
            "assignment_type": {
                "type": "string",
                "description": "Assignment type enumeration."
            }
        },
        "required": [
            "survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'update_assignment_api_v2_survey_assignments__assignment_id__put',
    description: 'Update Assignment',
    inputSchema: {
        "type": "object",
        "properties": {
            "assignment_id": {
                "type": "integer",
                "description": "assignment_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "priority": {
                "type": "string",
                "description": "priority parameter"
            },
            "assignment_type": {
                "type": "string",
                "description": "assignment_type parameter"
            }
        },
        "required": [
            "assignment_id"
        ]
    }
  },
  {
    name: 'delete_assignment_api_v2_survey_assignments__assignment_id__delete',
    description: 'Delete Assignment',
    inputSchema: {
        "type": "object",
        "properties": {
            "assignment_id": {
                "type": "integer",
                "description": "assignment_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            }
        },
        "required": [
            "assignment_id"
        ]
    }
  },
  {
    name: 'bulk_create_assignments_api_v2_survey_assignments_bulk_post',
    description: 'Bulk Create Assignments',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "assignments": {
                "type": "array",
                "description": "assignments parameter"
            },
            "replace_existing": {
                "type": "boolean",
                "description": "replace_existing parameter"
            }
        },
        "required": [
            "assignments"
        ]
    }
  },
  {
    name: 'get_assignments_by_products_api_v2_survey_assignments_by_products_post',
    description: 'Get Assignments By Products',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'delete_assignments_by_survey_api_v2_survey_assignments_by_survey__survey_id__delete',
    description: 'Delete Assignments By Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_assignment_statistics_api_v2_survey_assignments_stats_get',
    description: 'Get Assignment Statistics',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_active_configuration_api_v2_survey_chain_config_active_get',
    description: 'Get Active Configuration',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "Organization ID"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_all_configurations_api_v2_survey_chain_config_get',
    description: 'Get All Configurations',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "Organization ID"
            },
            "include_inactive": {
                "type": "boolean",
                "description": "Include inactive configurations"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_configuration_api_v2_survey_chain_config_post',
    description: 'Create Configuration',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "optimization_strategy": {
                "type": "string",
                "description": "Survey chain optimization strategy."
            },
            "max_surveys_per_chain": {
                "type": "integer",
                "description": "max_surveys_per_chain parameter"
            },
            "fallback_survey_id": {
                "type": "string",
                "description": "fallback_survey_id parameter"
            },
            "is_active": {
                "type": "boolean",
                "description": "is_active parameter"
            }
        },
        "required": [
            "org_id",
            "name"
        ]
    }
  },
  {
    name: 'update_configuration_api_v2_survey_chain_config__config_id__put',
    description: 'Update Configuration',
    inputSchema: {
        "type": "object",
        "properties": {
            "config_id": {
                "type": "integer",
                "description": "config_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "optimization_strategy": {
                "type": "string",
                "description": "optimization_strategy parameter"
            },
            "max_surveys_per_chain": {
                "type": "string",
                "description": "max_surveys_per_chain parameter"
            },
            "fallback_survey_id": {
                "type": "string",
                "description": "fallback_survey_id parameter"
            },
            "is_active": {
                "type": "string",
                "description": "is_active parameter"
            }
        },
        "required": [
            "config_id"
        ]
    }
  },
  {
    name: 'delete_configuration_api_v2_survey_chain_config__config_id__delete',
    description: 'Delete Configuration',
    inputSchema: {
        "type": "object",
        "properties": {
            "config_id": {
                "type": "integer",
                "description": "config_id parameter"
            },
            "org_id": {
                "type": "string",
                "description": "org_id parameter"
            }
        },
        "required": [
            "config_id"
        ]
    }
  },
  {
    name: 'get_recommendations_api_v2_survey_chain_config_recommendations_post',
    description: 'Get Recommendations',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "Organization ID"
            }
        },
        "required": []
    }
  },
  {
    name: 'test_optimization_api_v2_survey_chain_config_test_optimization_post',
    description: 'Test Optimization',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "string",
                "description": "Organization ID"
            },
            "sample_products": {
                "type": "array",
                "description": "Sample product IDs to test"
            },
            "strategy": {
                "type": "string",
                "description": "Strategy to test (uses current if not provided)"
            },
            "max_surveys": {
                "type": "string",
                "description": "Max surveys to test (uses current if not provided)"
            }
        },
        "required": [
            "sample_products"
        ]
    }
  },
  {
    name: 'resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_get',
    description: 'Resolve Surveys By Products Public',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "products": {
                "type": "string",
                "description": "Comma-separated list of product IDs"
            },
            "order_id": {
                "type": "string",
                "description": "Optional order ID for tracking"
            }
        },
        "required": [
            "org_id",
            "products"
        ]
    }
  },
  {
    name: 'resolve_surveys_public_api_v2_public_surveys_resolve_post',
    description: 'Resolve Surveys Public',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "product_ids": {
                "type": "array",
                "description": "product_ids parameter"
            },
            "order_id": {
                "type": "string",
                "description": "order_id parameter"
            }
        },
        "required": [
            "org_id",
            "product_ids"
        ]
    }
  },
  {
    name: 'handle_survey_response_api_v2_webhooks_survey_response_post',
    description: 'Handle Survey Response',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'handle_order_status_api_v2_webhooks_order_status_post',
    description: 'Handle Order Status',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'handle_order_shipment_api_v2_webhooks_order_shipment_post',
    description: 'Handle Order Shipment',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'handle_order_delivery_api_v2_webhooks_order_delivery_post',
    description: 'Handle Order Delivery',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_get',
    description: 'Get Pending Scheduled Emails',
    inputSchema: {
        "type": "object",
        "properties": {
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'process_scheduled_email_api_v2_webhooks_scheduled_emails__email_id__process_post',
    description: 'Process Scheduled Email',
    inputSchema: {
        "type": "object",
        "properties": {
            "email_id": {
                "type": "string",
                "description": "email_id parameter"
            }
        },
        "required": [
            "email_id"
        ]
    }
  },
  {
    name: 'list_segments_api_v2_contacts_segments__get',
    description: 'List Segments',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "segment_type": {
                "type": "string",
                "description": "segment_type parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_segment_api_v2_contacts_segments__post',
    description: 'Create Segment',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "user_id": {
                "type": "string",
                "description": "User ID"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "color": {
                "type": "string",
                "description": "color parameter"
            },
            "segment_type": {
                "type": "string",
                "description": "Types of segments."
            },
            "filter_criteria": {
                "type": "string",
                "description": "filter_criteria parameter"
            }
        },
        "required": [
            "org_id",
            "name",
            "segment_type"
        ]
    }
  },
  {
    name: 'get_segment_api_v2_contacts_segments__segment_id__get',
    description: 'Get Segment',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "segment_id",
            "org_id"
        ]
    }
  },
  {
    name: 'update_segment_api_v2_contacts_segments__segment_id__patch',
    description: 'Update Segment',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "color": {
                "type": "string",
                "description": "color parameter"
            },
            "filter_criteria": {
                "type": "string",
                "description": "filter_criteria parameter"
            }
        },
        "required": [
            "segment_id",
            "org_id"
        ]
    }
  },
  {
    name: 'delete_segment_api_v2_contacts_segments__segment_id__delete',
    description: 'Delete Segment',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "segment_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_get',
    description: 'Get Segment Contacts',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            }
        },
        "required": [
            "segment_id",
            "org_id"
        ]
    }
  },
  {
    name: 'refresh_segment_api_v2_contacts_segments__segment_id__refresh_post',
    description: 'Refresh Segment',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "segment_id",
            "org_id"
        ]
    }
  },
  {
    name: 'add_members_api_v2_contacts_segments__segment_id__members_post',
    description: 'Add Members',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "user_id": {
                "type": "string",
                "description": "User ID"
            },
            "contact_ids": {
                "type": "array",
                "description": "contact_ids parameter"
            }
        },
        "required": [
            "segment_id",
            "org_id",
            "contact_ids"
        ]
    }
  },
  {
    name: 'remove_members_api_v2_contacts_segments__segment_id__members_delete',
    description: 'Remove Members',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "contact_ids": {
                "type": "array",
                "description": "contact_ids parameter"
            }
        },
        "required": [
            "segment_id",
            "org_id",
            "contact_ids"
        ]
    }
  },
  {
    name: 'quick_search_api_v2_contacts_search__get',
    description: 'Quick Search',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "q": {
                "type": "string",
                "description": "Search query"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "tags": {
                "type": "string",
                "description": "tags parameter"
            },
            "min_nps": {
                "type": "string",
                "description": "min_nps parameter"
            },
            "max_nps": {
                "type": "string",
                "description": "max_nps parameter"
            },
            "has_email": {
                "type": "string",
                "description": "has_email parameter"
            },
            "has_phone": {
                "type": "string",
                "description": "has_phone parameter"
            },
            "source_system": {
                "type": "string",
                "description": "source_system parameter"
            }
        },
        "required": [
            "org_id",
            "q"
        ]
    }
  },
  {
    name: 'semantic_search_api_v2_contacts_search_semantic_post',
    description: 'Semantic Search',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "query": {
                "type": "string",
                "description": "query parameter"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "min_similarity": {
                "type": "number",
                "description": "min_similarity parameter"
            },
            "content_types": {
                "type": "string",
                "description": "content_types parameter"
            },
            "sentiment_filter": {
                "type": "string",
                "description": "sentiment_filter parameter"
            },
            "pre_filters": {
                "type": "string",
                "description": "pre_filters parameter"
            }
        },
        "required": [
            "org_id",
            "query"
        ]
    }
  },
  {
    name: 'get_suggestions_api_v2_contacts_search_suggest_get',
    description: 'Get Suggestions',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "q": {
                "type": "string",
                "description": "Partial query"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            }
        },
        "required": [
            "org_id",
            "q"
        ]
    }
  },
  {
    name: 'search_by_attributes_api_v2_contacts_search_attributes_post',
    description: 'Search By Attributes',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'list_interactions_api_v2_contacts__contact_id__interactions__get',
    description: 'List Interactions',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            },
            "types": {
                "type": "string",
                "description": "Filter by interaction types"
            },
            "channels": {
                "type": "string",
                "description": "Filter by channels"
            },
            "source_systems": {
                "type": "string",
                "description": "source_systems parameter"
            },
            "has_nps": {
                "type": "string",
                "description": "has_nps parameter"
            },
            "min_nps": {
                "type": "string",
                "description": "min_nps parameter"
            },
            "max_nps": {
                "type": "string",
                "description": "max_nps parameter"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'log_interaction_api_v2_contacts__contact_id__interactions__post',
    description: 'Log Interaction',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "interaction_type": {
                "type": "string",
                "description": "Types of contact interactions."
            },
            "channel": {
                "type": "string",
                "description": "Channels for interactions."
            },
            "source_system": {
                "type": "string",
                "description": "source_system parameter"
            },
            "source_id": {
                "type": "string",
                "description": "source_id parameter"
            },
            "source_url": {
                "type": "string",
                "description": "source_url parameter"
            },
            "metadata": {
                "type": "object",
                "description": "metadata parameter"
            },
            "sentiment_score": {
                "type": "string",
                "description": "sentiment_score parameter"
            },
            "nps_score": {
                "type": "string",
                "description": "nps_score parameter"
            }
        },
        "required": [
            "contact_id",
            "org_id",
            "interaction_type",
            "channel",
            "source_system"
        ]
    }
  },
  {
    name: 'get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_get',
    description: 'Get Interaction Stats',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_get',
    description: 'List Replies',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "interaction_id": {
                "type": "string",
                "description": "interaction_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            }
        },
        "required": [
            "contact_id",
            "interaction_id",
            "org_id"
        ]
    }
  },
  {
    name: 'create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_post',
    description: 'Create Reply',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "interaction_id": {
                "type": "string",
                "description": "interaction_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "note": {
                "type": "string",
                "description": "Reply content, max 500 characters"
            },
            "is_public_reply": {
                "type": "boolean",
                "description": "If true, send email notification to the contact"
            }
        },
        "required": [
            "contact_id",
            "interaction_id",
            "org_id",
            "note"
        ]
    }
  },
  {
    name: 'update_reply_api_v2_replies__reply_id__put',
    description: 'Update Reply',
    inputSchema: {
        "type": "object",
        "properties": {
            "reply_id": {
                "type": "integer",
                "description": "reply_id parameter"
            },
            "note": {
                "type": "string",
                "description": "Reply content, max 500 characters"
            }
        },
        "required": [
            "reply_id",
            "note"
        ]
    }
  },
  {
    name: 'delete_reply_api_v2_replies__reply_id__delete',
    description: 'Delete Reply',
    inputSchema: {
        "type": "object",
        "properties": {
            "reply_id": {
                "type": "integer",
                "description": "reply_id parameter"
            }
        },
        "required": [
            "reply_id"
        ]
    }
  },
  {
    name: 'get_contact_content_api_v2_contacts__contact_id__content__get',
    description: 'Get Contact Content',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "interaction_id": {
                "type": "string",
                "description": "Filter by interaction source ID"
            },
            "source_id": {
                "type": "string",
                "description": "Filter by source ID"
            },
            "content_type": {
                "type": "string",
                "description": "Filter by content type"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'list_contact_content_api_v2_contacts__contact_id__content_all_get',
    description: 'List Contact Content',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "content_type": {
                "type": "string",
                "description": "Filter by content type"
            },
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'list_definitions_api_v2_contacts_attributes_definitions_get',
    description: 'List Definitions',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "searchable_only": {
                "type": "boolean",
                "description": "searchable_only parameter"
            },
            "filterable_only": {
                "type": "boolean",
                "description": "filterable_only parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_definition_api_v2_contacts_attributes_definitions_post',
    description: 'Create Definition',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "user_id": {
                "type": "string",
                "description": "User ID"
            },
            "attribute_key": {
                "type": "string",
                "description": "attribute_key parameter"
            },
            "display_name": {
                "type": "string",
                "description": "display_name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "data_type": {
                "type": "string",
                "description": "Data types for custom attributes."
            },
            "enum_values": {
                "type": "string",
                "description": "enum_values parameter"
            },
            "is_required": {
                "type": "boolean",
                "description": "is_required parameter"
            },
            "is_unique": {
                "type": "boolean",
                "description": "is_unique parameter"
            },
            "validation_regex": {
                "type": "string",
                "description": "validation_regex parameter"
            },
            "min_value": {
                "type": "string",
                "description": "min_value parameter"
            },
            "max_value": {
                "type": "string",
                "description": "max_value parameter"
            },
            "min_length": {
                "type": "string",
                "description": "min_length parameter"
            },
            "max_length": {
                "type": "string",
                "description": "max_length parameter"
            },
            "default_value": {
                "type": "string",
                "description": "default_value parameter"
            },
            "is_searchable": {
                "type": "boolean",
                "description": "is_searchable parameter"
            },
            "is_filterable": {
                "type": "boolean",
                "description": "is_filterable parameter"
            },
            "show_in_list": {
                "type": "boolean",
                "description": "show_in_list parameter"
            },
            "show_in_profile": {
                "type": "boolean",
                "description": "show_in_profile parameter"
            },
            "display_order": {
                "type": "integer",
                "description": "display_order parameter"
            },
            "attribute_group": {
                "type": "string",
                "description": "attribute_group parameter"
            }
        },
        "required": [
            "org_id",
            "attribute_key",
            "display_name"
        ]
    }
  },
  {
    name: 'get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_get',
    description: 'Get Grouped Definitions',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_definition_api_v2_contacts_attributes_definitions__definition_id__get',
    description: 'Get Definition',
    inputSchema: {
        "type": "object",
        "properties": {
            "definition_id": {
                "type": "string",
                "description": "definition_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "definition_id",
            "org_id"
        ]
    }
  },
  {
    name: 'update_definition_api_v2_contacts_attributes_definitions__definition_id__patch',
    description: 'Update Definition',
    inputSchema: {
        "type": "object",
        "properties": {
            "definition_id": {
                "type": "string",
                "description": "definition_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "display_name": {
                "type": "string",
                "description": "display_name parameter"
            },
            "description": {
                "type": "string",
                "description": "description parameter"
            },
            "enum_values": {
                "type": "string",
                "description": "enum_values parameter"
            },
            "is_required": {
                "type": "string",
                "description": "is_required parameter"
            },
            "validation_regex": {
                "type": "string",
                "description": "validation_regex parameter"
            },
            "min_value": {
                "type": "string",
                "description": "min_value parameter"
            },
            "max_value": {
                "type": "string",
                "description": "max_value parameter"
            },
            "min_length": {
                "type": "string",
                "description": "min_length parameter"
            },
            "max_length": {
                "type": "string",
                "description": "max_length parameter"
            },
            "default_value": {
                "type": "string",
                "description": "default_value parameter"
            },
            "is_searchable": {
                "type": "string",
                "description": "is_searchable parameter"
            },
            "is_filterable": {
                "type": "string",
                "description": "is_filterable parameter"
            },
            "show_in_list": {
                "type": "string",
                "description": "show_in_list parameter"
            },
            "show_in_profile": {
                "type": "string",
                "description": "show_in_profile parameter"
            },
            "display_order": {
                "type": "string",
                "description": "display_order parameter"
            },
            "attribute_group": {
                "type": "string",
                "description": "attribute_group parameter"
            }
        },
        "required": [
            "definition_id",
            "org_id"
        ]
    }
  },
  {
    name: 'delete_definition_api_v2_contacts_attributes_definitions__definition_id__delete',
    description: 'Delete Definition',
    inputSchema: {
        "type": "object",
        "properties": {
            "definition_id": {
                "type": "string",
                "description": "definition_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "definition_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_rules_api_v2_contacts_throttle_rules_get',
    description: 'Get Rules',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'update_rules_api_v2_contacts_throttle_rules_put',
    description: 'Update Rules',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "enabled": {
                "type": "string",
                "description": "enabled parameter"
            },
            "max_contacts_per_day": {
                "type": "string",
                "description": "max_contacts_per_day parameter"
            },
            "max_contacts_per_week": {
                "type": "string",
                "description": "max_contacts_per_week parameter"
            },
            "max_contacts_per_month": {
                "type": "string",
                "description": "max_contacts_per_month parameter"
            },
            "min_days_between_contacts": {
                "type": "string",
                "description": "min_days_between_contacts parameter"
            },
            "email_max_per_week": {
                "type": "string",
                "description": "email_max_per_week parameter"
            },
            "email_min_days_between": {
                "type": "string",
                "description": "email_min_days_between parameter"
            },
            "sms_max_per_week": {
                "type": "string",
                "description": "sms_max_per_week parameter"
            },
            "sms_min_days_between": {
                "type": "string",
                "description": "sms_min_days_between parameter"
            },
            "phone_max_per_week": {
                "type": "string",
                "description": "phone_max_per_week parameter"
            },
            "phone_min_days_between": {
                "type": "string",
                "description": "phone_min_days_between parameter"
            },
            "vip_bypass_enabled": {
                "type": "string",
                "description": "vip_bypass_enabled parameter"
            },
            "vip_tag": {
                "type": "string",
                "description": "vip_tag parameter"
            },
            "transactional_bypass_enabled": {
                "type": "string",
                "description": "transactional_bypass_enabled parameter"
            },
            "quiet_hours_enabled": {
                "type": "string",
                "description": "quiet_hours_enabled parameter"
            },
            "quiet_hours_start": {
                "type": "string",
                "description": "quiet_hours_start parameter"
            },
            "quiet_hours_end": {
                "type": "string",
                "description": "quiet_hours_end parameter"
            },
            "quiet_hours_timezone": {
                "type": "string",
                "description": "quiet_hours_timezone parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_throttle_stats_api_v2_contacts_throttle_stats_get',
    description: 'Get Throttle Stats',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "days": {
                "type": "integer",
                "description": "Number of days to include"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_throttle_log_api_v2_contacts_throttle_log_get',
    description: 'Get Throttle Log',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            },
            "contact_id": {
                "type": "string",
                "description": "Filter by contact ID"
            },
            "action": {
                "type": "string",
                "description": "action parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__get',
    description: 'Get Contact By External Id',
    inputSchema: {
        "type": "object",
        "properties": {
            "external_id": {
                "type": "string",
                "description": "external_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "external_id",
            "org_id"
        ]
    }
  },
  {
    name: 'list_contacts_api_v2_contacts__get',
    description: 'List Contacts',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "per_page": {
                "type": "integer",
                "description": "per_page parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "tags": {
                "type": "string",
                "description": "tags parameter"
            },
            "email": {
                "type": "string",
                "description": "email parameter"
            },
            "external_id": {
                "type": "string",
                "description": "Filter by external_id"
            },
            "min_nps": {
                "type": "string",
                "description": "min_nps parameter"
            },
            "max_nps": {
                "type": "string",
                "description": "max_nps parameter"
            },
            "source_system": {
                "type": "string",
                "description": "source_system parameter"
            },
            "sort_by": {
                "type": "string",
                "description": "sort_by parameter"
            },
            "sort_order": {
                "type": "string",
                "description": "sort_order parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'create_contact_api_v2_contacts__post',
    description: 'Create Contact',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "external_id": {
                "type": "string",
                "description": "Customer-defined identifier (e.g., CRM ID)"
            },
            "email": {
                "type": "string",
                "description": "email parameter"
            },
            "phone": {
                "type": "string",
                "description": "phone parameter"
            },
            "first_name": {
                "type": "string",
                "description": "first_name parameter"
            },
            "last_name": {
                "type": "string",
                "description": "last_name parameter"
            },
            "company": {
                "type": "string",
                "description": "company parameter"
            },
            "job_title": {
                "type": "string",
                "description": "job_title parameter"
            },
            "tags": {
                "type": "array",
                "description": "tags parameter"
            },
            "custom_attributes": {
                "type": "object",
                "description": "custom_attributes parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_contact_stats_api_v2_contacts__contact_id__stats_get',
    description: 'Get Contact Stats',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_contact_api_v2_contacts__contact_id__get',
    description: 'Get Contact',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'update_contact_api_v2_contacts__contact_id__patch',
    description: 'Update Contact',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "external_id": {
                "type": "string",
                "description": "Customer-defined identifier (e.g., CRM ID)"
            },
            "email": {
                "type": "string",
                "description": "email parameter"
            },
            "phone": {
                "type": "string",
                "description": "phone parameter"
            },
            "first_name": {
                "type": "string",
                "description": "first_name parameter"
            },
            "last_name": {
                "type": "string",
                "description": "last_name parameter"
            },
            "company": {
                "type": "string",
                "description": "company parameter"
            },
            "job_title": {
                "type": "string",
                "description": "job_title parameter"
            },
            "tags": {
                "type": "string",
                "description": "tags parameter"
            },
            "custom_attributes": {
                "type": "string",
                "description": "custom_attributes parameter"
            },
            "status": {
                "type": "string",
                "description": "status parameter"
            },
            "email_consent": {
                "type": "string",
                "description": "email_consent parameter"
            },
            "sms_consent": {
                "type": "string",
                "description": "sms_consent parameter"
            },
            "phone_consent": {
                "type": "string",
                "description": "phone_consent parameter"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'delete_contact_api_v2_contacts__contact_id__delete',
    description: 'Delete Contact',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'bulk_update_tags_api_v2_contacts_bulk_tags_post',
    description: 'Bulk Update Tags',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "contact_ids": {
                "type": "array",
                "description": "contact_ids parameter"
            },
            "add_tags": {
                "type": "array",
                "description": "add_tags parameter"
            },
            "remove_tags": {
                "type": "array",
                "description": "remove_tags parameter"
            }
        },
        "required": [
            "org_id",
            "contact_ids"
        ]
    }
  },
  {
    name: 'bulk_update_attributes_api_v2_contacts_bulk_attributes_post',
    description: 'Bulk Update Attributes',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "contact_ids": {
                "type": "array",
                "description": "contact_ids parameter"
            },
            "set_attributes": {
                "type": "object",
                "description": "set_attributes parameter"
            },
            "unset_attributes": {
                "type": "array",
                "description": "unset_attributes parameter"
            }
        },
        "required": [
            "org_id",
            "contact_ids"
        ]
    }
  },
  {
    name: 'check_throttle_api_v2_contacts__contact_id__can_contact_post',
    description: 'Check Throttle',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "channel": {
                "type": "string",
                "description": "channel parameter"
            },
            "source_system": {
                "type": "string",
                "description": "source_system parameter"
            },
            "source_id": {
                "type": "string",
                "description": "source_id parameter"
            },
            "is_transactional": {
                "type": "boolean",
                "description": "is_transactional parameter"
            }
        },
        "required": [
            "contact_id",
            "org_id",
            "channel",
            "source_system"
        ]
    }
  },
  {
    name: 'get_contact_source_links_api_v2_contacts__contact_id__source_links_get',
    description: 'Get Contact Source Links',
    inputSchema: {
        "type": "object",
        "properties": {
            "contact_id": {
                "type": "string",
                "description": "contact_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "contact_id",
            "org_id"
        ]
    }
  },
  {
    name: 'list_import_jobs_api_v2_contacts_import_get',
    description: 'List Import Jobs',
    inputSchema: {
        "type": "object",
        "properties": {
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_import_job_api_v2_contacts_import_post',
    description: 'Create Import Job',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_import_job_api_v2_contacts_import__job_id__get',
    description: 'Get Import Job',
    inputSchema: {
        "type": "object",
        "properties": {
            "job_id": {
                "type": "string",
                "description": "job_id parameter"
            }
        },
        "required": [
            "job_id"
        ]
    }
  },
  {
    name: 'preview_import_api_v2_contacts_import_preview_post',
    description: 'Preview Import',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'list_export_jobs_api_v2_contacts_export_get',
    description: 'List Export Jobs',
    inputSchema: {
        "type": "object",
        "properties": {
            "limit": {
                "type": "integer",
                "description": "limit parameter"
            },
            "offset": {
                "type": "integer",
                "description": "offset parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'create_export_job_api_v2_contacts_export_post',
    description: 'Create Export Job',
    inputSchema: {
        "type": "object",
        "properties": {
            "filter_criteria": {
                "type": "string",
                "description": "filter_criteria parameter"
            },
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "fields": {
                "type": "array",
                "description": "fields parameter"
            },
            "include_interactions": {
                "type": "boolean",
                "description": "include_interactions parameter"
            },
            "custom_attribute_keys": {
                "type": "array",
                "description": "custom_attribute_keys parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'quick_export_api_v2_contacts_export_quick_get',
    description: 'Quick Export',
    inputSchema: {
        "type": "object",
        "properties": {
            "segment_id": {
                "type": "string",
                "description": "segment_id parameter"
            },
            "status_filter": {
                "type": "string",
                "description": "status_filter parameter"
            },
            "tags": {
                "type": "string",
                "description": "tags parameter"
            }
        },
        "required": []
    }
  },
  {
    name: 'get_export_job_api_v2_contacts_export__job_id__get',
    description: 'Get Export Job',
    inputSchema: {
        "type": "object",
        "properties": {
            "job_id": {
                "type": "string",
                "description": "job_id parameter"
            }
        },
        "required": [
            "job_id"
        ]
    }
  },
  {
    name: 'download_export_api_v2_contacts_export__job_id__download_get',
    description: 'Download Export',
    inputSchema: {
        "type": "object",
        "properties": {
            "job_id": {
                "type": "string",
                "description": "job_id parameter"
            }
        },
        "required": [
            "job_id"
        ]
    }
  },
  {
    name: 'save_legacy_credentials_api_v2_migration_credentials_post',
    description: 'Save Legacy Credentials',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "user_id": {
                "type": "string",
                "description": "User ID"
            },
            "api_key": {
                "type": "string",
                "description": "Bearer token from legacy system"
            },
            "backend_url": {
                "type": "string",
                "description": "Custom backend URL (optional)"
            }
        },
        "required": [
            "org_id",
            "api_key"
        ]
    }
  },
  {
    name: 'delete_legacy_credentials_api_v2_migration_credentials_delete',
    description: 'Delete Legacy Credentials',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'validate_legacy_credentials_api_v2_migration_credentials_validate_post',
    description: 'Validate Legacy Credentials',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_credentials_status_api_v2_migration_credentials_status_get',
    description: 'Get Credentials Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'list_legacy_surveys_api_v2_migration_surveys_get',
    description: 'List Legacy Surveys',
    inputSchema: {
        "type": "object",
        "properties": {
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "page": {
                "type": "integer",
                "description": "Page number"
            },
            "per_page": {
                "type": "integer",
                "description": "Items per page"
            },
            "authorization": {
                "type": "string",
                "description": "authorization parameter"
            }
        },
        "required": [
            "org_id"
        ]
    }
  },
  {
    name: 'get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_get',
    description: 'Get Migration Status',
    inputSchema: {
        "type": "object",
        "properties": {
            "legacy_survey_id": {
                "type": "integer",
                "description": "legacy_survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            }
        },
        "required": [
            "legacy_survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_get',
    description: 'Preview Survey Migration',
    inputSchema: {
        "type": "object",
        "properties": {
            "legacy_survey_id": {
                "type": "integer",
                "description": "legacy_survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "authorization": {
                "type": "string",
                "description": "authorization parameter"
            }
        },
        "required": [
            "legacy_survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'import_survey_api_v2_migration_surveys_import_post',
    description: 'Import Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "authorization": {
                "type": "string",
                "description": "authorization parameter"
            },
            "legacy_survey_id": {
                "type": "integer",
                "description": "legacy_survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "creator_id": {
                "type": "string",
                "description": "ID of the user creating the survey"
            },
            "import_responses": {
                "type": "boolean",
                "description": "Whether to import responses immediately"
            }
        },
        "required": [
            "legacy_survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'import_survey_responses_api_v2_migration_responses_import_post',
    description: 'Import Survey Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "authorization": {
                "type": "string",
                "description": "authorization parameter"
            },
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "legacy_survey_id": {
                "type": "integer",
                "description": "legacy_survey_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "start_date": {
                "type": "string",
                "description": "Start date for response import (ISO format)"
            },
            "end_date": {
                "type": "string",
                "description": "End date for response import (ISO format)"
            },
            "batch_size": {
                "type": "integer",
                "description": "Batch size for import"
            }
        },
        "required": [
            "survey_id",
            "legacy_survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'import_responses_for_survey_api_v2_migration_surveys__survey_id__import_responses_post',
    description: 'Import Responses For Survey',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "legacy_survey_id": {
                "type": "integer",
                "description": "Legacy survey ID"
            },
            "org_id": {
                "type": "integer",
                "description": "Organization ID"
            },
            "authorization": {
                "type": "string",
                "description": "authorization parameter"
            }
        },
        "required": [
            "survey_id",
            "legacy_survey_id",
            "org_id"
        ]
    }
  },
  {
    name: 'get_migration_progress_api_v2_migration_status__migration_id__get',
    description: 'Get Migration Progress',
    inputSchema: {
        "type": "object",
        "properties": {
            "migration_id": {
                "type": "string",
                "description": "migration_id parameter"
            }
        },
        "required": [
            "migration_id"
        ]
    }
  },
  {
    name: 'chat_http_api_v2_zagents_chat_post',
    description: 'Chat Http',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'chat_http_v2_api_v2_zagents_chat_post',
    description: 'Chat Http',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'health_check_v2_api_v2_zagents_health_get',
    description: 'Health Check',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'create_voice_token_api_v2_zagents_voice_token_post',
    description: 'Create Voice Token',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'voice_health_check_api_v2_zagents_voice_health_get',
    description: 'Voice Health Check',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'execute_function_api_v2_zagents_voice_functions_execute_post',
    description: 'Execute Function',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "arguments": {
                "type": "object",
                "description": "arguments parameter"
            },
            "call_id": {
                "type": "string",
                "description": "call_id parameter"
            },
            "org_id": {
                "type": "integer",
                "description": "org_id parameter"
            },
            "user_id": {
                "type": "integer",
                "description": "user_id parameter"
            }
        },
        "required": [
            "name",
            "arguments",
            "call_id",
            "org_id"
        ]
    }
  },
  {
    name: 'list_functions_api_v2_zagents_voice_functions_list_get',
    description: 'List Functions',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'zenguide_chat_api_v2_zagents_zenguide_chat_post',
    description: 'Zenguide Chat',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'get_widget_responses_api_v2_widget_surveys__survey_id__responses_get',
    description: 'Get Widget Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_ids": {
                "type": "string",
                "description": "List of question IDs to include (optional)"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_get',
    description: 'Get Widget Visual Responses',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "query": {
                "type": "string",
                "description": "Search term for images"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            },
            "use_videos": {
                "type": "boolean",
                "description": "Include videos"
            }
        },
        "required": [
            "survey_id"
        ]
    }
  },
  {
    name: 'get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__get',
    description: 'Get Widget Gominga Reviews',
    inputSchema: {
        "type": "object",
        "properties": {
            "organization_id": {
                "type": "integer",
                "description": "organization_id parameter"
            },
            "review_type": {
                "type": "string",
                "description": "Filter by review type (PRODUCT_REVIEW, LOCATION_REVIEW, etc.)"
            },
            "platform": {
                "type": "string",
                "description": "Filter by platform"
            },
            "min_rating": {
                "type": "string",
                "description": "Minimum rating to include"
            },
            "page": {
                "type": "integer",
                "description": "page parameter"
            },
            "page_size": {
                "type": "integer",
                "description": "page_size parameter"
            }
        },
        "required": [
            "organization_id"
        ]
    }
  },
  {
    name: 'test_widget_api_api_v2_test_widget_api_get',
    description: 'Test Widget Api',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'root__get',
    description: 'Root',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'health_health_get',
    description: 'Health',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'scheduler_health_health_scheduler_get',
    description: 'Scheduler Health',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'memory_health_health_memory_get',
    description: 'Memory Health',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'list_widget_embeds_api_v2_widget_embeds__get',
    description: 'List Widget Embeds',
    inputSchema: {
        "type": "object",
        "properties": {},
        "required": []
    }
  },
  {
    name: 'create_widget_embed_api_v2_widget_embeds__post',
    description: 'Create Widget Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "question_name parameter"
            },
            "allowed_domains": {
                "type": "array",
                "description": "allowed_domains parameter"
            },
            "theme": {
                "type": "string",
                "description": "theme parameter"
            },
            "width": {
                "type": "string",
                "description": "width parameter"
            },
            "strict_domain_check": {
                "type": "boolean",
                "description": "strict_domain_check parameter"
            },
            "time_range": {
                "type": "string",
                "description": "time_range parameter"
            }
        },
        "required": [
            "name",
            "survey_id",
            "question_name",
            "allowed_domains"
        ]
    }
  },
  {
    name: 'get_widget_embed_api_v2_widget_embeds__embed_id__get',
    description: 'Get Widget Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "embed_id": {
                "type": "string",
                "description": "embed_id parameter"
            }
        },
        "required": [
            "embed_id"
        ]
    }
  },
  {
    name: 'update_widget_embed_api_v2_widget_embeds__embed_id__put',
    description: 'Update Widget Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "embed_id": {
                "type": "string",
                "description": "embed_id parameter"
            },
            "name": {
                "type": "string",
                "description": "name parameter"
            },
            "survey_id": {
                "type": "string",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "question_name parameter"
            },
            "allowed_domains": {
                "type": "string",
                "description": "allowed_domains parameter"
            },
            "theme": {
                "type": "string",
                "description": "theme parameter"
            },
            "width": {
                "type": "string",
                "description": "width parameter"
            },
            "strict_domain_check": {
                "type": "string",
                "description": "strict_domain_check parameter"
            },
            "time_range": {
                "type": "string",
                "description": "time_range parameter"
            }
        },
        "required": [
            "embed_id"
        ]
    }
  },
  {
    name: 'delete_widget_embed_api_v2_widget_embeds__embed_id__delete',
    description: 'Delete Widget Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "embed_id": {
                "type": "string",
                "description": "embed_id parameter"
            }
        },
        "required": [
            "embed_id"
        ]
    }
  },
  {
    name: 'get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__get',
    description: 'Get Widget Embed By Survey Question',
    inputSchema: {
        "type": "object",
        "properties": {
            "survey_id": {
                "type": "integer",
                "description": "survey_id parameter"
            },
            "question_name": {
                "type": "string",
                "description": "question_name parameter"
            }
        },
        "required": [
            "survey_id",
            "question_name"
        ]
    }
  },
  {
    name: 'update_allowed_domains_api_v2_widget_embeds__embed_id__domains_patch',
    description: 'Update Allowed Domains',
    inputSchema: {
        "type": "object",
        "properties": {
            "embed_id": {
                "type": "string",
                "description": "embed_id parameter"
            },
            "allowed_domains": {
                "type": "array",
                "description": "allowed_domains parameter"
            }
        },
        "required": [
            "embed_id",
            "allowed_domains"
        ]
    }
  },
  {
    name: 'toggle_widget_embed_api_v2_widget_embeds__embed_id__toggle_patch',
    description: 'Toggle Widget Embed',
    inputSchema: {
        "type": "object",
        "properties": {
            "embed_id": {
                "type": "string",
                "description": "embed_id parameter"
            }
        },
        "required": [
            "embed_id"
        ]
    }
  }
];

// Tool call handlers
async function handle_get_user_profile_api_v2_auth_me_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/auth/me`);
}

async function handle_list_api_keys_api_v2_auth_api_keys_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/auth/api-keys`);
}

async function handle_create_api_key_api_v2_auth_api_keys_post(args: Record<string, unknown>) {
  const { org_id, name, description, expires_at, scopes } = args as {
    org_id: number;
    name?: string;
    description?: string;
    expires_at?: string;
    scopes?: unknown[];
  };

  return apiClient.post(`/api/v2/auth/api-keys`, { org_id, name, description, expires_at, scopes });
}

async function handle_validate_token_api_v2_auth_validate_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/auth/validate`);
}

async function handle_delete_api_key_api_v2_auth_api_keys__key_id__delete(args: Record<string, unknown>) {
  const { key_id, org_id } = args as {
    key_id: string;
    org_id: number;
  };

  return apiClient.delete(`/api/v2/auth/api-keys/${key_id}`);
}

async function handle_set_organization_api_v2_auth_set_organization_post(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.post(`/api/v2/auth/set-organization`, { org_id });
}

async function handle_get_api_logs_api_v2_auth_api_keys__key_id__logs_get(args: Record<string, unknown>) {
  const { key_id, log_type, limit, offset } = args as {
    key_id: string;
    log_type?: string;
    limit?: number;
    offset?: number;
  };

  return apiClient.get(`/api/v2/auth/api-keys/${key_id}/logs`);
}

async function handle_get_api_documentation_api_v2_auth_docs_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/auth/docs`);
}

async function handle_generate_example_code_api_v2_auth_generate_code_post(args: Record<string, unknown>) {
  const { use_case, language, framework, authentication_type, follow_up_question, conversation_history } = args as {
    use_case: string;
    language: string;
    framework?: string;
    authentication_type?: string;
    follow_up_question?: string;
    conversation_history?: string;
  };

  return apiClient.post(`/api/v2/auth/generate-code`, { use_case, language, framework, authentication_type, follow_up_question, conversation_history });
}

async function handle_list_survey_names_api_v2_surveys_names_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/surveys/names`);
}

async function handle_get_surveys_api_v2_surveys__get(args: Record<string, unknown>) {
  const { page, page_size, tags, search, status, sort_by, sort_order, details } = args as {
    page?: number;
    page_size?: number;
    tags?: string;
    search?: string;
    status?: string;
    sort_by?: string;
    sort_order?: string;
    details?: string;
  };

  return apiClient.get(`/api/v2/surveys/`);
}

async function handle_create_survey_api_v2_surveys__post(args: Record<string, unknown>) {
  const { org_id, survey_name, survey_description, survey_json, theme_json, status, creator_id, dictionary_id } = args as {
    org_id?: string;
    survey_name: string;
    survey_description?: string;
    survey_json: Record<string, unknown>;
    theme_json?: string;
    status?: string;
    creator_id?: string;
    dictionary_id?: string;
  };

  return apiClient.post(`/api/v2/surveys/`, { org_id, survey_name, survey_description, survey_json, theme_json, status, creator_id, dictionary_id });
}

async function handle_list_tags_api_v2_surveys_tags_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/surveys/tags`);
}

async function handle_create_tag_api_v2_surveys_tags_post(args: Record<string, unknown>) {
  const { name, org_id, is_favorite, auto_generated } = args as {
    name: string;
    org_id: number;
    is_favorite?: boolean;
    auto_generated?: boolean;
  };

  return apiClient.post(`/api/v2/surveys/tags`, { name, org_id, is_favorite, auto_generated });
}

async function handle_update_tag_api_v2_surveys_tags__tag_id__put(args: Record<string, unknown>) {
  const { tag_id, name, is_favorite } = args as {
    tag_id: string;
    name?: string;
    is_favorite?: string;
  };

  return apiClient.put(`/api/v2/surveys/tags/${tag_id}`, { name, is_favorite });
}

async function handle_delete_tag_api_v2_surveys_tags__tag_id__delete(args: Record<string, unknown>) {
  const { tag_id } = args as {
    tag_id: string;
  };

  return apiClient.delete(`/api/v2/surveys/tags/${tag_id}`);
}

async function handle_get_tags_by_groups_api_v2_surveys_tags_by_groups_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/surveys/tags-by-groups`);
}

async function handle_get_survey_api_v2_surveys__survey_id__get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}`);
}

async function handle_update_survey_api_v2_surveys__survey_id__put(args: Record<string, unknown>) {
  const { survey_id, survey_name, survey_description, survey_json, theme_json, status, dictionary_id } = args as {
    survey_id: string;
    survey_name?: string;
    survey_description?: string;
    survey_json?: string;
    theme_json?: string;
    status?: string;
    dictionary_id?: string;
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}`, { survey_name, survey_description, survey_json, theme_json, status, dictionary_id });
}

async function handle_delete_survey_api_v2_surveys__survey_id__delete(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.delete(`/api/v2/surveys/${survey_id}`);
}

async function handle_update_survey_status_api_v2_surveys__survey_id__status_put(args: Record<string, unknown>) {
  const { survey_id, status } = args as {
    survey_id: string;
    status: string;
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}/status`, { status });
}

async function handle_get_html_embed_api_v2_surveys__survey_id__html_embed_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/html-embed`);
}

async function handle_create_html_embed_api_v2_surveys__survey_id__html_embed_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/html-embed`);
}

async function handle_update_html_embed_api_v2_surveys__survey_id__html_embed_put(args: Record<string, unknown>) {
  const { survey_id, html_code } = args as {
    survey_id: string;
    html_code: string;
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}/html-embed`, { html_code });
}

async function handle_update_html_with_instructions_api_v2_surveys__survey_id__html_update_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/html-update`);
}

async function handle_get_survey_definition_api_v2_surveys__survey_id__definition_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/definition`);
}

async function handle_get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/clean-definition`);
}

async function handle_get_survey_filters_api_v2_surveys__survey_id__filters_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/filters`);
}

async function handle_get_survey_labels_api_v2_surveys__survey_id__labels_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/labels`);
}

async function handle_process_survey_labels_api_v2_surveys__survey_id__process_labels_post(args: Record<string, unknown>) {
  const { survey_id, org_id } = args as {
    survey_id: string;
    org_id: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/process_labels`, { org_id });
}

async function handle_clone_survey_api_v2_surveys__survey_id__clone_post(args: Record<string, unknown>) {
  const { survey_id, new_name, org_id, copy_responses, copy_dashboard } = args as {
    survey_id: string;
    new_name: string;
    org_id: number;
    copy_responses?: boolean;
    copy_dashboard?: boolean;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/clone`, { new_name, org_id, copy_responses, copy_dashboard });
}

async function handle_list_themes_api_v2_surveys_themes_get(args: Record<string, unknown>) {
  const { org_id, page, page_size } = args as {
    org_id: number;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/surveys/themes`);
}

async function handle_create_theme_api_v2_surveys_themes_post(args: Record<string, unknown>) {
  const { name, description, theme_json, org_id, is_default } = args as {
    name: string;
    description?: string;
    theme_json: Record<string, unknown>;
    org_id: number;
    is_default?: boolean;
  };

  return apiClient.post(`/api/v2/surveys/themes`, { name, description, theme_json, org_id, is_default });
}

async function handle_get_theme_api_v2_surveys_themes__theme_id__get(args: Record<string, unknown>) {
  const { theme_id, org_id } = args as {
    theme_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/surveys/themes/${theme_id}`);
}

async function handle_update_theme_api_v2_surveys_themes__theme_id__put(args: Record<string, unknown>) {
  const { theme_id, name, description, theme_json, is_default } = args as {
    theme_id: string;
    name?: string;
    description?: string;
    theme_json?: string;
    is_default?: string;
  };

  return apiClient.put(`/api/v2/surveys/themes/${theme_id}`, { name, description, theme_json, is_default });
}

async function handle_delete_theme_api_v2_surveys_themes__theme_id__delete(args: Record<string, unknown>) {
  const { theme_id, org_id } = args as {
    theme_id: string;
    org_id: number;
  };

  return apiClient.delete(`/api/v2/surveys/themes/${theme_id}`);
}

async function handle_get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_get(args: Record<string, unknown>) {
  const { survey_id, org_id } = args as {
    survey_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/trigger-configuration`);
}

async function handle_update_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_patch(args: Record<string, unknown>) {
  const { survey_id, org_id } = args as {
    survey_id: string;
    org_id: number;
  };

  return apiClient.patch(`/api/v2/surveys/${survey_id}/trigger-configuration`, { org_id });
}

async function handle_generate_survey_api_v2_surveys_generate_post(args: Record<string, unknown>) {
  const { user_prompt, style_guidelines, target_audience, survey_type } = args as {
    user_prompt: string;
    style_guidelines?: string;
    target_audience?: string;
    survey_type?: string;
  };

  return apiClient.post(`/api/v2/surveys/generate`, { user_prompt, style_guidelines, target_audience, survey_type });
}

async function handle_auto_tag_survey_api_v2_surveys__survey_id__auto_tag_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/auto-tag`);
}

async function handle_get_survey_tags_api_v2_surveys__survey_id__tags_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/tags`);
}

async function handle_update_survey_tags_api_v2_surveys__survey_id__tags_put(args: Record<string, unknown>) {
  const { survey_id, tag_ids } = args as {
    survey_id: string;
    tag_ids: unknown[];
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}/tags`, { tag_ids });
}

async function handle_auto_tag_organization_api_v2_surveys_auto_tag_org_post(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.post(`/api/v2/surveys/auto-tag-org`, { org_id });
}

async function handle_get_public_survey_api_v2_surveys_public__survey_id__get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/public/${survey_id}`);
}

async function handle_initiate_phone_survey_api_v2_surveys__survey_id__call_post(args: Record<string, unknown>) {
  const { survey_id, phone_number, from_number, voice, language, webhook_url, metadata } = args as {
    survey_id: string;
    phone_number: string;
    from_number?: string;
    voice?: string;
    language?: string;
    webhook_url?: string;
    metadata?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/call`, { phone_number, from_number, voice, language, webhook_url, metadata });
}

async function handle_handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-webhook`);
}

async function handle_list_organization_responses_api_v2_organizations_responses_get(args: Record<string, unknown>) {
  const { survey_id, date_range, start_date, end_date, filters, page, page_size, status, search, search_type, sort_by, sort_order } = args as {
    survey_id?: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
    page?: number;
    page_size?: number;
    status?: string;
    search?: string;
    search_type?: string;
    sort_by?: string;
    sort_order?: string;
  };

  return apiClient.get(`/api/v2/organizations/responses`);
}

async function handle_list_responses_api_v2_surveys__survey_id__responses_get(args: Record<string, unknown>) {
  const { survey_id, date_range, start_date, end_date, filters, page, page_size, status, search, search_type, sort_by, sort_order } = args as {
    survey_id: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
    page?: number;
    page_size?: number;
    status?: string;
    search?: string;
    search_type?: string;
    sort_by?: string;
    sort_order?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/responses`);
}

async function handle_submit_response_api_v2_surveys__survey_id__responses_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/responses`);
}

async function handle_sync_responses_api_v2_surveys__survey_id__responses_sync_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/responses/sync`);
}

async function handle_get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_get(args: Record<string, unknown>) {
  const { survey_id, date_range, start_date, end_date, filters } = args as {
    survey_id: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/responses/aggregate`);
}

async function handle_get_response_properties_api_v2_surveys__survey_id__responses_properties_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/responses/properties`);
}

async function handle_get_response_api_v2_surveys__survey_id__responses__response_id__get(args: Record<string, unknown>) {
  const { survey_id, response_id } = args as {
    survey_id: string;
    response_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/responses/${response_id}`);
}

async function handle_update_response_api_v2_surveys__survey_id__responses__response_id__put(args: Record<string, unknown>) {
  const { survey_id, response_id } = args as {
    survey_id: string;
    response_id: string;
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}/responses/${response_id}`);
}

async function handle_delete_response_api_v2_surveys__survey_id__responses__response_id__delete(args: Record<string, unknown>) {
  const { survey_id, response_id } = args as {
    survey_id: string;
    response_id: string;
  };

  return apiClient.delete(`/api/v2/surveys/${survey_id}/responses/${response_id}`);
}

async function handle_generate_mock_responses_api_v2_surveys__survey_id__responses_mock_post(args: Record<string, unknown>) {
  const { survey_id, org_id, num_responses } = args as {
    survey_id: string;
    org_id: string;
    num_responses?: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/responses/mock`, { org_id, num_responses });
}

async function handle_get_public_widget_responses_api_v2_surveys__survey_id__public_responses_get(args: Record<string, unknown>) {
  const { survey_id, question_ids, page, page_size } = args as {
    survey_id: string;
    question_ids: unknown[];
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/public-responses`);
}

async function handle_get_visual_responses_api_v2_surveys__survey_id__visual_responses_get(args: Record<string, unknown>) {
  const { survey_id, query, page, page_size, orientation, size, use_videos, video_max_duration } = args as {
    survey_id: string;
    query?: string;
    page?: number;
    page_size?: number;
    orientation?: string;
    size?: string;
    use_videos?: boolean;
    video_max_duration?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/visual-responses`);
}

async function handle_list_notes_api_v2_responses__response_id__notes_get(args: Record<string, unknown>) {
  const { response_id } = args as {
    response_id: number;
  };

  return apiClient.get(`/api/v2/responses/${response_id}/notes`);
}

async function handle_create_note_api_v2_responses__response_id__notes_post(args: Record<string, unknown>) {
  const { response_id, note } = args as {
    response_id: number;
    note: string;
  };

  return apiClient.post(`/api/v2/responses/${response_id}/notes`, { note });
}

async function handle_update_note_api_v2_responses__response_id__notes__note_id__put(args: Record<string, unknown>) {
  const { response_id, note_id, note } = args as {
    response_id: number;
    note_id: number;
    note: string;
  };

  return apiClient.put(`/api/v2/responses/${response_id}/notes/${note_id}`, { note });
}

async function handle_delete_note_api_v2_responses__response_id__notes__note_id__delete(args: Record<string, unknown>) {
  const { response_id, note_id } = args as {
    response_id: number;
    note_id: number;
  };

  return apiClient.delete(`/api/v2/responses/${response_id}/notes/${note_id}`);
}

async function handle_get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/organizations/responses/notes/ids`);
}

async function handle_generate_graphs_api_v2_surveys__survey_id__graphs_generate_post(args: Record<string, unknown>) {
  const { survey_id, questions, graph_type, date_range, start_date, end_date, filters } = args as {
    survey_id: string;
    questions: unknown[];
    graph_type?: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/graphs/generate`, { questions, graph_type, date_range, start_date, end_date, filters });
}

async function handle_generate_insights_api_v2_surveys__survey_id__insights_post(args: Record<string, unknown>) {
  const { survey_id, questions, insight_type, date_range, start_date, end_date, filters } = args as {
    survey_id: string;
    questions: unknown[];
    insight_type: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/insights`, { questions, insight_type, date_range, start_date, end_date, filters });
}

async function handle_get_analytics_summary_api_v2_surveys__survey_id__summary_get(args: Record<string, unknown>) {
  const { survey_id, org_id, date_range, start_date, end_date } = args as {
    survey_id: string;
    org_id?: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/summary`);
}

async function handle_update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_post(args: Record<string, unknown>) {
  const { survey_id, question_name, org_id, result_id, literal_word_counts, semantic_word_counts } = args as {
    survey_id: string;
    question_name: string;
    org_id: number;
    result_id: number;
    literal_word_counts?: string;
    semantic_word_counts?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/tag-cloud`, { question_name, org_id, result_id, literal_word_counts, semantic_word_counts });
}

async function handle_export_analytics_api_v2_surveys__survey_id__export_post(args: Record<string, unknown>) {
  const { survey_id, format, questions, date_range, start_date, end_date, filters, webhook_url, emails } = args as {
    survey_id: string;
    format: string;
    questions?: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
    webhook_url?: string;
    emails?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/export`, { format, questions, date_range, start_date, end_date, filters, webhook_url, emails });
}

async function handle_get_export_status_api_v2_surveys__survey_id__export__request_id__get(args: Record<string, unknown>) {
  const { survey_id, request_id } = args as {
    survey_id: string;
    request_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/export/${request_id}`);
}

async function handle_create_export_api_v2_exports_surveys__survey_id__export_post(args: Record<string, unknown>) {
  const { survey_id, format, date_range, start_date, end_date, filters, webhook_url, emails, language, search, search_type } = args as {
    survey_id: string;
    format: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
    webhook_url?: string;
    emails?: string;
    language?: string;
    search?: string;
    search_type?: string;
  };

  return apiClient.post(`/api/v2/exports/surveys/${survey_id}/export`, { format, date_range, start_date, end_date, filters, webhook_url, emails, language, search, search_type });
}

async function handle_get_export_status_api_v2_exports_surveys__survey_id__export__request_id__get(args: Record<string, unknown>) {
  const { survey_id, request_id } = args as {
    survey_id: string;
    request_id: string;
  };

  return apiClient.get(`/api/v2/exports/surveys/${survey_id}/export/${request_id}`);
}

async function handle_cancel_export_api_v2_exports_surveys__survey_id__export__request_id__delete(args: Record<string, unknown>) {
  const { survey_id, request_id } = args as {
    survey_id: string;
    request_id: string;
  };

  return apiClient.delete(`/api/v2/exports/surveys/${survey_id}/export/${request_id}`);
}

async function handle_download_csv_api_v2_exports_surveys__survey_id__download_csv_post(args: Record<string, unknown>) {
  const { survey_id, format, date_range, start_date, end_date, filters, webhook_url, emails, language, search, search_type } = args as {
    survey_id: string;
    format: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
    webhook_url?: string;
    emails?: string;
    language?: string;
    search?: string;
    search_type?: string;
  };

  return apiClient.post(`/api/v2/exports/surveys/${survey_id}/download-csv`, { format, date_range, start_date, end_date, filters, webhook_url, emails, language, search, search_type });
}

async function handle_cleanup_export_files_api_v2_exports_exports_cleanup_post(args: Record<string, unknown>) {
  const { max_age_hours } = args as {
    max_age_hours?: number;
  };

  return apiClient.post(`/api/v2/exports/exports/cleanup`, { max_age_hours });
}

async function handle_chat_with_surveys_api_v2_surveys_chat_post(args: Record<string, unknown>) {
  const { user_id, survey_id, initial_message, preferences } = args as {
    user_id: string;
    survey_id?: string;
    initial_message?: string;
    preferences?: string;
  };

  return apiClient.post(`/api/v2/surveys/chat`, { user_id, survey_id, initial_message, preferences });
}

async function handle_get_groups_api_v2_group__get(args: Record<string, unknown>) {
  const { org_id, page, page_size } = args as {
    org_id: number;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/group/`);
}

async function handle_create_group_api_v2_group__post(args: Record<string, unknown>) {
  const { name, org_id, user_roles, survey_ids, created_by, user_id } = args as {
    name: string;
    org_id: number;
    user_roles?: unknown[];
    survey_ids?: unknown[];
    created_by?: string;
    user_id?: string;
  };

  return apiClient.post(`/api/v2/group/`, { name, org_id, user_roles, survey_ids, created_by, user_id });
}

async function handle_update_group_api_v2_group__group_id__put(args: Record<string, unknown>) {
  const { group_id, group_name, survey_ids, user_roles } = args as {
    group_id: number;
    group_name?: string;
    survey_ids?: string;
    user_roles?: string;
  };

  return apiClient.put(`/api/v2/group/${group_id}`, { group_name, survey_ids, user_roles });
}

async function handle_delete_group_api_v2_group__group_id__delete(args: Record<string, unknown>) {
  const { group_id } = args as {
    group_id: number;
  };

  return apiClient.delete(`/api/v2/group/${group_id}`);
}

async function handle_add_users_to_group_api_v2_group__group_id__users_post(args: Record<string, unknown>) {
  const { group_id, user_ids, role } = args as {
    group_id: string;
    user_ids: unknown[];
    role: string;
  };

  return apiClient.post(`/api/v2/group/${group_id}/users`, { user_ids, role });
}

async function handle_get_group_surveys_api_v2_group__group_id__surveys_get(args: Record<string, unknown>) {
  const { group_id, user_role } = args as {
    group_id: string;
    user_role?: string;
  };

  return apiClient.get(`/api/v2/group/${group_id}/surveys`);
}

async function handle_assign_surveys_to_group_api_v2_group__group_id__surveys_post(args: Record<string, unknown>) {
  const { group_id, survey_ids } = args as {
    group_id: string;
    survey_ids: unknown[];
  };

  return apiClient.post(`/api/v2/group/${group_id}/surveys`, { survey_ids });
}

async function handle_get_group_details_api_v2_group_details__get(args: Record<string, unknown>) {
  const { group_id, org_id, user_id, user_roles } = args as {
    group_id?: string;
    org_id?: string;
    user_id?: string;
    user_roles?: string;
  };

  return apiClient.get(`/api/v2/group/details/`);
}

async function handle_get_theme_api_v2_themes__theme_id__get(args: Record<string, unknown>) {
  const { theme_id } = args as {
    theme_id: string;
  };

  return apiClient.get(`/api/v2/themes/${theme_id}`);
}

async function handle_update_theme_api_v2_themes__theme_id__put(args: Record<string, unknown>) {
  const { theme_id, name, theme_json, org_id } = args as {
    theme_id: string;
    name: string;
    theme_json: Record<string, unknown>;
    org_id: number;
  };

  return apiClient.put(`/api/v2/themes/${theme_id}`, { name, theme_json, org_id });
}

async function handle_delete_theme_api_v2_themes__theme_id__delete(args: Record<string, unknown>) {
  const { theme_id } = args as {
    theme_id: string;
  };

  return apiClient.delete(`/api/v2/themes/${theme_id}`);
}

async function handle_get_themes_api_v2_themes__get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/themes/`);
}

async function handle_create_theme_api_v2_themes__post(args: Record<string, unknown>) {
  const { name, theme_json, org_id } = args as {
    name: string;
    theme_json: Record<string, unknown>;
    org_id: number;
  };

  return apiClient.post(`/api/v2/themes/`, { name, theme_json, org_id });
}

async function handle_get_dictionaries_api_v2_dictionaries__get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/dictionaries/`);
}

async function handle_get_survey_cx_api_v2_surveys__survey_id__cx_get(args: Record<string, unknown>) {
  const { survey_id, question_name, start_date, end_date, date_range, date_grouping, page_size, filters } = args as {
    survey_id: string;
    question_name?: string;
    start_date?: string;
    end_date?: string;
    date_range?: string;
    date_grouping?: string;
    page_size?: string;
    filters?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/cx`);
}

async function handle_suggest_report_name_api_v2_business_insights_name_suggestion_post(args: Record<string, unknown>) {
  const { journey, touchpoints, insight_type, target_audience } = args as {
    journey: string;
    touchpoints: unknown[];
    insight_type: string;
    target_audience: unknown[];
  };

  return apiClient.post(`/api/v2/business-insights/name-suggestion`, { journey, touchpoints, insight_type, target_audience });
}

async function handle_update_html_with_instructions_api_v2_html_update_post(args: Record<string, unknown>) {
  const { html_code, instructions } = args as {
    html_code: string;
    instructions: string;
  };

  return apiClient.post(`/api/v2/html-update`, { html_code, instructions });
}

async function handle_list_templates_api_v2_templates__get(args: Record<string, unknown>) {
  const { access_type, category, industry, customer_journey, touchpoint, is_popular, page, page_size, search } = args as {
    access_type?: string;
    category?: string;
    industry?: string;
    customer_journey?: string;
    touchpoint?: string;
    is_popular?: string;
    page?: number;
    page_size?: number;
    search?: string;
  };

  return apiClient.get(`/api/v2/templates/`);
}

async function handle_create_template_api_v2_templates__post(args: Record<string, unknown>) {
  const { name, description, survey_json, questions, access_type, org_id, icon, category, is_popular, industry, customer_journey, touchpoint } = args as {
    name: string;
    description?: string;
    survey_json: Record<string, unknown>;
    questions?: unknown[];
    access_type?: string;
    org_id?: string;
    icon?: string;
    category?: string;
    is_popular?: boolean;
    industry?: string;
    customer_journey?: string;
    touchpoint?: string;
  };

  return apiClient.post(`/api/v2/templates/`, { name, description, survey_json, questions, access_type, org_id, icon, category, is_popular, industry, customer_journey, touchpoint });
}

async function handle_get_template_api_v2_templates__template_id__get(args: Record<string, unknown>) {
  const { template_id } = args as {
    template_id: string;
  };

  return apiClient.get(`/api/v2/templates/${template_id}`);
}

async function handle_update_template_api_v2_templates__template_id__put(args: Record<string, unknown>) {
  const { template_id, name, description, survey_json, questions, access_type, org_id, icon, category, is_popular, industry, customer_journey, touchpoint, updator_id } = args as {
    template_id: string;
    name?: string;
    description?: string;
    survey_json?: string;
    questions?: string;
    access_type?: string;
    org_id?: string;
    icon?: string;
    category?: string;
    is_popular?: string;
    industry?: string;
    customer_journey?: string;
    touchpoint?: string;
    updator_id?: string;
  };

  return apiClient.put(`/api/v2/templates/${template_id}`, { name, description, survey_json, questions, access_type, org_id, icon, category, is_popular, industry, customer_journey, touchpoint, updator_id });
}

async function handle_delete_template_api_v2_templates__template_id__delete(args: Record<string, unknown>) {
  const { template_id } = args as {
    template_id: string;
  };

  return apiClient.delete(`/api/v2/templates/${template_id}`);
}

async function handle_autocomplete_api_v2_autocomplete__get(args: Record<string, unknown>) {
  const { search, limit } = args as {
    search: string;
    limit?: number;
  };

  return apiClient.get(`/api/v2/autocomplete/`);
}

async function handle_get_workflows_endpoint_api_v2_workflows__get(args: Record<string, unknown>) {
  const { organization_id } = args as {
    organization_id: string;
  };

  return apiClient.get(`/api/v2/workflows/`);
}

async function handle_create_workflow_endpoint_api_v2_workflows__post(args: Record<string, unknown>) {
  const { id, name, surveyId, emails, alertEnabled, organizationId, emailBody, filterByQuestion, channel, webhookUrl, webhookPayloadFormat, webhookIncludeMetadata, webhookCustomHeaders, webhookCustomPayload, webhookSecretKey, webhookTimeoutSeconds, webhookRetryCount, zendeskApiKey, zendeskSubdomain, zendeskEmail, emarsysApiKey, emarsysSecretKey, emarsysActionType, emarsysEventId, emarsysSegmentId, emarsysFieldMappings, emarsysIdentifierField, salesforceClientId, salesforceClientSecret, salesforceAccessToken, salesforceRefreshToken, salesforceInstanceUrl, salesforceConnectedOrgId, salesforceFieldMappings } = args as {
    id?: string;
    name: string;
    surveyId: string;
    emails: unknown[];
    alertEnabled: boolean;
    organizationId: string;
    emailBody?: string;
    filterByQuestion?: string;
    channel?: string;
    webhookUrl?: string;
    webhookPayloadFormat?: string;
    webhookIncludeMetadata?: boolean;
    webhookCustomHeaders?: string;
    webhookCustomPayload?: string;
    webhookSecretKey?: string;
    webhookTimeoutSeconds?: number;
    webhookRetryCount?: number;
    zendeskApiKey?: string;
    zendeskSubdomain?: string;
    zendeskEmail?: string;
    emarsysApiKey?: string;
    emarsysSecretKey?: string;
    emarsysActionType?: string;
    emarsysEventId?: string;
    emarsysSegmentId?: string;
    emarsysFieldMappings?: string;
    emarsysIdentifierField?: string;
    salesforceClientId?: string;
    salesforceClientSecret?: string;
    salesforceAccessToken?: string;
    salesforceRefreshToken?: string;
    salesforceInstanceUrl?: string;
    salesforceConnectedOrgId?: string;
    salesforceFieldMappings?: string;
  };

  return apiClient.post(`/api/v2/workflows/`, { id, name, surveyId, emails, alertEnabled, organizationId, emailBody, filterByQuestion, channel, webhookUrl, webhookPayloadFormat, webhookIncludeMetadata, webhookCustomHeaders, webhookCustomPayload, webhookSecretKey, webhookTimeoutSeconds, webhookRetryCount, zendeskApiKey, zendeskSubdomain, zendeskEmail, emarsysApiKey, emarsysSecretKey, emarsysActionType, emarsysEventId, emarsysSegmentId, emarsysFieldMappings, emarsysIdentifierField, salesforceClientId, salesforceClientSecret, salesforceAccessToken, salesforceRefreshToken, salesforceInstanceUrl, salesforceConnectedOrgId, salesforceFieldMappings });
}

async function handle_update_workflow_endpoint_api_v2_workflows__id__put(args: Record<string, unknown>) {
  const { id, name, surveyId, emails, alertEnabled, organizationId, emailBody, filterByQuestion, channel, webhookUrl, webhookPayloadFormat, webhookIncludeMetadata, webhookCustomHeaders, webhookCustomPayload, webhookSecretKey, webhookTimeoutSeconds, webhookRetryCount, zendeskApiKey, zendeskSubdomain, zendeskEmail, emarsysApiKey, emarsysSecretKey, emarsysActionType, emarsysEventId, emarsysSegmentId, emarsysFieldMappings, emarsysIdentifierField, salesforceClientId, salesforceClientSecret, salesforceAccessToken, salesforceRefreshToken, salesforceInstanceUrl, salesforceConnectedOrgId, salesforceFieldMappings } = args as {
    id: string;
    name: string;
    surveyId: string;
    emails: unknown[];
    alertEnabled: boolean;
    organizationId: string;
    emailBody?: string;
    filterByQuestion?: string;
    channel?: string;
    webhookUrl?: string;
    webhookPayloadFormat?: string;
    webhookIncludeMetadata?: boolean;
    webhookCustomHeaders?: string;
    webhookCustomPayload?: string;
    webhookSecretKey?: string;
    webhookTimeoutSeconds?: number;
    webhookRetryCount?: number;
    zendeskApiKey?: string;
    zendeskSubdomain?: string;
    zendeskEmail?: string;
    emarsysApiKey?: string;
    emarsysSecretKey?: string;
    emarsysActionType?: string;
    emarsysEventId?: string;
    emarsysSegmentId?: string;
    emarsysFieldMappings?: string;
    emarsysIdentifierField?: string;
    salesforceClientId?: string;
    salesforceClientSecret?: string;
    salesforceAccessToken?: string;
    salesforceRefreshToken?: string;
    salesforceInstanceUrl?: string;
    salesforceConnectedOrgId?: string;
    salesforceFieldMappings?: string;
  };

  return apiClient.put(`/api/v2/workflows/${id}`, { name, surveyId, emails, alertEnabled, organizationId, emailBody, filterByQuestion, channel, webhookUrl, webhookPayloadFormat, webhookIncludeMetadata, webhookCustomHeaders, webhookCustomPayload, webhookSecretKey, webhookTimeoutSeconds, webhookRetryCount, zendeskApiKey, zendeskSubdomain, zendeskEmail, emarsysApiKey, emarsysSecretKey, emarsysActionType, emarsysEventId, emarsysSegmentId, emarsysFieldMappings, emarsysIdentifierField, salesforceClientId, salesforceClientSecret, salesforceAccessToken, salesforceRefreshToken, salesforceInstanceUrl, salesforceConnectedOrgId, salesforceFieldMappings });
}

async function handle_delete_workflow_endpoint_api_v2_workflows__id__delete(args: Record<string, unknown>) {
  const { id } = args as {
    id: string;
  };

  return apiClient.delete(`/api/v2/workflows/${id}`);
}

async function handle_get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_get(args: Record<string, unknown>) {
  const { client_id, state } = args as {
    client_id: string;
    state?: string;
  };

  return apiClient.get(`/api/v2/workflows/salesforce/auth-url`);
}

async function handle_exchange_salesforce_token_api_v2_workflows_salesforce_exchange_token_post(args: Record<string, unknown>) {
  const { code, code_verifier, client_id, client_secret } = args as {
    code: string;
    code_verifier: string;
    client_id: string;
    client_secret: string;
  };

  return apiClient.post(`/api/v2/workflows/salesforce/exchange-token`, { code, code_verifier, client_id, client_secret });
}

async function handle_refresh_salesforce_token_api_v2_workflows_salesforce_refresh_token_post(args: Record<string, unknown>) {
  const { refresh_token, client_id, client_secret } = args as {
    refresh_token: string;
    client_id: string;
    client_secret: string;
  };

  return apiClient.post(`/api/v2/workflows/salesforce/refresh-token`, { refresh_token, client_id, client_secret });
}

async function handle_revoke_salesforce_token_api_v2_workflows_salesforce_revoke_token_post(args: Record<string, unknown>) {
  const { token, client_id, client_secret } = args as {
    token: string;
    client_id?: string;
    client_secret?: string;
  };

  return apiClient.post(`/api/v2/workflows/salesforce/revoke-token`, { token, client_id, client_secret });
}

async function handle_get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_get(args: Record<string, unknown>) {
  const { access_token, instance_url } = args as {
    access_token: string;
    instance_url: string;
  };

  return apiClient.get(`/api/v2/workflows/salesforce/case-fields`);
}

async function handle_test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_post(args: Record<string, unknown>) {
  const { workflow_data, sample_data } = args as {
    workflow_data: Record<string, unknown>;
    sample_data: Record<string, unknown>;
  };

  return apiClient.post(`/api/v2/workflows/salesforce/test-mapping`, { workflow_data, sample_data });
}

async function handle_validate_salesforce_connection_api_v2_workflows_salesforce_validate_connection_post(args: Record<string, unknown>) {
  const { access_token, instance_url } = args as {
    access_token: string;
    instance_url: string;
  };

  return apiClient.post(`/api/v2/workflows/salesforce/validate-connection`, { access_token, instance_url });
}

async function handle_test_emarsys_connection_api_v2_emarsys_test_connection_post(args: Record<string, unknown>) {
  const { api_key, secret_key } = args as {
    api_key: string;
    secret_key: string;
  };

  return apiClient.post(`/api/v2/emarsys/test-connection`, { api_key, secret_key });
}

async function handle_get_emarsys_fields_api_v2_emarsys_fields_post(args: Record<string, unknown>) {
  const { survey_id, api_key, secret_key } = args as {
    survey_id?: string;
    api_key: string;
    secret_key: string;
  };

  return apiClient.post(`/api/v2/emarsys/fields`, { survey_id, api_key, secret_key });
}

async function handle_create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__post(args: Record<string, unknown>) {
  const { survey_id, api_key, secret_key, workflow_name } = args as {
    survey_id: string;
    api_key: string;
    secret_key: string;
    workflow_name?: string;
  };

  return apiClient.post(`/api/v2/emarsys/create-dynamic-fields/${survey_id}`, { api_key, secret_key, workflow_name });
}

async function handle_get_survey_questions_api_v2_emarsys_survey_questions__survey_id__get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: string;
  };

  return apiClient.get(`/api/v2/emarsys/survey-questions/${survey_id}`);
}

async function handle_get_feeds_api_v2_feeds__get(args: Record<string, unknown>) {
  const { survey_id, page, page_size } = args as {
    survey_id?: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/feeds/`);
}

async function handle_create_feed_api_v2_feeds__post(args: Record<string, unknown>) {
  const { name, survey_id, org_id, questions, layout, trend_period, start_date, end_date, filters } = args as {
    name: string;
    survey_id: number;
    org_id?: string;
    questions?: string;
    layout?: string;
    trend_period?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
  };

  return apiClient.post(`/api/v2/feeds/`, { name, survey_id, org_id, questions, layout, trend_period, start_date, end_date, filters });
}

async function handle_get_feed_api_v2_feeds__feed_id__get(args: Record<string, unknown>) {
  const { feed_id } = args as {
    feed_id: number;
  };

  return apiClient.get(`/api/v2/feeds/${feed_id}`);
}

async function handle_update_feed_api_v2_feeds__feed_id__patch(args: Record<string, unknown>) {
  const { feed_id, name, survey_id, org_id, questions, layout, trend_period, start_date, end_date, filters } = args as {
    feed_id: number;
    name?: string;
    survey_id?: string;
    org_id?: string;
    questions?: string;
    layout?: string;
    trend_period?: string;
    start_date?: string;
    end_date?: string;
    filters?: string;
  };

  return apiClient.patch(`/api/v2/feeds/${feed_id}`, { name, survey_id, org_id, questions, layout, trend_period, start_date, end_date, filters });
}

async function handle_delete_feed_api_v2_feeds__feed_id__delete(args: Record<string, unknown>) {
  const { feed_id } = args as {
    feed_id: number;
  };

  return apiClient.delete(`/api/v2/feeds/${feed_id}`);
}

async function handle_get_feed_by_hash_api_v2_feeds_hash__share_link_hash__get(args: Record<string, unknown>) {
  const { share_link_hash } = args as {
    share_link_hash: string;
  };

  return apiClient.get(`/api/v2/feeds/hash/${share_link_hash}`);
}

async function handle_business_insights_api_v2_resonance_business_insights_post(args: Record<string, unknown>) {
  const { authorization, session_id, user_input, current_state } = args as {
    authorization?: string;
    session_id?: string;
    user_input: string;
    current_state?: Record<string, unknown>;
  };

  return apiClient.post(`/api/v2/resonance/business-insights`, { authorization, session_id, user_input, current_state });
}

async function handle_get_public_feed_api_v2_public_share_feed__share_link_hash__get(args: Record<string, unknown>) {
  const { share_link_hash } = args as {
    share_link_hash: string;
  };

  return apiClient.get(`/api/v2/public/share/feed/${share_link_hash}`);
}

async function handle_get_widget_data_api_v2_public_widget__embed_token__get(args: Record<string, unknown>) {
  const { embed_token } = args as {
    embed_token: string;
  };

  return apiClient.get(`/api/v2/public/widget/${embed_token}`);
}

async function handle_track_survey_view_api_v2_public_surveys_track_view_post(args: Record<string, unknown>) {
  const { survey_id, org_id, distribution_type, user_hash, session_id } = args as {
    survey_id: number;
    org_id: number;
    distribution_type?: string;
    user_hash?: string;
    session_id?: string;
  };

  return apiClient.post(`/api/v2/public/surveys/track-view`, { survey_id, org_id, distribution_type, user_hash, session_id });
}

async function handle_get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_get(args: Record<string, unknown>) {
  const { survey_id, org_id } = args as {
    survey_id: number;
    org_id: number;
  };

  return apiClient.get(`/api/v2/public/surveys/${survey_id}/view-stats`);
}

async function handle_get_company_data_api_v2_company_get(args: Record<string, unknown>) {
  const { google_place_id, trustpilot_business_unit, max_reviews } = args as {
    google_place_id?: string;
    trustpilot_business_unit?: string;
    max_reviews?: number;
  };

  return apiClient.get(`/api/v2/company`);
}

async function handle_list_reports_api_v2_reports__get(args: Record<string, unknown>) {
  const { page, per_page, status, is_active, survey_id, group_id, search, filters } = args as {
    page?: number;
    per_page?: number;
    status?: string;
    is_active?: string;
    survey_id?: string;
    group_id?: string;
    search?: string;
    filters?: string;
  };

  return apiClient.get(`/api/v2/reports/`);
}

async function handle_create_report_api_v2_reports__post(args: Record<string, unknown>) {
  const { name, description, language, survey_id, group_id, selected_questions, filters, time_range, time_aggregation, custom_start_date, custom_end_date, recipient_emails, schedule_config, status } = args as {
    name: string;
    description?: string;
    language?: string;
    survey_id?: string;
    group_id?: string;
    selected_questions?: unknown[];
    filters?: string;
    time_range: string;
    time_aggregation?: string;
    custom_start_date?: string;
    custom_end_date?: string;
    recipient_emails?: string;
    schedule_config: Record<string, unknown>;
    status?: string;
  };

  return apiClient.post(`/api/v2/reports/`, { name, description, language, survey_id, group_id, selected_questions, filters, time_range, time_aggregation, custom_start_date, custom_end_date, recipient_emails, schedule_config, status });
}

async function handle_get_scheduler_status_api_v2_reports_scheduler_status_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/reports/scheduler/status`);
}

async function handle_get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_get(args: Record<string, unknown>) {
  const { hours } = args as {
    hours?: number;
  };

  return apiClient.get(`/api/v2/reports/scheduler/next-runs`);
}

async function handle_get_scheduled_reports_api_v2_reports_scheduled_get(args: Record<string, unknown>) {
  const { next_hours } = args as {
    next_hours?: number;
  };

  return apiClient.get(`/api/v2/reports/scheduled`);
}

async function handle_health_check_api_v2_reports_health_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/reports/health`);
}

async function handle_get_report_api_v2_reports__report_id__get(args: Record<string, unknown>) {
  const { report_id } = args as {
    report_id: string;
  };

  return apiClient.get(`/api/v2/reports/${report_id}`);
}

async function handle_update_report_api_v2_reports__report_id__put(args: Record<string, unknown>) {
  const { report_id, name, description, language, survey_id, group_id, selected_questions, filters, time_range, time_aggregation, custom_start_date, custom_end_date, recipient_emails, schedule_config, is_active, status } = args as {
    report_id: string;
    name?: string;
    description?: string;
    language?: string;
    survey_id?: string;
    group_id?: string;
    selected_questions?: string;
    filters?: string;
    time_range?: string;
    time_aggregation?: string;
    custom_start_date?: string;
    custom_end_date?: string;
    recipient_emails?: string;
    schedule_config?: string;
    is_active?: string;
    status?: string;
  };

  return apiClient.put(`/api/v2/reports/${report_id}`, { name, description, language, survey_id, group_id, selected_questions, filters, time_range, time_aggregation, custom_start_date, custom_end_date, recipient_emails, schedule_config, is_active, status });
}

async function handle_delete_report_api_v2_reports__report_id__delete(args: Record<string, unknown>) {
  const { report_id } = args as {
    report_id: string;
  };

  return apiClient.delete(`/api/v2/reports/${report_id}`);
}

async function handle_execute_report_api_v2_reports__report_id__execute_post(args: Record<string, unknown>) {
  const { report_id, test_mode, test_email, shared_link_expires_days } = args as {
    report_id: string;
    test_mode?: boolean;
    test_email?: string;
    shared_link_expires_days?: number;
  };

  return apiClient.post(`/api/v2/reports/${report_id}/execute`, { test_mode, test_email, shared_link_expires_days });
}

async function handle_preview_report_api_v2_reports__report_id__preview_post(args: Record<string, unknown>) {
  const { report_id, limit, include_charts } = args as {
    report_id: string;
    limit?: number;
    include_charts?: boolean;
  };

  return apiClient.post(`/api/v2/reports/${report_id}/preview`, { include_charts });
}

async function handle_list_report_executions_api_v2_reports__report_id__executions_get(args: Record<string, unknown>) {
  const { report_id, limit, offset, status } = args as {
    report_id: string;
    limit?: number;
    offset?: number;
    status?: string;
  };

  return apiClient.get(`/api/v2/reports/${report_id}/executions`);
}

async function handle_get_report_statistics_api_v2_reports__report_id__statistics_get(args: Record<string, unknown>) {
  const { report_id } = args as {
    report_id: string;
  };

  return apiClient.get(`/api/v2/reports/${report_id}/statistics`);
}

async function handle_force_execute_report_api_v2_reports__report_id__execute_force_post(args: Record<string, unknown>) {
  const { report_id, reason } = args as {
    report_id: string;
    reason?: string;
  };

  return apiClient.post(`/api/v2/reports/${report_id}/execute/force`, { reason });
}

async function handle_export_report_api_v2_reports__report_id__export_post(args: Record<string, unknown>) {
  const { report_id, format, include_charts, date_range_override } = args as {
    report_id: string;
    format?: string;
    include_charts?: boolean;
    date_range_override?: string;
  };

  return apiClient.post(`/api/v2/reports/${report_id}/export`, { format, include_charts, date_range_override });
}

async function handle_duplicate_report_api_v2_reports__report_id__duplicate_post(args: Record<string, unknown>) {
  const { report_id, new_name } = args as {
    report_id: string;
    new_name: string;
  };

  return apiClient.post(`/api/v2/reports/${report_id}/duplicate`, { new_name });
}

async function handle_toggle_report_active_status_api_v2_reports__report_id__toggle_active_patch(args: Record<string, unknown>) {
  const { report_id } = args as {
    report_id: string;
  };

  return apiClient.patch(`/api/v2/reports/${report_id}/toggle-active`);
}

async function handle_test_send_report_api_v2_reports_test_send_post(args: Record<string, unknown>) {
  const { report_id, test_email, shared_link_expires_days } = args as {
    report_id: string;
    test_email: string;
    shared_link_expires_days?: number;
  };

  return apiClient.post(`/api/v2/reports/test-send`, { report_id, test_email, shared_link_expires_days });
}

async function handle_batch_delete_reports_api_v2_reports_batch_delete_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/reports/batch/delete`);
}

async function handle_get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__get(args: Record<string, unknown>) {
  const { share_link_hash } = args as {
    share_link_hash: string;
  };

  return apiClient.get(`/api/v2/reports/shared/${share_link_hash}`);
}

async function handle_get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_get(args: Record<string, unknown>) {
  const { share_link_hash, format } = args as {
    share_link_hash: string;
    format?: string;
  };

  return apiClient.get(`/api/v2/reports/shared/${share_link_hash}/data`);
}

async function handle_get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_get(args: Record<string, unknown>) {
  const { share_link_hash, page, page_size } = args as {
    share_link_hash: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/reports/shared/${share_link_hash}/responses`);
}

async function handle_cleanup_expired_shared_snapshots_api_v2_reports_shared_expired_delete(args: Record<string, unknown>) {
  

  return apiClient.delete(`/api/v2/reports/shared/expired`);
}

async function handle_connect_gominga_api_v2_integrations_gominga_connect_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/integrations/gominga/connect`);
}

async function handle_get_auth_url_api_v2_integrations_gominga_auth_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/integrations/gominga/auth`);
}

async function handle_handle_callback_api_v2_integrations_gominga_callback_get(args: Record<string, unknown>) {
  const { code, state } = args as {
    code: string;
    state: string;
  };

  return apiClient.get(`/api/v2/integrations/gominga/callback`);
}

async function handle_sync_reviews_api_v2_integrations_gominga_sync_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/integrations/gominga/sync`);
}

async function handle_get_sync_status_api_v2_integrations_gominga_sync_status_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/integrations/gominga/sync/status`);
}

async function handle_get_reviews_api_v2_integrations_gominga_reviews_get(args: Record<string, unknown>) {
  const { review_type, platform, rating, limit, offset, include_count } = args as {
    review_type?: string;
    platform?: string;
    rating?: string;
    limit?: number;
    offset?: number;
    include_count?: boolean;
  };

  return apiClient.get(`/api/v2/integrations/gominga/reviews`);
}

async function handle_reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_post(args: Record<string, unknown>) {
  const { review_id, reply_text } = args as {
    review_id: string;
    reply_text: string;
  };

  return apiClient.post(`/api/v2/integrations/gominga/reviews/${review_id}/reply`, { reply_text });
}

async function handle_disconnect_gominga_api_v2_integrations_gominga_disconnect_delete(args: Record<string, unknown>) {
  

  return apiClient.delete(`/api/v2/integrations/gominga/disconnect`);
}

async function handle_get_mock_reviews_api_v2_integrations_gominga_reviews_mock_get(args: Record<string, unknown>) {
  const { review_type, platform, rating, limit, offset } = args as {
    review_type?: string;
    platform?: string;
    rating?: string;
    limit?: number;
    offset?: number;
  };

  return apiClient.get(`/api/v2/integrations/gominga/reviews/mock`);
}

async function handle_get_surveys_with_scores_api_v2_surveys_with_scores_get(args: Record<string, unknown>) {
  const { score_type, min_responses, days_back, company_id } = args as {
    score_type?: string;
    min_responses?: number;
    days_back?: string;
    company_id?: string;
  };

  return apiClient.get(`/api/v2/surveys-with-scores`);
}

async function handle_get_survey_score_details_api_v2_surveys__survey_id__score_details_get(args: Record<string, unknown>) {
  const { survey_id, question_name } = args as {
    survey_id: string;
    question_name?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/score-details`);
}

async function handle_get_widget_score_api_v2_widget_surveys__survey_id__score_get(args: Record<string, unknown>) {
  const { survey_id, question_name } = args as {
    survey_id: string;
    question_name: string;
  };

  return apiClient.get(`/api/v2/widget/surveys/${survey_id}/score`);
}

async function handle_get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_get(args: Record<string, unknown>) {
  const { survey_id, start_date, end_date, date_range, grouping, topic_ids } = args as {
    survey_id: string;
    start_date?: string;
    end_date?: string;
    date_range?: string;
    grouping?: string;
    topic_ids?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/sentiment-analytics`);
}

async function handle_get_used_topics_api_v2_surveys__survey_id__topics_used_get(args: Record<string, unknown>) {
  const { survey_id, date_range, start_date, end_date } = args as {
    survey_id: string;
    date_range?: string;
    start_date?: string;
    end_date?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/topics/used`);
}

async function handle_list_journeys_api_v2_journeys_get(args: Record<string, unknown>) {
  const { status, journey_type, search, page, page_size } = args as {
    status?: string;
    journey_type?: string;
    search?: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/journeys`);
}

async function handle_create_journey_api_v2_journeys_post(args: Record<string, unknown>) {
  const { name, description, journey_type, stages } = args as {
    name: string;
    description?: string;
    journey_type?: string;
    stages?: unknown[];
  };

  return apiClient.post(`/api/v2/journeys`, { name, description, journey_type, stages });
}

async function handle_list_templates_api_v2_journeys_templates_get(args: Record<string, unknown>) {
  const { industry } = args as {
    industry?: string;
  };

  return apiClient.get(`/api/v2/journeys/templates`);
}

async function handle_get_template_api_v2_journeys_templates__template_id__get(args: Record<string, unknown>) {
  const { template_id } = args as {
    template_id: string;
  };

  return apiClient.get(`/api/v2/journeys/templates/${template_id}`);
}

async function handle_create_from_template_api_v2_journeys_templates__template_id__create_post(args: Record<string, unknown>) {
  const { template_id } = args as {
    template_id: string;
  };

  return apiClient.post(`/api/v2/journeys/templates/${template_id}/create`);
}

async function handle_get_journey_api_v2_journeys__journey_id__get(args: Record<string, unknown>) {
  const { journey_id } = args as {
    journey_id: string;
  };

  return apiClient.get(`/api/v2/journeys/${journey_id}`);
}

async function handle_update_journey_api_v2_journeys__journey_id__patch(args: Record<string, unknown>) {
  const { journey_id, name, description, journey_type, status } = args as {
    journey_id: string;
    name?: string;
    description?: string;
    journey_type?: string;
    status?: string;
  };

  return apiClient.patch(`/api/v2/journeys/${journey_id}`, { name, description, journey_type, status });
}

async function handle_delete_journey_api_v2_journeys__journey_id__delete(args: Record<string, unknown>) {
  const { journey_id } = args as {
    journey_id: string;
  };

  return apiClient.delete(`/api/v2/journeys/${journey_id}`);
}

async function handle_generate_journey_ai_api_v2_journeys_generate_post(args: Record<string, unknown>) {
  const { domain, industry, company_description, template_id } = args as {
    domain?: string;
    industry?: string;
    company_description?: string;
    template_id?: string;
  };

  return apiClient.post(`/api/v2/journeys/generate`, { domain, industry, company_description, template_id });
}

async function handle_save_generated_journeys_api_v2_journeys_generate_save_post(args: Record<string, unknown>) {
  const { source_domain, detected_industry } = args as {
    source_domain?: string;
    detected_industry?: string;
  };

  return apiClient.post(`/api/v2/journeys/generate/save`, { source_domain, detected_industry });
}

async function handle_suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_post(args: Record<string, unknown>) {
  const { touchpoint_name, touchpoint_description, stage_name, journey_name } = args as {
    touchpoint_name: string;
    touchpoint_description?: string;
    stage_name?: string;
    journey_name?: string;
  };

  return apiClient.post(`/api/v2/journeys/touchpoints/suggest`, { touchpoint_name, touchpoint_description, stage_name, journey_name });
}

async function handle_analyze_csv_journeys_api_v2_journeys_analyze_csv_post(args: Record<string, unknown>) {
  const { headers, rows } = args as {
    headers: unknown[];
    rows: unknown[];
  };

  return apiClient.post(`/api/v2/journeys/analyze-csv`, { headers, rows });
}

async function handle_create_stage_api_v2_journeys__journey_id__stages_post(args: Record<string, unknown>) {
  const { journey_id, name, description, sequence, touchpoints } = args as {
    journey_id: string;
    name: string;
    description?: string;
    sequence?: number;
    touchpoints?: unknown[];
  };

  return apiClient.post(`/api/v2/journeys/${journey_id}/stages`, { name, description, sequence, touchpoints });
}

async function handle_update_stage_api_v2_journeys_stages__stage_id__patch(args: Record<string, unknown>) {
  const { stage_id, name, description, sequence } = args as {
    stage_id: string;
    name?: string;
    description?: string;
    sequence?: string;
  };

  return apiClient.patch(`/api/v2/journeys/stages/${stage_id}`, { name, description, sequence });
}

async function handle_delete_stage_api_v2_journeys_stages__stage_id__delete(args: Record<string, unknown>) {
  const { stage_id } = args as {
    stage_id: string;
  };

  return apiClient.delete(`/api/v2/journeys/stages/${stage_id}`);
}

async function handle_reorder_stages_api_v2_journeys__journey_id__stages_reorder_put(args: Record<string, unknown>) {
  const { journey_id, stage_ids } = args as {
    journey_id: string;
    stage_ids: unknown[];
  };

  return apiClient.put(`/api/v2/journeys/${journey_id}/stages/reorder`, { stage_ids });
}

async function handle_create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_post(args: Record<string, unknown>) {
  const { stage_id, name, description, channel, metric_type, timing, sequence } = args as {
    stage_id: string;
    name: string;
    description?: string;
    channel?: string;
    metric_type?: string;
    timing?: string;
    sequence?: number;
  };

  return apiClient.post(`/api/v2/journeys/stages/${stage_id}/touchpoints`, { name, description, channel, metric_type, timing, sequence });
}

async function handle_update_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__patch(args: Record<string, unknown>) {
  const { touchpoint_id, name, description, channel, metric_type, timing, sequence } = args as {
    touchpoint_id: string;
    name?: string;
    description?: string;
    channel?: string;
    metric_type?: string;
    timing?: string;
    sequence?: string;
  };

  return apiClient.patch(`/api/v2/journeys/touchpoints/${touchpoint_id}`, { name, description, channel, metric_type, timing, sequence });
}

async function handle_delete_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__delete(args: Record<string, unknown>) {
  const { touchpoint_id } = args as {
    touchpoint_id: string;
  };

  return apiClient.delete(`/api/v2/journeys/touchpoints/${touchpoint_id}`);
}

async function handle_reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_put(args: Record<string, unknown>) {
  const { stage_id, touchpoint_ids } = args as {
    stage_id: string;
    touchpoint_ids: unknown[];
  };

  return apiClient.put(`/api/v2/journeys/stages/${stage_id}/touchpoints/reorder`, { touchpoint_ids });
}

async function handle_get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_get(args: Record<string, unknown>) {
  const { touchpoint_id } = args as {
    touchpoint_id: string;
  };

  return apiClient.get(`/api/v2/journeys/touchpoints/${touchpoint_id}/surveys`);
}

async function handle_link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_post(args: Record<string, unknown>) {
  const { touchpoint_id, survey_id, is_primary } = args as {
    touchpoint_id: string;
    survey_id: number;
    is_primary?: boolean;
  };

  return apiClient.post(`/api/v2/journeys/touchpoints/${touchpoint_id}/surveys`, { survey_id, is_primary });
}

async function handle_unlink_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys__survey_id__delete(args: Record<string, unknown>) {
  const { touchpoint_id, survey_id } = args as {
    touchpoint_id: string;
    survey_id: number;
  };

  return apiClient.delete(`/api/v2/journeys/touchpoints/${touchpoint_id}/surveys/${survey_id}`);
}

async function handle_get_organization_settings_api_v2_phone_numbers_organization_settings_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/phone-numbers/organization-settings`);
}

async function handle_suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/phone-numbers/suggest-area-codes`);
}

async function handle_search_region_numbers_api_v2_phone_numbers_search_region_get(args: Record<string, unknown>) {
  const { org_id, country_code, include_national } = args as {
    org_id: number;
    country_code?: string;
    include_national?: boolean;
  };

  return apiClient.get(`/api/v2/phone-numbers/search-region`);
}

async function handle_search_available_numbers_api_v2_phone_numbers_search_get(args: Record<string, unknown>) {
  const { country_code, area_code, type, limit } = args as {
    country_code?: string;
    area_code?: string;
    type?: string;
    limit?: number;
  };

  return apiClient.get(`/api/v2/phone-numbers/search`);
}

async function handle_purchase_number_api_v2_phone_numbers_purchase_post(args: Record<string, unknown>) {
  const { phone_number, org_id, friendly_name, locality } = args as {
    phone_number: string;
    org_id: number;
    friendly_name?: string;
    locality?: string;
  };

  return apiClient.post(`/api/v2/phone-numbers/purchase`, { phone_number, org_id, friendly_name, locality });
}

async function handle_list_phone_numbers_api_v2_phone_numbers_get(args: Record<string, unknown>) {
  const { org_id, status_filter } = args as {
    org_id: number;
    status_filter?: string;
  };

  return apiClient.get(`/api/v2/phone-numbers`);
}

async function handle_assign_number_to_survey_api_v2_phone_numbers__number_id__assign_post(args: Record<string, unknown>) {
  const { number_id, survey_id } = args as {
    number_id: number;
    survey_id: number;
  };

  return apiClient.post(`/api/v2/phone-numbers/${number_id}/assign`, { survey_id });
}

async function handle_unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_post(args: Record<string, unknown>) {
  const { number_id, survey_id } = args as {
    number_id: number;
    survey_id: number;
  };

  return apiClient.post(`/api/v2/phone-numbers/${number_id}/unassign`, { survey_id });
}

async function handle_release_number_api_v2_phone_numbers__number_id__release_post(args: Record<string, unknown>) {
  const { number_id } = args as {
    number_id: number;
  };

  return apiClient.post(`/api/v2/phone-numbers/${number_id}/release`);
}

async function handle_get_number_details_api_v2_phone_numbers__number_id__get(args: Record<string, unknown>) {
  const { number_id } = args as {
    number_id: number;
  };

  return apiClient.get(`/api/v2/phone-numbers/${number_id}`);
}

async function handle_get_survey_config_api_v2_phone_configs_surveys__survey_id__config_get(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: number;
  };

  return apiClient.get(`/api/v2/phone-configs/surveys/${survey_id}/config`);
}

async function handle_update_survey_config_api_v2_phone_configs_surveys__survey_id__config_put(args: Record<string, unknown>) {
  const { survey_id, voice, language, interruption_threshold, temperature, max_duration, background_track, noise_cancellation, record, custom_script, use_custom_script } = args as {
    survey_id: number;
    voice?: string;
    language?: string;
    interruption_threshold?: string;
    temperature?: string;
    max_duration?: string;
    background_track?: string;
    noise_cancellation?: string;
    record?: string;
    custom_script?: string;
    use_custom_script?: string;
  };

  return apiClient.put(`/api/v2/phone-configs/surveys/${survey_id}/config`, { voice, language, interruption_threshold, temperature, max_duration, background_track, noise_cancellation, record, custom_script, use_custom_script });
}

async function handle_list_presets_api_v2_phone_configs_presets_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id?: string;
  };

  return apiClient.get(`/api/v2/phone-configs/presets`);
}

async function handle_create_preset_api_v2_phone_configs_presets_post(args: Record<string, unknown>) {
  const { name, voice, language, interruption_threshold, temperature, max_duration, background_track, noise_cancellation, record } = args as {
    name: string;
    voice?: string;
    language?: string;
    interruption_threshold?: number;
    temperature?: number;
    max_duration?: number;
    background_track?: string;
    noise_cancellation?: boolean;
    record?: boolean;
  };

  return apiClient.post(`/api/v2/phone-configs/presets`, { name, voice, language, interruption_threshold, temperature, max_duration, background_track, noise_cancellation, record });
}

async function handle_delete_preset_api_v2_phone_configs_presets__preset_id__delete(args: Record<string, unknown>) {
  const { preset_id } = args as {
    preset_id: number;
  };

  return apiClient.delete(`/api/v2/phone-configs/presets/${preset_id}`);
}

async function handle_list_available_voices_api_v2_phone_configs_voices_get(args: Record<string, unknown>) {
  const { language } = args as {
    language?: string;
  };

  return apiClient.get(`/api/v2/phone-configs/voices`);
}

async function handle_list_available_languages_api_v2_phone_configs_languages_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/phone-configs/languages`);
}

async function handle_preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_post(args: Record<string, unknown>) {
  const { survey_id, config_id, save_as_custom } = args as {
    survey_id: number;
    config_id?: string;
    save_as_custom?: boolean;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls/preview-script`, { config_id, save_as_custom });
}

async function handle_create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_post(args: Record<string, unknown>) {
  const { survey_id, phone_number, config_id } = args as {
    survey_id: number;
    phone_number: string;
    config_id?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls/phone`, { phone_number, config_id });
}

async function handle_list_test_calls_api_v2_surveys__survey_id__test_calls_get(args: Record<string, unknown>) {
  const { survey_id, status_filter, limit } = args as {
    survey_id: number;
    status_filter?: string;
    limit?: number;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/test-calls`);
}

async function handle_create_test_call_api_v2_surveys__survey_id__test_calls_post(args: Record<string, unknown>) {
  const { survey_id, config_id } = args as {
    survey_id: number;
    config_id?: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls`, { config_id });
}

async function handle_get_test_call_api_v2_surveys__survey_id__test_calls__test_id__get(args: Record<string, unknown>) {
  const { survey_id, test_id } = args as {
    survey_id: number;
    test_id: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/test-calls/${test_id}`);
}

async function handle_delete_test_call_api_v2_surveys__survey_id__test_calls__test_id__delete(args: Record<string, unknown>) {
  const { survey_id, test_id } = args as {
    survey_id: number;
    test_id: string;
  };

  return apiClient.delete(`/api/v2/surveys/${survey_id}/test-calls/${test_id}`);
}

async function handle_approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_post(args: Record<string, unknown>) {
  const { survey_id, test_id, approved } = args as {
    survey_id: number;
    test_id: string;
    approved: boolean;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls/${test_id}/approve`, { approved });
}

async function handle_sync_test_call_results_api_v2_surveys__survey_id__test_calls__test_id__sync_post(args: Record<string, unknown>) {
  const { survey_id, test_id } = args as {
    survey_id: number;
    test_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls/${test_id}/sync`);
}

async function handle_complete_test_call_api_v2_surveys__survey_id__test_calls__test_id__complete_post(args: Record<string, unknown>) {
  const { survey_id, test_id } = args as {
    survey_id: number;
    test_id: string;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls/${test_id}/complete`);
}

async function handle_bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/test-calls/webhook`);
}

async function handle_upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_post(args: Record<string, unknown>) {
  const { survey_id } = args as {
    survey_id: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-campaigns/upload`);
}

async function handle_validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_post(args: Record<string, unknown>) {
  const { survey_id, upload_id, column_mapping } = args as {
    survey_id: number;
    upload_id: string;
    column_mapping: Record<string, unknown>;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-campaigns/validate`, { upload_id, column_mapping });
}

async function handle_list_campaigns_api_v2_surveys__survey_id__phone_campaigns_get(args: Record<string, unknown>) {
  const { survey_id, status_filter } = args as {
    survey_id: number;
    status_filter?: string;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/phone-campaigns`);
}

async function handle_create_campaign_api_v2_surveys__survey_id__phone_campaigns_post(args: Record<string, unknown>) {
  const { survey_id, name, upload_id, column_mapping, from_number, config_id, scheduled_start_at, throttle_per_hour, max_attempts, retry_delay_hours, retry_on, exclude_invalid } = args as {
    survey_id: number;
    name: string;
    upload_id: string;
    column_mapping: Record<string, unknown>;
    from_number?: string;
    config_id?: string;
    scheduled_start_at?: string;
    throttle_per_hour?: number;
    max_attempts?: number;
    retry_delay_hours?: number;
    retry_on?: unknown[];
    exclude_invalid?: boolean;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-campaigns`, { name, upload_id, column_mapping, from_number, config_id, scheduled_start_at, throttle_per_hour, max_attempts, retry_delay_hours, retry_on, exclude_invalid });
}

async function handle_get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__get(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}`);
}

async function handle_delete_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__delete(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.delete(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}`);
}

async function handle_start_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__start_post(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}/start`);
}

async function handle_pause_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__pause_put(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}/pause`);
}

async function handle_resume_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__resume_put(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.put(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}/resume`);
}

async function handle_retry_failed_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_retry_post(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}/contacts/retry`);
}

async function handle_get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_get(args: Record<string, unknown>) {
  const { survey_id, campaign_id, status_filter, limit, offset } = args as {
    survey_id: number;
    campaign_id: number;
    status_filter?: string;
    limit?: number;
    offset?: number;
  };

  return apiClient.get(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}/contacts`);
}

async function handle_handle_campaign_webhook_api_v2_surveys__survey_id__phone_campaigns__campaign_id__webhook_post(args: Record<string, unknown>) {
  const { survey_id, campaign_id } = args as {
    survey_id: number;
    campaign_id: number;
  };

  return apiClient.post(`/api/v2/surveys/${survey_id}/phone-campaigns/${campaign_id}/webhook`);
}

async function handle_get_products_api_v2_products_get(args: Record<string, unknown>) {
  const { page, page_size, category_id, search } = args as {
    page?: number;
    page_size?: number;
    category_id?: string;
    search?: string;
  };

  return apiClient.get(`/api/v2/products`);
}

async function handle_create_product_api_v2_products_post(args: Record<string, unknown>) {
  const { external_id, name, category_id, image_url, product_url, attributes, org_id } = args as {
    external_id: string;
    name: string;
    category_id?: string;
    image_url?: string;
    product_url?: string;
    attributes?: Record<string, unknown>;
    org_id: number;
  };

  return apiClient.post(`/api/v2/products`, { external_id, name, category_id, image_url, product_url, attributes, org_id });
}

async function handle_get_product_api_v2_products__product_id__get(args: Record<string, unknown>) {
  const { product_id } = args as {
    product_id: string;
  };

  return apiClient.get(`/api/v2/products/${product_id}`);
}

async function handle_update_product_api_v2_products__product_id__put(args: Record<string, unknown>) {
  const { product_id, name, category_id, image_url, product_url, attributes } = args as {
    product_id: string;
    name?: string;
    category_id?: string;
    image_url?: string;
    product_url?: string;
    attributes?: string;
  };

  return apiClient.put(`/api/v2/products/${product_id}`, { name, category_id, image_url, product_url, attributes });
}

async function handle_delete_product_api_v2_products__product_id__delete(args: Record<string, unknown>) {
  const { product_id } = args as {
    product_id: string;
  };

  return apiClient.delete(`/api/v2/products/${product_id}`);
}

async function handle_get_products_by_external_ids_public_api_v2_by_external_ids_public_get(args: Record<string, unknown>) {
  const { external_ids, org_id } = args as {
    external_ids: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/by-external-ids-public`);
}

async function handle_import_products_api_v2_products_import_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/products/import`);
}

async function handle_get_product_review_summary_api_v2_products__product_id__reviews_summary_get(args: Record<string, unknown>) {
  const { product_id } = args as {
    product_id: string;
  };

  return apiClient.get(`/api/v2/products/${product_id}/reviews/summary`);
}

async function handle_get_product_reviews_api_v2_products__product_id__reviews_get(args: Record<string, unknown>) {
  const { product_id, page, page_size, rating, start_date, end_date, verified_only } = args as {
    product_id: string;
    page?: number;
    page_size?: number;
    rating?: string;
    start_date?: string;
    end_date?: string;
    verified_only?: boolean;
  };

  return apiClient.get(`/api/v2/products/${product_id}/reviews`);
}

async function handle_get_order_detail_api_v2_orders__order_id__detail_get(args: Record<string, unknown>) {
  const { order_id } = args as {
    order_id: string;
  };

  return apiClient.get(`/api/v2/orders/${order_id}/detail`);
}

async function handle_get_reviews_api_v2_reviews_get(args: Record<string, unknown>) {
  const { page, page_size, product_id, category_id, rating, response_type, sentiment, status, order_id, order_number, start_date, end_date, sort_by } = args as {
    page?: number;
    page_size?: number;
    product_id?: string;
    category_id?: string;
    rating?: string;
    response_type?: string;
    sentiment?: string;
    status?: string;
    order_id?: string;
    order_number?: string;
    start_date?: string;
    end_date?: string;
    sort_by?: string;
  };

  return apiClient.get(`/api/v2/reviews`);
}

async function handle_export_google_product_reviews_feed_api_v2_reviews_export_google_feed_get(args: Record<string, unknown>) {
  const { publisher_name, publisher_favicon, product_id, category_id, limit } = args as {
    publisher_name?: string;
    publisher_favicon?: string;
    product_id?: string;
    category_id?: string;
    limit?: string;
  };

  return apiClient.get(`/api/v2/reviews/export/google-feed`);
}

async function handle_export_reviews_api_v2_reviews_export_get(args: Record<string, unknown>) {
  const { org_id, format, product_id, min_rating, verified_only, start_date, end_date } = args as {
    org_id: number;
    format?: string;
    product_id?: string;
    min_rating?: string;
    verified_only?: boolean;
    start_date?: string;
    end_date?: string;
  };

  return apiClient.get(`/api/v2/reviews/export`);
}

async function handle_update_review_status_api_v2_reviews__review_id__status_patch(args: Record<string, unknown>) {
  const { review_id, status } = args as {
    review_id: string;
    status: string;
  };

  return apiClient.patch(`/api/v2/reviews/${review_id}/status`, { status });
}

async function handle_add_review_response_api_v2_reviews__review_id__response_post(args: Record<string, unknown>) {
  const { review_id, response_text } = args as {
    review_id: string;
    response_text: string;
  };

  return apiClient.post(`/api/v2/reviews/${review_id}/response`, { response_text });
}

async function handle_delete_review_response_api_v2_reviews__review_id__response_delete(args: Record<string, unknown>) {
  const { review_id } = args as {
    review_id: string;
  };

  return apiClient.delete(`/api/v2/reviews/${review_id}/response`);
}

async function handle_get_product_review_summary_api_v2_reviews_product__product_id__summary_get(args: Record<string, unknown>) {
  const { product_id } = args as {
    product_id: string;
  };

  return apiClient.get(`/api/v2/reviews/product/${product_id}/summary`);
}

async function handle_get_categories_api_v2_categories_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/categories`);
}

async function handle_create_category_api_v2_categories_post(args: Record<string, unknown>) {
  const { name, parent_id } = args as {
    name: string;
    parent_id?: string;
  };

  return apiClient.post(`/api/v2/categories`, { name, parent_id });
}

async function handle_get_category_api_v2_categories__category_id__get(args: Record<string, unknown>) {
  const { category_id } = args as {
    category_id: number;
  };

  return apiClient.get(`/api/v2/categories/${category_id}`);
}

async function handle_update_category_api_v2_categories__category_id__put(args: Record<string, unknown>) {
  const { category_id, name, parent_id } = args as {
    category_id: number;
    name?: string;
    parent_id?: string;
  };

  return apiClient.put(`/api/v2/categories/${category_id}`, { name, parent_id });
}

async function handle_delete_category_api_v2_categories__category_id__delete(args: Record<string, unknown>) {
  const { category_id } = args as {
    category_id: number;
  };

  return apiClient.delete(`/api/v2/categories/${category_id}`);
}

async function handle_get_orders_api_v2_orders_get(args: Record<string, unknown>) {
  const { page, page_size, customer_email, survey_sent } = args as {
    page?: number;
    page_size?: number;
    customer_email?: string;
    survey_sent?: string;
  };

  return apiClient.get(`/api/v2/orders`);
}

async function handle_create_order_api_v2_orders_post(args: Record<string, unknown>) {
  const { order_number, customer_email, order_date, products, org_id } = args as {
    order_number: string;
    customer_email: string;
    order_date: string;
    products?: unknown[];
    org_id: number;
  };

  return apiClient.post(`/api/v2/orders`, { order_number, customer_email, order_date, products, org_id });
}

async function handle_get_order_api_v2_orders__order_id__get(args: Record<string, unknown>) {
  const { order_id } = args as {
    order_id: string;
  };

  return apiClient.get(`/api/v2/orders/${order_id}`);
}

async function handle_update_order_api_v2_orders__order_id__put(args: Record<string, unknown>) {
  const { order_id, survey_sent, survey_id } = args as {
    order_id: string;
    survey_sent?: string;
    survey_id?: string;
  };

  return apiClient.put(`/api/v2/orders/${order_id}`, { survey_sent, survey_id });
}

async function handle_delete_order_api_v2_orders__order_id__delete(args: Record<string, unknown>) {
  const { order_id } = args as {
    order_id: string;
  };

  return apiClient.delete(`/api/v2/orders/${order_id}`);
}

async function handle_get_order_survey_link_api_v2_orders__order_id__survey_link_get(args: Record<string, unknown>) {
  const { order_id } = args as {
    order_id: string;
  };

  return apiClient.get(`/api/v2/orders/${order_id}/survey-link`);
}

async function handle_import_orders_api_v2_orders_import_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/orders/import`);
}

async function handle_send_review_request_api_v2_orders__order_id__send_review_request_post(args: Record<string, unknown>) {
  const { order_id, delay_hours } = args as {
    order_id: string;
    delay_hours?: number;
  };

  return apiClient.post(`/api/v2/orders/${order_id}/send-review-request`, { delay_hours });
}

async function handle_send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_post(args: Record<string, unknown>) {
  const { delay_hours } = args as {
    delay_hours?: number;
  };

  return apiClient.post(`/api/v2/orders/send-bulk-review-requests`, { delay_hours });
}

async function handle_ai_powered_review_search_api_v2_reviews_ai_search_get(args: Record<string, unknown>) {
  const { query, page } = args as {
    query: string;
    page?: number;
  };

  return apiClient.get(`/api/v2/reviews/ai-search`);
}

async function handle_get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_get(args: Record<string, unknown>) {
  const { reviewer_email } = args as {
    reviewer_email: string;
  };

  return apiClient.get(`/api/v2/reviewers/${reviewer_email}/profile`);
}

async function handle_get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_get(args: Record<string, unknown>) {
  const { reviewer_email, page, page_size } = args as {
    reviewer_email: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/reviewers/${reviewer_email}/reviews`);
}

async function handle_get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_get(args: Record<string, unknown>) {
  const { reviewer_email, limit, min_similarity } = args as {
    reviewer_email: string;
    limit?: number;
    min_similarity?: number;
  };

  return apiClient.get(`/api/v2/reviewers/${reviewer_email}/similar`);
}

async function handle_get_power_reviewers_api_v2_reviewers_power_reviewers_get(args: Record<string, unknown>) {
  const { min_reviews, sort_by, page, page_size } = args as {
    min_reviews?: number;
    sort_by?: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/reviewers/power-reviewers`);
}

async function handle_generate_embeddings_bulk_api_v2_reviewers_generate_embeddings_post(args: Record<string, unknown>) {
  const { limit, force_refresh, run_async } = args as {
    limit?: string;
    force_refresh?: boolean;
    run_async?: boolean;
  };

  return apiClient.post(`/api/v2/reviewers/generate-embeddings`, { force_refresh, run_async });
}

async function handle_refresh_reviewer_stats_api_v2_reviewers_refresh_stats_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/reviewers/refresh-stats`);
}

async function handle_get_order_analytics_api_v2_orders_analytics_get(args: Record<string, unknown>) {
  const { org_id, date_range, product_id } = args as {
    org_id: number;
    date_range?: number;
    product_id?: string;
  };

  return apiClient.get(`/api/v2/orders/analytics`);
}

async function handle_get_single_order_analytics_api_v2_orders__order_id__analytics_get(args: Record<string, unknown>) {
  const { order_id } = args as {
    order_id: string;
  };

  return apiClient.get(`/api/v2/orders/${order_id}/analytics`);
}

async function handle_get_product_config_api_v2_organization_product_config_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/organization/product-config`);
}

async function handle_update_product_config_api_v2_organization_product_config_patch(args: Record<string, unknown>) {
  const { industry, review_aggregation, max_category_depth, use_collections, use_product_lines, use_variants, variant_attributes, allow_discontinued_in_orders, warn_on_discontinued } = args as {
    industry?: string;
    review_aggregation?: string;
    max_category_depth?: string;
    use_collections?: string;
    use_product_lines?: string;
    use_variants?: string;
    variant_attributes?: string;
    allow_discontinued_in_orders?: string;
    warn_on_discontinued?: string;
  };

  return apiClient.patch(`/api/v2/organization/product-config`, { industry, review_aggregation, max_category_depth, use_collections, use_product_lines, use_variants, variant_attributes, allow_discontinued_in_orders, warn_on_discontinued });
}

async function handle_apply_config_preset_api_v2_organization_product_config_preset__preset_name__post(args: Record<string, unknown>) {
  const { preset_name } = args as {
    preset_name: string;
  };

  return apiClient.post(`/api/v2/organization/product-config/preset/${preset_name}`);
}

async function handle_resolve_surveys_by_products_api_v2_surveys_resolve_by_products_get(args: Record<string, unknown>) {
  const { org_id, products, order_id } = args as {
    org_id: number;
    products: string;
    order_id?: string;
  };

  return apiClient.get(`/api/v2/surveys/resolve-by-products`);
}

async function handle_resolve_surveys_api_v2_surveys_resolve_post(args: Record<string, unknown>) {
  const { org_id, product_ids, order_id } = args as {
    org_id: number;
    product_ids: unknown[];
    order_id?: string;
  };

  return apiClient.post(`/api/v2/surveys/resolve`, { org_id, product_ids, order_id });
}

async function handle_get_assignments_api_v2_survey_assignments_get(args: Record<string, unknown>) {
  const { org_id, survey_id, product_id, category_id, limit, offset } = args as {
    org_id?: string;
    survey_id?: string;
    product_id?: string;
    category_id?: string;
    limit?: number;
    offset?: number;
  };

  return apiClient.get(`/api/v2/survey-assignments`);
}

async function handle_create_assignment_api_v2_survey_assignments_post(args: Record<string, unknown>) {
  const { survey_id, product_id, category_id, org_id, priority, assignment_type } = args as {
    survey_id: number;
    product_id?: string;
    category_id?: string;
    org_id: number;
    priority?: number;
    assignment_type?: string;
  };

  return apiClient.post(`/api/v2/survey-assignments`, { survey_id, product_id, category_id, org_id, priority, assignment_type });
}

async function handle_update_assignment_api_v2_survey_assignments__assignment_id__put(args: Record<string, unknown>) {
  const { assignment_id, org_id, priority, assignment_type } = args as {
    assignment_id: number;
    org_id?: string;
    priority?: string;
    assignment_type?: string;
  };

  return apiClient.put(`/api/v2/survey-assignments/${assignment_id}`, { org_id, priority, assignment_type });
}

async function handle_delete_assignment_api_v2_survey_assignments__assignment_id__delete(args: Record<string, unknown>) {
  const { assignment_id, org_id } = args as {
    assignment_id: number;
    org_id?: string;
  };

  return apiClient.delete(`/api/v2/survey-assignments/${assignment_id}`);
}

async function handle_bulk_create_assignments_api_v2_survey_assignments_bulk_post(args: Record<string, unknown>) {
  const { org_id, assignments, replace_existing } = args as {
    org_id?: string;
    assignments: unknown[];
    replace_existing?: boolean;
  };

  return apiClient.post(`/api/v2/survey-assignments/bulk`, { org_id, assignments, replace_existing });
}

async function handle_get_assignments_by_products_api_v2_survey_assignments_by_products_post(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id?: string;
  };

  return apiClient.post(`/api/v2/survey-assignments/by-products`, { org_id });
}

async function handle_delete_assignments_by_survey_api_v2_survey_assignments_by_survey__survey_id__delete(args: Record<string, unknown>) {
  const { survey_id, org_id } = args as {
    survey_id: number;
    org_id?: string;
  };

  return apiClient.delete(`/api/v2/survey-assignments/by-survey/${survey_id}`);
}

async function handle_get_assignment_statistics_api_v2_survey_assignments_stats_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id?: string;
  };

  return apiClient.get(`/api/v2/survey-assignments/stats`);
}

async function handle_get_active_configuration_api_v2_survey_chain_config_active_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id?: string;
  };

  return apiClient.get(`/api/v2/survey-chain-config/active`);
}

async function handle_get_all_configurations_api_v2_survey_chain_config_get(args: Record<string, unknown>) {
  const { org_id, include_inactive } = args as {
    org_id?: string;
    include_inactive?: boolean;
  };

  return apiClient.get(`/api/v2/survey-chain-config`);
}

async function handle_create_configuration_api_v2_survey_chain_config_post(args: Record<string, unknown>) {
  const { org_id, name, optimization_strategy, max_surveys_per_chain, fallback_survey_id, is_active } = args as {
    org_id: number;
    name: string;
    optimization_strategy?: string;
    max_surveys_per_chain?: number;
    fallback_survey_id?: string;
    is_active?: boolean;
  };

  return apiClient.post(`/api/v2/survey-chain-config`, { org_id, name, optimization_strategy, max_surveys_per_chain, fallback_survey_id, is_active });
}

async function handle_update_configuration_api_v2_survey_chain_config__config_id__put(args: Record<string, unknown>) {
  const { config_id, org_id, name, optimization_strategy, max_surveys_per_chain, fallback_survey_id, is_active } = args as {
    config_id: number;
    org_id?: string;
    name?: string;
    optimization_strategy?: string;
    max_surveys_per_chain?: string;
    fallback_survey_id?: string;
    is_active?: string;
  };

  return apiClient.put(`/api/v2/survey-chain-config/${config_id}`, { org_id, name, optimization_strategy, max_surveys_per_chain, fallback_survey_id, is_active });
}

async function handle_delete_configuration_api_v2_survey_chain_config__config_id__delete(args: Record<string, unknown>) {
  const { config_id, org_id } = args as {
    config_id: number;
    org_id?: string;
  };

  return apiClient.delete(`/api/v2/survey-chain-config/${config_id}`);
}

async function handle_get_recommendations_api_v2_survey_chain_config_recommendations_post(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id?: string;
  };

  return apiClient.post(`/api/v2/survey-chain-config/recommendations`, { org_id });
}

async function handle_test_optimization_api_v2_survey_chain_config_test_optimization_post(args: Record<string, unknown>) {
  const { org_id, sample_products, strategy, max_surveys } = args as {
    org_id?: string;
    sample_products: unknown[];
    strategy?: string;
    max_surveys?: string;
  };

  return apiClient.post(`/api/v2/survey-chain-config/test-optimization`, { org_id, sample_products, strategy, max_surveys });
}

async function handle_resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_get(args: Record<string, unknown>) {
  const { org_id, products, order_id } = args as {
    org_id: number;
    products: string;
    order_id?: string;
  };

  return apiClient.get(`/api/v2/public/surveys/resolve-by-products`);
}

async function handle_resolve_surveys_public_api_v2_public_surveys_resolve_post(args: Record<string, unknown>) {
  const { org_id, product_ids, order_id } = args as {
    org_id: number;
    product_ids: unknown[];
    order_id?: string;
  };

  return apiClient.post(`/api/v2/public/surveys/resolve`, { org_id, product_ids, order_id });
}

async function handle_handle_survey_response_api_v2_webhooks_survey_response_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/webhooks/survey-response`);
}

async function handle_handle_order_status_api_v2_webhooks_order_status_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/webhooks/order-status`);
}

async function handle_handle_order_shipment_api_v2_webhooks_order_shipment_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/webhooks/order-shipment`);
}

async function handle_handle_order_delivery_api_v2_webhooks_order_delivery_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/webhooks/order-delivery`);
}

async function handle_get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_get(args: Record<string, unknown>) {
  const { limit } = args as {
    limit?: number;
  };

  return apiClient.get(`/api/v2/webhooks/scheduled-emails/pending`);
}

async function handle_process_scheduled_email_api_v2_webhooks_scheduled_emails__email_id__process_post(args: Record<string, unknown>) {
  const { email_id } = args as {
    email_id: string;
  };

  return apiClient.post(`/api/v2/webhooks/scheduled-emails/${email_id}/process`);
}

async function handle_list_segments_api_v2_contacts_segments__get(args: Record<string, unknown>) {
  const { org_id, segment_type } = args as {
    org_id: number;
    segment_type?: string;
  };

  return apiClient.get(`/api/v2/contacts/segments/`);
}

async function handle_create_segment_api_v2_contacts_segments__post(args: Record<string, unknown>) {
  const { org_id, user_id, name, description, color, segment_type, filter_criteria } = args as {
    org_id: number;
    user_id?: string;
    name: string;
    description?: string;
    color?: string;
    segment_type: string;
    filter_criteria?: string;
  };

  return apiClient.post(`/api/v2/contacts/segments/`, { org_id, user_id, name, description, color, segment_type, filter_criteria });
}

async function handle_get_segment_api_v2_contacts_segments__segment_id__get(args: Record<string, unknown>) {
  const { segment_id, org_id } = args as {
    segment_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/segments/${segment_id}`);
}

async function handle_update_segment_api_v2_contacts_segments__segment_id__patch(args: Record<string, unknown>) {
  const { segment_id, org_id, name, description, color, filter_criteria } = args as {
    segment_id: string;
    org_id: number;
    name?: string;
    description?: string;
    color?: string;
    filter_criteria?: string;
  };

  return apiClient.patch(`/api/v2/contacts/segments/${segment_id}`, { org_id, name, description, color, filter_criteria });
}

async function handle_delete_segment_api_v2_contacts_segments__segment_id__delete(args: Record<string, unknown>) {
  const { segment_id, org_id } = args as {
    segment_id: string;
    org_id: number;
  };

  return apiClient.delete(`/api/v2/contacts/segments/${segment_id}`);
}

async function handle_get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_get(args: Record<string, unknown>) {
  const { segment_id, org_id, page, per_page } = args as {
    segment_id: string;
    org_id: number;
    page?: number;
    per_page?: number;
  };

  return apiClient.get(`/api/v2/contacts/segments/${segment_id}/contacts`);
}

async function handle_refresh_segment_api_v2_contacts_segments__segment_id__refresh_post(args: Record<string, unknown>) {
  const { segment_id, org_id } = args as {
    segment_id: string;
    org_id: number;
  };

  return apiClient.post(`/api/v2/contacts/segments/${segment_id}/refresh`, { org_id });
}

async function handle_add_members_api_v2_contacts_segments__segment_id__members_post(args: Record<string, unknown>) {
  const { segment_id, org_id, user_id, contact_ids } = args as {
    segment_id: string;
    org_id: number;
    user_id?: string;
    contact_ids: unknown[];
  };

  return apiClient.post(`/api/v2/contacts/segments/${segment_id}/members`, { org_id, user_id, contact_ids });
}

async function handle_remove_members_api_v2_contacts_segments__segment_id__members_delete(args: Record<string, unknown>) {
  const { segment_id, org_id, contact_ids } = args as {
    segment_id: string;
    org_id: number;
    contact_ids: unknown[];
  };

  return apiClient.delete(`/api/v2/contacts/segments/${segment_id}/members`);
}

async function handle_quick_search_api_v2_contacts_search__get(args: Record<string, unknown>) {
  const { org_id, q, page, per_page, status, tags, min_nps, max_nps, has_email, has_phone, source_system } = args as {
    org_id: number;
    q: string;
    page?: number;
    per_page?: number;
    status?: string;
    tags?: string;
    min_nps?: string;
    max_nps?: string;
    has_email?: string;
    has_phone?: string;
    source_system?: string;
  };

  return apiClient.get(`/api/v2/contacts/search/`);
}

async function handle_semantic_search_api_v2_contacts_search_semantic_post(args: Record<string, unknown>) {
  const { org_id, query, limit, min_similarity, content_types, sentiment_filter, pre_filters } = args as {
    org_id: number;
    query: string;
    limit?: number;
    min_similarity?: number;
    content_types?: string;
    sentiment_filter?: string;
    pre_filters?: string;
  };

  return apiClient.post(`/api/v2/contacts/search/semantic`, { org_id, query, min_similarity, content_types, sentiment_filter, pre_filters });
}

async function handle_get_suggestions_api_v2_contacts_search_suggest_get(args: Record<string, unknown>) {
  const { org_id, q, limit } = args as {
    org_id: number;
    q: string;
    limit?: number;
  };

  return apiClient.get(`/api/v2/contacts/search/suggest`);
}

async function handle_search_by_attributes_api_v2_contacts_search_attributes_post(args: Record<string, unknown>) {
  const { org_id, page, per_page } = args as {
    org_id: number;
    page?: number;
    per_page?: number;
  };

  return apiClient.post(`/api/v2/contacts/search/attributes`, { org_id, per_page });
}

async function handle_list_interactions_api_v2_contacts__contact_id__interactions__get(args: Record<string, unknown>) {
  const { contact_id, org_id, page, per_page, types, channels, source_systems, has_nps, min_nps, max_nps } = args as {
    contact_id: string;
    org_id: number;
    page?: number;
    per_page?: number;
    types?: string;
    channels?: string;
    source_systems?: string;
    has_nps?: string;
    min_nps?: string;
    max_nps?: string;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/interactions/`);
}

async function handle_log_interaction_api_v2_contacts__contact_id__interactions__post(args: Record<string, unknown>) {
  const { contact_id, org_id, interaction_type, channel, source_system, source_id, source_url, metadata, sentiment_score, nps_score } = args as {
    contact_id: string;
    org_id: number;
    interaction_type: string;
    channel: string;
    source_system: string;
    source_id?: string;
    source_url?: string;
    metadata?: Record<string, unknown>;
    sentiment_score?: string;
    nps_score?: string;
  };

  return apiClient.post(`/api/v2/contacts/${contact_id}/interactions/`, { org_id, interaction_type, channel, source_system, source_id, source_url, metadata, sentiment_score, nps_score });
}

async function handle_get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_get(args: Record<string, unknown>) {
  const { contact_id, org_id } = args as {
    contact_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/interactions/stats`);
}

async function handle_list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_get(args: Record<string, unknown>) {
  const { contact_id, interaction_id, org_id, page, per_page } = args as {
    contact_id: string;
    interaction_id: string;
    org_id: number;
    page?: number;
    per_page?: number;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/interactions/${interaction_id}/replies`);
}

async function handle_create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_post(args: Record<string, unknown>) {
  const { contact_id, interaction_id, org_id, note, is_public_reply } = args as {
    contact_id: string;
    interaction_id: string;
    org_id: number;
    note: string;
    is_public_reply?: boolean;
  };

  return apiClient.post(`/api/v2/contacts/${contact_id}/interactions/${interaction_id}/replies`, { org_id, note, is_public_reply });
}

async function handle_update_reply_api_v2_replies__reply_id__put(args: Record<string, unknown>) {
  const { reply_id, note } = args as {
    reply_id: number;
    note: string;
  };

  return apiClient.put(`/api/v2/replies/${reply_id}`, { note });
}

async function handle_delete_reply_api_v2_replies__reply_id__delete(args: Record<string, unknown>) {
  const { reply_id } = args as {
    reply_id: number;
  };

  return apiClient.delete(`/api/v2/replies/${reply_id}`);
}

async function handle_get_contact_content_api_v2_contacts__contact_id__content__get(args: Record<string, unknown>) {
  const { contact_id, org_id, interaction_id, source_id, content_type } = args as {
    contact_id: string;
    org_id: number;
    interaction_id?: string;
    source_id?: string;
    content_type?: string;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/content/`);
}

async function handle_list_contact_content_api_v2_contacts__contact_id__content_all_get(args: Record<string, unknown>) {
  const { contact_id, org_id, content_type, limit } = args as {
    contact_id: string;
    org_id: number;
    content_type?: string;
    limit?: number;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/content/all`);
}

async function handle_list_definitions_api_v2_contacts_attributes_definitions_get(args: Record<string, unknown>) {
  const { org_id, searchable_only, filterable_only } = args as {
    org_id: number;
    searchable_only?: boolean;
    filterable_only?: boolean;
  };

  return apiClient.get(`/api/v2/contacts/attributes/definitions`);
}

async function handle_create_definition_api_v2_contacts_attributes_definitions_post(args: Record<string, unknown>) {
  const { org_id, user_id, attribute_key, display_name, description, data_type, enum_values, is_required, is_unique, validation_regex, min_value, max_value, min_length, max_length, default_value, is_searchable, is_filterable, show_in_list, show_in_profile, display_order, attribute_group } = args as {
    org_id: number;
    user_id?: string;
    attribute_key: string;
    display_name: string;
    description?: string;
    data_type?: string;
    enum_values?: string;
    is_required?: boolean;
    is_unique?: boolean;
    validation_regex?: string;
    min_value?: string;
    max_value?: string;
    min_length?: string;
    max_length?: string;
    default_value?: string;
    is_searchable?: boolean;
    is_filterable?: boolean;
    show_in_list?: boolean;
    show_in_profile?: boolean;
    display_order?: number;
    attribute_group?: string;
  };

  return apiClient.post(`/api/v2/contacts/attributes/definitions`, { org_id, user_id, attribute_key, display_name, description, data_type, enum_values, is_required, is_unique, validation_regex, min_value, max_value, min_length, max_length, default_value, is_searchable, is_filterable, show_in_list, show_in_profile, display_order, attribute_group });
}

async function handle_get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/attributes/definitions/grouped`);
}

async function handle_get_definition_api_v2_contacts_attributes_definitions__definition_id__get(args: Record<string, unknown>) {
  const { definition_id, org_id } = args as {
    definition_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/attributes/definitions/${definition_id}`);
}

async function handle_update_definition_api_v2_contacts_attributes_definitions__definition_id__patch(args: Record<string, unknown>) {
  const { definition_id, org_id, display_name, description, enum_values, is_required, validation_regex, min_value, max_value, min_length, max_length, default_value, is_searchable, is_filterable, show_in_list, show_in_profile, display_order, attribute_group } = args as {
    definition_id: string;
    org_id: number;
    display_name?: string;
    description?: string;
    enum_values?: string;
    is_required?: string;
    validation_regex?: string;
    min_value?: string;
    max_value?: string;
    min_length?: string;
    max_length?: string;
    default_value?: string;
    is_searchable?: string;
    is_filterable?: string;
    show_in_list?: string;
    show_in_profile?: string;
    display_order?: string;
    attribute_group?: string;
  };

  return apiClient.patch(`/api/v2/contacts/attributes/definitions/${definition_id}`, { org_id, display_name, description, enum_values, is_required, validation_regex, min_value, max_value, min_length, max_length, default_value, is_searchable, is_filterable, show_in_list, show_in_profile, display_order, attribute_group });
}

async function handle_delete_definition_api_v2_contacts_attributes_definitions__definition_id__delete(args: Record<string, unknown>) {
  const { definition_id, org_id } = args as {
    definition_id: string;
    org_id: number;
  };

  return apiClient.delete(`/api/v2/contacts/attributes/definitions/${definition_id}`);
}

async function handle_get_rules_api_v2_contacts_throttle_rules_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/throttle/rules`);
}

async function handle_update_rules_api_v2_contacts_throttle_rules_put(args: Record<string, unknown>) {
  const { org_id, enabled, max_contacts_per_day, max_contacts_per_week, max_contacts_per_month, min_days_between_contacts, email_max_per_week, email_min_days_between, sms_max_per_week, sms_min_days_between, phone_max_per_week, phone_min_days_between, vip_bypass_enabled, vip_tag, transactional_bypass_enabled, quiet_hours_enabled, quiet_hours_start, quiet_hours_end, quiet_hours_timezone } = args as {
    org_id: number;
    enabled?: string;
    max_contacts_per_day?: string;
    max_contacts_per_week?: string;
    max_contacts_per_month?: string;
    min_days_between_contacts?: string;
    email_max_per_week?: string;
    email_min_days_between?: string;
    sms_max_per_week?: string;
    sms_min_days_between?: string;
    phone_max_per_week?: string;
    phone_min_days_between?: string;
    vip_bypass_enabled?: string;
    vip_tag?: string;
    transactional_bypass_enabled?: string;
    quiet_hours_enabled?: string;
    quiet_hours_start?: string;
    quiet_hours_end?: string;
    quiet_hours_timezone?: string;
  };

  return apiClient.put(`/api/v2/contacts/throttle/rules`, { org_id, enabled, max_contacts_per_day, max_contacts_per_week, max_contacts_per_month, min_days_between_contacts, email_max_per_week, email_min_days_between, sms_max_per_week, sms_min_days_between, phone_max_per_week, phone_min_days_between, vip_bypass_enabled, vip_tag, transactional_bypass_enabled, quiet_hours_enabled, quiet_hours_start, quiet_hours_end, quiet_hours_timezone });
}

async function handle_get_throttle_stats_api_v2_contacts_throttle_stats_get(args: Record<string, unknown>) {
  const { org_id, days } = args as {
    org_id: number;
    days?: number;
  };

  return apiClient.get(`/api/v2/contacts/throttle/stats`);
}

async function handle_get_throttle_log_api_v2_contacts_throttle_log_get(args: Record<string, unknown>) {
  const { org_id, page, per_page, contact_id, action } = args as {
    org_id: number;
    page?: number;
    per_page?: number;
    contact_id?: string;
    action?: string;
  };

  return apiClient.get(`/api/v2/contacts/throttle/log`);
}

async function handle_get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__get(args: Record<string, unknown>) {
  const { external_id, org_id } = args as {
    external_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/by-external-id/${external_id}`);
}

async function handle_list_contacts_api_v2_contacts__get(args: Record<string, unknown>) {
  const { org_id, page, per_page, status, tags, email, external_id, min_nps, max_nps, source_system, sort_by, sort_order } = args as {
    org_id: number;
    page?: number;
    per_page?: number;
    status?: string;
    tags?: string;
    email?: string;
    external_id?: string;
    min_nps?: string;
    max_nps?: string;
    source_system?: string;
    sort_by?: string;
    sort_order?: string;
  };

  return apiClient.get(`/api/v2/contacts/`);
}

async function handle_create_contact_api_v2_contacts__post(args: Record<string, unknown>) {
  const { org_id, external_id, email, phone, first_name, last_name, company, job_title, tags, custom_attributes } = args as {
    org_id: number;
    external_id?: string;
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    job_title?: string;
    tags?: unknown[];
    custom_attributes?: Record<string, unknown>;
  };

  return apiClient.post(`/api/v2/contacts/`, { org_id, external_id, email, phone, first_name, last_name, company, job_title, tags, custom_attributes });
}

async function handle_get_contact_stats_api_v2_contacts__contact_id__stats_get(args: Record<string, unknown>) {
  const { contact_id, org_id } = args as {
    contact_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/stats`);
}

async function handle_get_contact_api_v2_contacts__contact_id__get(args: Record<string, unknown>) {
  const { contact_id, org_id } = args as {
    contact_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}`);
}

async function handle_update_contact_api_v2_contacts__contact_id__patch(args: Record<string, unknown>) {
  const { contact_id, org_id, external_id, email, phone, first_name, last_name, company, job_title, tags, custom_attributes, status, email_consent, sms_consent, phone_consent } = args as {
    contact_id: string;
    org_id: number;
    external_id?: string;
    email?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    company?: string;
    job_title?: string;
    tags?: string;
    custom_attributes?: string;
    status?: string;
    email_consent?: string;
    sms_consent?: string;
    phone_consent?: string;
  };

  return apiClient.patch(`/api/v2/contacts/${contact_id}`, { org_id, external_id, email, phone, first_name, last_name, company, job_title, tags, custom_attributes, status, email_consent, sms_consent, phone_consent });
}

async function handle_delete_contact_api_v2_contacts__contact_id__delete(args: Record<string, unknown>) {
  const { contact_id, org_id } = args as {
    contact_id: string;
    org_id: number;
  };

  return apiClient.delete(`/api/v2/contacts/${contact_id}`);
}

async function handle_bulk_update_tags_api_v2_contacts_bulk_tags_post(args: Record<string, unknown>) {
  const { org_id, contact_ids, add_tags, remove_tags } = args as {
    org_id: number;
    contact_ids: unknown[];
    add_tags?: unknown[];
    remove_tags?: unknown[];
  };

  return apiClient.post(`/api/v2/contacts/bulk/tags`, { org_id, contact_ids, add_tags, remove_tags });
}

async function handle_bulk_update_attributes_api_v2_contacts_bulk_attributes_post(args: Record<string, unknown>) {
  const { org_id, contact_ids, set_attributes, unset_attributes } = args as {
    org_id: number;
    contact_ids: unknown[];
    set_attributes?: Record<string, unknown>;
    unset_attributes?: unknown[];
  };

  return apiClient.post(`/api/v2/contacts/bulk/attributes`, { org_id, contact_ids, set_attributes, unset_attributes });
}

async function handle_check_throttle_api_v2_contacts__contact_id__can_contact_post(args: Record<string, unknown>) {
  const { contact_id, org_id, channel, source_system, source_id, is_transactional } = args as {
    contact_id: string;
    org_id: number;
    channel: string;
    source_system: string;
    source_id?: string;
    is_transactional?: boolean;
  };

  return apiClient.post(`/api/v2/contacts/${contact_id}/can-contact`, { org_id, channel, source_system, source_id, is_transactional });
}

async function handle_get_contact_source_links_api_v2_contacts__contact_id__source_links_get(args: Record<string, unknown>) {
  const { contact_id, org_id } = args as {
    contact_id: string;
    org_id: number;
  };

  return apiClient.get(`/api/v2/contacts/${contact_id}/source-links`);
}

async function handle_list_import_jobs_api_v2_contacts_import_get(args: Record<string, unknown>) {
  const { limit, offset } = args as {
    limit?: number;
    offset?: number;
  };

  return apiClient.get(`/api/v2/contacts/import`);
}

async function handle_create_import_job_api_v2_contacts_import_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/contacts/import`);
}

async function handle_get_import_job_api_v2_contacts_import__job_id__get(args: Record<string, unknown>) {
  const { job_id } = args as {
    job_id: string;
  };

  return apiClient.get(`/api/v2/contacts/import/${job_id}`);
}

async function handle_preview_import_api_v2_contacts_import_preview_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/contacts/import/preview`);
}

async function handle_list_export_jobs_api_v2_contacts_export_get(args: Record<string, unknown>) {
  const { limit, offset } = args as {
    limit?: number;
    offset?: number;
  };

  return apiClient.get(`/api/v2/contacts/export`);
}

async function handle_create_export_job_api_v2_contacts_export_post(args: Record<string, unknown>) {
  const { filter_criteria, segment_id, fields, include_interactions, custom_attribute_keys } = args as {
    filter_criteria?: string;
    segment_id?: string;
    fields?: unknown[];
    include_interactions?: boolean;
    custom_attribute_keys?: unknown[];
  };

  return apiClient.post(`/api/v2/contacts/export`, { filter_criteria, segment_id, fields, include_interactions, custom_attribute_keys });
}

async function handle_quick_export_api_v2_contacts_export_quick_get(args: Record<string, unknown>) {
  const { segment_id, status_filter, tags } = args as {
    segment_id?: string;
    status_filter?: string;
    tags?: string;
  };

  return apiClient.get(`/api/v2/contacts/export/quick`);
}

async function handle_get_export_job_api_v2_contacts_export__job_id__get(args: Record<string, unknown>) {
  const { job_id } = args as {
    job_id: string;
  };

  return apiClient.get(`/api/v2/contacts/export/${job_id}`);
}

async function handle_download_export_api_v2_contacts_export__job_id__download_get(args: Record<string, unknown>) {
  const { job_id } = args as {
    job_id: string;
  };

  return apiClient.get(`/api/v2/contacts/export/${job_id}/download`);
}

async function handle_save_legacy_credentials_api_v2_migration_credentials_post(args: Record<string, unknown>) {
  const { org_id, user_id, api_key, backend_url } = args as {
    org_id: number;
    user_id?: string;
    api_key: string;
    backend_url?: string;
  };

  return apiClient.post(`/api/v2/migration/credentials`, { org_id, user_id, api_key, backend_url });
}

async function handle_delete_legacy_credentials_api_v2_migration_credentials_delete(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.delete(`/api/v2/migration/credentials`);
}

async function handle_validate_legacy_credentials_api_v2_migration_credentials_validate_post(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.post(`/api/v2/migration/credentials/validate`, { org_id });
}

async function handle_get_credentials_status_api_v2_migration_credentials_status_get(args: Record<string, unknown>) {
  const { org_id } = args as {
    org_id: number;
  };

  return apiClient.get(`/api/v2/migration/credentials/status`);
}

async function handle_list_legacy_surveys_api_v2_migration_surveys_get(args: Record<string, unknown>) {
  const { org_id, page, per_page, authorization } = args as {
    org_id: number;
    page?: number;
    per_page?: number;
    authorization?: string;
  };

  return apiClient.get(`/api/v2/migration/surveys`);
}

async function handle_get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_get(args: Record<string, unknown>) {
  const { legacy_survey_id, org_id } = args as {
    legacy_survey_id: number;
    org_id: number;
  };

  return apiClient.get(`/api/v2/migration/surveys/${legacy_survey_id}/status`);
}

async function handle_preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_get(args: Record<string, unknown>) {
  const { legacy_survey_id, org_id, authorization } = args as {
    legacy_survey_id: number;
    org_id: number;
    authorization?: string;
  };

  return apiClient.get(`/api/v2/migration/surveys/${legacy_survey_id}/preview`);
}

async function handle_import_survey_api_v2_migration_surveys_import_post(args: Record<string, unknown>) {
  const { authorization, legacy_survey_id, org_id, creator_id, import_responses } = args as {
    authorization?: string;
    legacy_survey_id: number;
    org_id: number;
    creator_id?: string;
    import_responses?: boolean;
  };

  return apiClient.post(`/api/v2/migration/surveys/import`, { authorization, legacy_survey_id, org_id, creator_id, import_responses });
}

async function handle_import_survey_responses_api_v2_migration_responses_import_post(args: Record<string, unknown>) {
  const { authorization, survey_id, legacy_survey_id, org_id, start_date, end_date, batch_size } = args as {
    authorization?: string;
    survey_id: string;
    legacy_survey_id: number;
    org_id: number;
    start_date?: string;
    end_date?: string;
    batch_size?: number;
  };

  return apiClient.post(`/api/v2/migration/responses/import`, { authorization, survey_id, legacy_survey_id, org_id, start_date, end_date, batch_size });
}

async function handle_import_responses_for_survey_api_v2_migration_surveys__survey_id__import_responses_post(args: Record<string, unknown>) {
  const { survey_id, legacy_survey_id, org_id, authorization } = args as {
    survey_id: string;
    legacy_survey_id: number;
    org_id: number;
    authorization?: string;
  };

  return apiClient.post(`/api/v2/migration/surveys/${survey_id}/import-responses`, { legacy_survey_id, org_id, authorization });
}

async function handle_get_migration_progress_api_v2_migration_status__migration_id__get(args: Record<string, unknown>) {
  const { migration_id } = args as {
    migration_id: string;
  };

  return apiClient.get(`/api/v2/migration/status/${migration_id}`);
}

async function handle_chat_http_api_v2_zagents_chat_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/zagents/chat`);
}

async function handle_chat_http_v2_api_v2_zagents_chat_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/v2/api/v2/zagents/chat`);
}

async function handle_health_check_v2_api_v2_zagents_health_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/v2/api/v2/zagents/health`);
}

async function handle_create_voice_token_api_v2_zagents_voice_token_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/zagents/voice/token`);
}

async function handle_voice_health_check_api_v2_zagents_voice_health_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/zagents/voice/health`);
}

async function handle_execute_function_api_v2_zagents_voice_functions_execute_post(args: Record<string, unknown>) {
  const { name, arguments: _arguments, call_id, org_id, user_id } = args as {
    name: string;
    arguments: Record<string, unknown>;
    call_id: string;
    org_id: number;
    user_id?: number;
  };

  return apiClient.post(`/api/v2/zagents/voice/functions/execute`, { name, _arguments, call_id, org_id, user_id });
}

async function handle_list_functions_api_v2_zagents_voice_functions_list_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/zagents/voice/functions/list`);
}

async function handle_zenguide_chat_api_v2_zagents_zenguide_chat_post(args: Record<string, unknown>) {
  

  return apiClient.post(`/api/v2/zagents/zenguide/chat`);
}

async function handle_get_widget_responses_api_v2_widget_surveys__survey_id__responses_get(args: Record<string, unknown>) {
  const { survey_id, question_ids, page, page_size } = args as {
    survey_id: string;
    question_ids?: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/widget/surveys/${survey_id}/responses`);
}

async function handle_get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_get(args: Record<string, unknown>) {
  const { survey_id, query, page, page_size, use_videos } = args as {
    survey_id: string;
    query?: string;
    page?: number;
    page_size?: number;
    use_videos?: boolean;
  };

  return apiClient.get(`/api/v2/widget/surveys/${survey_id}/visual-responses`);
}

async function handle_get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__get(args: Record<string, unknown>) {
  const { organization_id, review_type, platform, min_rating, page, page_size } = args as {
    organization_id: number;
    review_type?: string;
    platform?: string;
    min_rating?: string;
    page?: number;
    page_size?: number;
  };

  return apiClient.get(`/api/v2/widget/gominga/reviews/${organization_id}`);
}

async function handle_test_widget_api_api_v2_test_widget_api_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/test/widget-api`);
}

async function handle_root__get(args: Record<string, unknown>) {
  

  return apiClient.get(`/`);
}

async function handle_health_health_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/health`);
}

async function handle_scheduler_health_health_scheduler_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/health/scheduler`);
}

async function handle_memory_health_health_memory_get(args: Record<string, unknown>) {
  

  return apiClient.get(`/health/memory`);
}

async function handle_list_widget_embeds_api_v2_widget_embeds__get(args: Record<string, unknown>) {
  

  return apiClient.get(`/api/v2/widget-embeds/`);
}

async function handle_create_widget_embed_api_v2_widget_embeds__post(args: Record<string, unknown>) {
  const { name, survey_id, question_name, allowed_domains, theme, width, strict_domain_check, time_range } = args as {
    name: string;
    survey_id: number;
    question_name: string;
    allowed_domains: unknown[];
    theme?: string;
    width?: string;
    strict_domain_check?: boolean;
    time_range?: string;
  };

  return apiClient.post(`/api/v2/widget-embeds/`, { name, survey_id, question_name, allowed_domains, theme, width, strict_domain_check, time_range });
}

async function handle_get_widget_embed_api_v2_widget_embeds__embed_id__get(args: Record<string, unknown>) {
  const { embed_id } = args as {
    embed_id: string;
  };

  return apiClient.get(`/api/v2/widget-embeds/${embed_id}`);
}

async function handle_update_widget_embed_api_v2_widget_embeds__embed_id__put(args: Record<string, unknown>) {
  const { embed_id, name, survey_id, question_name, allowed_domains, theme, width, strict_domain_check, time_range } = args as {
    embed_id: string;
    name?: string;
    survey_id?: string;
    question_name?: string;
    allowed_domains?: string;
    theme?: string;
    width?: string;
    strict_domain_check?: string;
    time_range?: string;
  };

  return apiClient.put(`/api/v2/widget-embeds/${embed_id}`, { name, survey_id, question_name, allowed_domains, theme, width, strict_domain_check, time_range });
}

async function handle_delete_widget_embed_api_v2_widget_embeds__embed_id__delete(args: Record<string, unknown>) {
  const { embed_id } = args as {
    embed_id: string;
  };

  return apiClient.delete(`/api/v2/widget-embeds/${embed_id}`);
}

async function handle_get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__get(args: Record<string, unknown>) {
  const { survey_id, question_name } = args as {
    survey_id: number;
    question_name: string;
  };

  return apiClient.get(`/api/v2/widget-embeds/survey/${survey_id}/question/${question_name}`);
}

async function handle_update_allowed_domains_api_v2_widget_embeds__embed_id__domains_patch(args: Record<string, unknown>) {
  const { embed_id, allowed_domains } = args as {
    embed_id: string;
    allowed_domains: unknown[];
  };

  return apiClient.patch(`/api/v2/widget-embeds/${embed_id}/domains`, { allowed_domains });
}

async function handle_toggle_widget_embed_api_v2_widget_embeds__embed_id__toggle_patch(args: Record<string, unknown>) {
  const { embed_id } = args as {
    embed_id: string;
  };

  return apiClient.patch(`/api/v2/widget-embeds/${embed_id}/toggle`);
}

// Main handler dispatcher
export async function handleToolCall(
  name: string,
  args: Record<string, unknown>
): Promise<{ content: Array<{ type: string; text: string }> }> {
  try {
    let result: unknown;

    switch (name) {
      case 'get_user_profile_api_v2_auth_me_get':
        result = await handle_get_user_profile_api_v2_auth_me_get(args);
        break;
      case 'list_api_keys_api_v2_auth_api_keys_get':
        result = await handle_list_api_keys_api_v2_auth_api_keys_get(args);
        break;
      case 'create_api_key_api_v2_auth_api_keys_post':
        result = await handle_create_api_key_api_v2_auth_api_keys_post(args);
        break;
      case 'validate_token_api_v2_auth_validate_post':
        result = await handle_validate_token_api_v2_auth_validate_post(args);
        break;
      case 'delete_api_key_api_v2_auth_api_keys__key_id__delete':
        result = await handle_delete_api_key_api_v2_auth_api_keys__key_id__delete(args);
        break;
      case 'set_organization_api_v2_auth_set_organization_post':
        result = await handle_set_organization_api_v2_auth_set_organization_post(args);
        break;
      case 'get_api_logs_api_v2_auth_api_keys__key_id__logs_get':
        result = await handle_get_api_logs_api_v2_auth_api_keys__key_id__logs_get(args);
        break;
      case 'get_api_documentation_api_v2_auth_docs_get':
        result = await handle_get_api_documentation_api_v2_auth_docs_get(args);
        break;
      case 'generate_example_code_api_v2_auth_generate_code_post':
        result = await handle_generate_example_code_api_v2_auth_generate_code_post(args);
        break;
      case 'list_survey_names_api_v2_surveys_names_get':
        result = await handle_list_survey_names_api_v2_surveys_names_get(args);
        break;
      case 'get_surveys_api_v2_surveys__get':
        result = await handle_get_surveys_api_v2_surveys__get(args);
        break;
      case 'create_survey_api_v2_surveys__post':
        result = await handle_create_survey_api_v2_surveys__post(args);
        break;
      case 'list_tags_api_v2_surveys_tags_get':
        result = await handle_list_tags_api_v2_surveys_tags_get(args);
        break;
      case 'create_tag_api_v2_surveys_tags_post':
        result = await handle_create_tag_api_v2_surveys_tags_post(args);
        break;
      case 'update_tag_api_v2_surveys_tags__tag_id__put':
        result = await handle_update_tag_api_v2_surveys_tags__tag_id__put(args);
        break;
      case 'delete_tag_api_v2_surveys_tags__tag_id__delete':
        result = await handle_delete_tag_api_v2_surveys_tags__tag_id__delete(args);
        break;
      case 'get_tags_by_groups_api_v2_surveys_tags_by_groups_get':
        result = await handle_get_tags_by_groups_api_v2_surveys_tags_by_groups_get(args);
        break;
      case 'get_survey_api_v2_surveys__survey_id__get':
        result = await handle_get_survey_api_v2_surveys__survey_id__get(args);
        break;
      case 'update_survey_api_v2_surveys__survey_id__put':
        result = await handle_update_survey_api_v2_surveys__survey_id__put(args);
        break;
      case 'delete_survey_api_v2_surveys__survey_id__delete':
        result = await handle_delete_survey_api_v2_surveys__survey_id__delete(args);
        break;
      case 'update_survey_status_api_v2_surveys__survey_id__status_put':
        result = await handle_update_survey_status_api_v2_surveys__survey_id__status_put(args);
        break;
      case 'get_html_embed_api_v2_surveys__survey_id__html_embed_get':
        result = await handle_get_html_embed_api_v2_surveys__survey_id__html_embed_get(args);
        break;
      case 'create_html_embed_api_v2_surveys__survey_id__html_embed_post':
        result = await handle_create_html_embed_api_v2_surveys__survey_id__html_embed_post(args);
        break;
      case 'update_html_embed_api_v2_surveys__survey_id__html_embed_put':
        result = await handle_update_html_embed_api_v2_surveys__survey_id__html_embed_put(args);
        break;
      case 'update_html_with_instructions_api_v2_surveys__survey_id__html_update_post':
        result = await handle_update_html_with_instructions_api_v2_surveys__survey_id__html_update_post(args);
        break;
      case 'get_survey_definition_api_v2_surveys__survey_id__definition_get':
        result = await handle_get_survey_definition_api_v2_surveys__survey_id__definition_get(args);
        break;
      case 'get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_get':
        result = await handle_get_clean_survey_definition_api_v2_surveys__survey_id__clean_definition_get(args);
        break;
      case 'get_survey_filters_api_v2_surveys__survey_id__filters_get':
        result = await handle_get_survey_filters_api_v2_surveys__survey_id__filters_get(args);
        break;
      case 'get_survey_labels_api_v2_surveys__survey_id__labels_get':
        result = await handle_get_survey_labels_api_v2_surveys__survey_id__labels_get(args);
        break;
      case 'process_survey_labels_api_v2_surveys__survey_id__process_labels_post':
        result = await handle_process_survey_labels_api_v2_surveys__survey_id__process_labels_post(args);
        break;
      case 'clone_survey_api_v2_surveys__survey_id__clone_post':
        result = await handle_clone_survey_api_v2_surveys__survey_id__clone_post(args);
        break;
      case 'list_themes_api_v2_surveys_themes_get':
        result = await handle_list_themes_api_v2_surveys_themes_get(args);
        break;
      case 'create_theme_api_v2_surveys_themes_post':
        result = await handle_create_theme_api_v2_surveys_themes_post(args);
        break;
      case 'get_theme_api_v2_surveys_themes__theme_id__get':
        result = await handle_get_theme_api_v2_surveys_themes__theme_id__get(args);
        break;
      case 'update_theme_api_v2_surveys_themes__theme_id__put':
        result = await handle_update_theme_api_v2_surveys_themes__theme_id__put(args);
        break;
      case 'delete_theme_api_v2_surveys_themes__theme_id__delete':
        result = await handle_delete_theme_api_v2_surveys_themes__theme_id__delete(args);
        break;
      case 'get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_get':
        result = await handle_get_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_get(args);
        break;
      case 'update_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_patch':
        result = await handle_update_trigger_configuration_api_v2_surveys__survey_id__trigger_configuration_patch(args);
        break;
      case 'generate_survey_api_v2_surveys_generate_post':
        result = await handle_generate_survey_api_v2_surveys_generate_post(args);
        break;
      case 'auto_tag_survey_api_v2_surveys__survey_id__auto_tag_post':
        result = await handle_auto_tag_survey_api_v2_surveys__survey_id__auto_tag_post(args);
        break;
      case 'get_survey_tags_api_v2_surveys__survey_id__tags_get':
        result = await handle_get_survey_tags_api_v2_surveys__survey_id__tags_get(args);
        break;
      case 'update_survey_tags_api_v2_surveys__survey_id__tags_put':
        result = await handle_update_survey_tags_api_v2_surveys__survey_id__tags_put(args);
        break;
      case 'auto_tag_organization_api_v2_surveys_auto_tag_org_post':
        result = await handle_auto_tag_organization_api_v2_surveys_auto_tag_org_post(args);
        break;
      case 'get_public_survey_api_v2_surveys_public__survey_id__get':
        result = await handle_get_public_survey_api_v2_surveys_public__survey_id__get(args);
        break;
      case 'initiate_phone_survey_api_v2_surveys__survey_id__call_post':
        result = await handle_initiate_phone_survey_api_v2_surveys__survey_id__call_post(args);
        break;
      case 'handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_post':
        result = await handle_handle_phone_survey_webhook_api_v2_surveys__survey_id__phone_webhook_post(args);
        break;
      case 'list_organization_responses_api_v2_organizations_responses_get':
        result = await handle_list_organization_responses_api_v2_organizations_responses_get(args);
        break;
      case 'list_responses_api_v2_surveys__survey_id__responses_get':
        result = await handle_list_responses_api_v2_surveys__survey_id__responses_get(args);
        break;
      case 'submit_response_api_v2_surveys__survey_id__responses_post':
        result = await handle_submit_response_api_v2_surveys__survey_id__responses_post(args);
        break;
      case 'sync_responses_api_v2_surveys__survey_id__responses_sync_post':
        result = await handle_sync_responses_api_v2_surveys__survey_id__responses_sync_post(args);
        break;
      case 'get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_get':
        result = await handle_get_aggregated_responses_api_v2_surveys__survey_id__responses_aggregate_get(args);
        break;
      case 'get_response_properties_api_v2_surveys__survey_id__responses_properties_get':
        result = await handle_get_response_properties_api_v2_surveys__survey_id__responses_properties_get(args);
        break;
      case 'get_response_api_v2_surveys__survey_id__responses__response_id__get':
        result = await handle_get_response_api_v2_surveys__survey_id__responses__response_id__get(args);
        break;
      case 'update_response_api_v2_surveys__survey_id__responses__response_id__put':
        result = await handle_update_response_api_v2_surveys__survey_id__responses__response_id__put(args);
        break;
      case 'delete_response_api_v2_surveys__survey_id__responses__response_id__delete':
        result = await handle_delete_response_api_v2_surveys__survey_id__responses__response_id__delete(args);
        break;
      case 'generate_mock_responses_api_v2_surveys__survey_id__responses_mock_post':
        result = await handle_generate_mock_responses_api_v2_surveys__survey_id__responses_mock_post(args);
        break;
      case 'get_public_widget_responses_api_v2_surveys__survey_id__public_responses_get':
        result = await handle_get_public_widget_responses_api_v2_surveys__survey_id__public_responses_get(args);
        break;
      case 'get_visual_responses_api_v2_surveys__survey_id__visual_responses_get':
        result = await handle_get_visual_responses_api_v2_surveys__survey_id__visual_responses_get(args);
        break;
      case 'list_notes_api_v2_responses__response_id__notes_get':
        result = await handle_list_notes_api_v2_responses__response_id__notes_get(args);
        break;
      case 'create_note_api_v2_responses__response_id__notes_post':
        result = await handle_create_note_api_v2_responses__response_id__notes_post(args);
        break;
      case 'update_note_api_v2_responses__response_id__notes__note_id__put':
        result = await handle_update_note_api_v2_responses__response_id__notes__note_id__put(args);
        break;
      case 'delete_note_api_v2_responses__response_id__notes__note_id__delete':
        result = await handle_delete_note_api_v2_responses__response_id__notes__note_id__delete(args);
        break;
      case 'get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_get':
        result = await handle_get_response_ids_with_notes_api_v2_organizations_responses_notes_ids_get(args);
        break;
      case 'generate_graphs_api_v2_surveys__survey_id__graphs_generate_post':
        result = await handle_generate_graphs_api_v2_surveys__survey_id__graphs_generate_post(args);
        break;
      case 'generate_insights_api_v2_surveys__survey_id__insights_post':
        result = await handle_generate_insights_api_v2_surveys__survey_id__insights_post(args);
        break;
      case 'get_analytics_summary_api_v2_surveys__survey_id__summary_get':
        result = await handle_get_analytics_summary_api_v2_surveys__survey_id__summary_get(args);
        break;
      case 'update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_post':
        result = await handle_update_tag_cloud_api_v2_surveys__survey_id__tag_cloud_post(args);
        break;
      case 'export_analytics_api_v2_surveys__survey_id__export_post':
        result = await handle_export_analytics_api_v2_surveys__survey_id__export_post(args);
        break;
      case 'get_export_status_api_v2_surveys__survey_id__export__request_id__get':
        result = await handle_get_export_status_api_v2_surveys__survey_id__export__request_id__get(args);
        break;
      case 'create_export_api_v2_exports_surveys__survey_id__export_post':
        result = await handle_create_export_api_v2_exports_surveys__survey_id__export_post(args);
        break;
      case 'get_export_status_api_v2_exports_surveys__survey_id__export__request_id__get':
        result = await handle_get_export_status_api_v2_exports_surveys__survey_id__export__request_id__get(args);
        break;
      case 'cancel_export_api_v2_exports_surveys__survey_id__export__request_id__delete':
        result = await handle_cancel_export_api_v2_exports_surveys__survey_id__export__request_id__delete(args);
        break;
      case 'download_csv_api_v2_exports_surveys__survey_id__download_csv_post':
        result = await handle_download_csv_api_v2_exports_surveys__survey_id__download_csv_post(args);
        break;
      case 'cleanup_export_files_api_v2_exports_exports_cleanup_post':
        result = await handle_cleanup_export_files_api_v2_exports_exports_cleanup_post(args);
        break;
      case 'chat_with_surveys_api_v2_surveys_chat_post':
        result = await handle_chat_with_surveys_api_v2_surveys_chat_post(args);
        break;
      case 'get_groups_api_v2_group__get':
        result = await handle_get_groups_api_v2_group__get(args);
        break;
      case 'create_group_api_v2_group__post':
        result = await handle_create_group_api_v2_group__post(args);
        break;
      case 'update_group_api_v2_group__group_id__put':
        result = await handle_update_group_api_v2_group__group_id__put(args);
        break;
      case 'delete_group_api_v2_group__group_id__delete':
        result = await handle_delete_group_api_v2_group__group_id__delete(args);
        break;
      case 'add_users_to_group_api_v2_group__group_id__users_post':
        result = await handle_add_users_to_group_api_v2_group__group_id__users_post(args);
        break;
      case 'get_group_surveys_api_v2_group__group_id__surveys_get':
        result = await handle_get_group_surveys_api_v2_group__group_id__surveys_get(args);
        break;
      case 'assign_surveys_to_group_api_v2_group__group_id__surveys_post':
        result = await handle_assign_surveys_to_group_api_v2_group__group_id__surveys_post(args);
        break;
      case 'get_group_details_api_v2_group_details__get':
        result = await handle_get_group_details_api_v2_group_details__get(args);
        break;
      case 'get_theme_api_v2_themes__theme_id__get':
        result = await handle_get_theme_api_v2_themes__theme_id__get(args);
        break;
      case 'update_theme_api_v2_themes__theme_id__put':
        result = await handle_update_theme_api_v2_themes__theme_id__put(args);
        break;
      case 'delete_theme_api_v2_themes__theme_id__delete':
        result = await handle_delete_theme_api_v2_themes__theme_id__delete(args);
        break;
      case 'get_themes_api_v2_themes__get':
        result = await handle_get_themes_api_v2_themes__get(args);
        break;
      case 'create_theme_api_v2_themes__post':
        result = await handle_create_theme_api_v2_themes__post(args);
        break;
      case 'get_dictionaries_api_v2_dictionaries__get':
        result = await handle_get_dictionaries_api_v2_dictionaries__get(args);
        break;
      case 'get_survey_cx_api_v2_surveys__survey_id__cx_get':
        result = await handle_get_survey_cx_api_v2_surveys__survey_id__cx_get(args);
        break;
      case 'suggest_report_name_api_v2_business_insights_name_suggestion_post':
        result = await handle_suggest_report_name_api_v2_business_insights_name_suggestion_post(args);
        break;
      case 'update_html_with_instructions_api_v2_html_update_post':
        result = await handle_update_html_with_instructions_api_v2_html_update_post(args);
        break;
      case 'list_templates_api_v2_templates__get':
        result = await handle_list_templates_api_v2_templates__get(args);
        break;
      case 'create_template_api_v2_templates__post':
        result = await handle_create_template_api_v2_templates__post(args);
        break;
      case 'get_template_api_v2_templates__template_id__get':
        result = await handle_get_template_api_v2_templates__template_id__get(args);
        break;
      case 'update_template_api_v2_templates__template_id__put':
        result = await handle_update_template_api_v2_templates__template_id__put(args);
        break;
      case 'delete_template_api_v2_templates__template_id__delete':
        result = await handle_delete_template_api_v2_templates__template_id__delete(args);
        break;
      case 'autocomplete_api_v2_autocomplete__get':
        result = await handle_autocomplete_api_v2_autocomplete__get(args);
        break;
      case 'get_workflows_endpoint_api_v2_workflows__get':
        result = await handle_get_workflows_endpoint_api_v2_workflows__get(args);
        break;
      case 'create_workflow_endpoint_api_v2_workflows__post':
        result = await handle_create_workflow_endpoint_api_v2_workflows__post(args);
        break;
      case 'update_workflow_endpoint_api_v2_workflows__id__put':
        result = await handle_update_workflow_endpoint_api_v2_workflows__id__put(args);
        break;
      case 'delete_workflow_endpoint_api_v2_workflows__id__delete':
        result = await handle_delete_workflow_endpoint_api_v2_workflows__id__delete(args);
        break;
      case 'get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_get':
        result = await handle_get_salesforce_auth_url_api_v2_workflows_salesforce_auth_url_get(args);
        break;
      case 'exchange_salesforce_token_api_v2_workflows_salesforce_exchange_token_post':
        result = await handle_exchange_salesforce_token_api_v2_workflows_salesforce_exchange_token_post(args);
        break;
      case 'refresh_salesforce_token_api_v2_workflows_salesforce_refresh_token_post':
        result = await handle_refresh_salesforce_token_api_v2_workflows_salesforce_refresh_token_post(args);
        break;
      case 'revoke_salesforce_token_api_v2_workflows_salesforce_revoke_token_post':
        result = await handle_revoke_salesforce_token_api_v2_workflows_salesforce_revoke_token_post(args);
        break;
      case 'get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_get':
        result = await handle_get_salesforce_case_fields_api_v2_workflows_salesforce_case_fields_get(args);
        break;
      case 'test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_post':
        result = await handle_test_salesforce_mapping_api_v2_workflows_salesforce_test_mapping_post(args);
        break;
      case 'validate_salesforce_connection_api_v2_workflows_salesforce_validate_connection_post':
        result = await handle_validate_salesforce_connection_api_v2_workflows_salesforce_validate_connection_post(args);
        break;
      case 'test_emarsys_connection_api_v2_emarsys_test_connection_post':
        result = await handle_test_emarsys_connection_api_v2_emarsys_test_connection_post(args);
        break;
      case 'get_emarsys_fields_api_v2_emarsys_fields_post':
        result = await handle_get_emarsys_fields_api_v2_emarsys_fields_post(args);
        break;
      case 'create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__post':
        result = await handle_create_dynamic_fields_for_survey_api_v2_emarsys_create_dynamic_fields__survey_id__post(args);
        break;
      case 'get_survey_questions_api_v2_emarsys_survey_questions__survey_id__get':
        result = await handle_get_survey_questions_api_v2_emarsys_survey_questions__survey_id__get(args);
        break;
      case 'get_feeds_api_v2_feeds__get':
        result = await handle_get_feeds_api_v2_feeds__get(args);
        break;
      case 'create_feed_api_v2_feeds__post':
        result = await handle_create_feed_api_v2_feeds__post(args);
        break;
      case 'get_feed_api_v2_feeds__feed_id__get':
        result = await handle_get_feed_api_v2_feeds__feed_id__get(args);
        break;
      case 'update_feed_api_v2_feeds__feed_id__patch':
        result = await handle_update_feed_api_v2_feeds__feed_id__patch(args);
        break;
      case 'delete_feed_api_v2_feeds__feed_id__delete':
        result = await handle_delete_feed_api_v2_feeds__feed_id__delete(args);
        break;
      case 'get_feed_by_hash_api_v2_feeds_hash__share_link_hash__get':
        result = await handle_get_feed_by_hash_api_v2_feeds_hash__share_link_hash__get(args);
        break;
      case 'business_insights_api_v2_resonance_business_insights_post':
        result = await handle_business_insights_api_v2_resonance_business_insights_post(args);
        break;
      case 'get_public_feed_api_v2_public_share_feed__share_link_hash__get':
        result = await handle_get_public_feed_api_v2_public_share_feed__share_link_hash__get(args);
        break;
      case 'get_widget_data_api_v2_public_widget__embed_token__get':
        result = await handle_get_widget_data_api_v2_public_widget__embed_token__get(args);
        break;
      case 'track_survey_view_api_v2_public_surveys_track_view_post':
        result = await handle_track_survey_view_api_v2_public_surveys_track_view_post(args);
        break;
      case 'get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_get':
        result = await handle_get_survey_view_stats_api_v2_public_surveys__survey_id__view_stats_get(args);
        break;
      case 'get_company_data_api_v2_company_get':
        result = await handle_get_company_data_api_v2_company_get(args);
        break;
      case 'list_reports_api_v2_reports__get':
        result = await handle_list_reports_api_v2_reports__get(args);
        break;
      case 'create_report_api_v2_reports__post':
        result = await handle_create_report_api_v2_reports__post(args);
        break;
      case 'get_scheduler_status_api_v2_reports_scheduler_status_get':
        result = await handle_get_scheduler_status_api_v2_reports_scheduler_status_get(args);
        break;
      case 'get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_get':
        result = await handle_get_upcoming_report_runs_api_v2_reports_scheduler_next_runs_get(args);
        break;
      case 'get_scheduled_reports_api_v2_reports_scheduled_get':
        result = await handle_get_scheduled_reports_api_v2_reports_scheduled_get(args);
        break;
      case 'health_check_api_v2_reports_health_get':
        result = await handle_health_check_api_v2_reports_health_get(args);
        break;
      case 'get_report_api_v2_reports__report_id__get':
        result = await handle_get_report_api_v2_reports__report_id__get(args);
        break;
      case 'update_report_api_v2_reports__report_id__put':
        result = await handle_update_report_api_v2_reports__report_id__put(args);
        break;
      case 'delete_report_api_v2_reports__report_id__delete':
        result = await handle_delete_report_api_v2_reports__report_id__delete(args);
        break;
      case 'execute_report_api_v2_reports__report_id__execute_post':
        result = await handle_execute_report_api_v2_reports__report_id__execute_post(args);
        break;
      case 'preview_report_api_v2_reports__report_id__preview_post':
        result = await handle_preview_report_api_v2_reports__report_id__preview_post(args);
        break;
      case 'list_report_executions_api_v2_reports__report_id__executions_get':
        result = await handle_list_report_executions_api_v2_reports__report_id__executions_get(args);
        break;
      case 'get_report_statistics_api_v2_reports__report_id__statistics_get':
        result = await handle_get_report_statistics_api_v2_reports__report_id__statistics_get(args);
        break;
      case 'force_execute_report_api_v2_reports__report_id__execute_force_post':
        result = await handle_force_execute_report_api_v2_reports__report_id__execute_force_post(args);
        break;
      case 'export_report_api_v2_reports__report_id__export_post':
        result = await handle_export_report_api_v2_reports__report_id__export_post(args);
        break;
      case 'duplicate_report_api_v2_reports__report_id__duplicate_post':
        result = await handle_duplicate_report_api_v2_reports__report_id__duplicate_post(args);
        break;
      case 'toggle_report_active_status_api_v2_reports__report_id__toggle_active_patch':
        result = await handle_toggle_report_active_status_api_v2_reports__report_id__toggle_active_patch(args);
        break;
      case 'test_send_report_api_v2_reports_test_send_post':
        result = await handle_test_send_report_api_v2_reports_test_send_post(args);
        break;
      case 'batch_delete_reports_api_v2_reports_batch_delete_post':
        result = await handle_batch_delete_reports_api_v2_reports_batch_delete_post(args);
        break;
      case 'get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__get':
        result = await handle_get_shared_snapshot_info_api_v2_reports_shared__share_link_hash__get(args);
        break;
      case 'get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_get':
        result = await handle_get_shared_snapshot_data_api_v2_reports_shared__share_link_hash__data_get(args);
        break;
      case 'get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_get':
        result = await handle_get_shared_snapshot_responses_api_v2_reports_shared__share_link_hash__responses_get(args);
        break;
      case 'cleanup_expired_shared_snapshots_api_v2_reports_shared_expired_delete':
        result = await handle_cleanup_expired_shared_snapshots_api_v2_reports_shared_expired_delete(args);
        break;
      case 'connect_gominga_api_v2_integrations_gominga_connect_post':
        result = await handle_connect_gominga_api_v2_integrations_gominga_connect_post(args);
        break;
      case 'get_auth_url_api_v2_integrations_gominga_auth_get':
        result = await handle_get_auth_url_api_v2_integrations_gominga_auth_get(args);
        break;
      case 'handle_callback_api_v2_integrations_gominga_callback_get':
        result = await handle_handle_callback_api_v2_integrations_gominga_callback_get(args);
        break;
      case 'sync_reviews_api_v2_integrations_gominga_sync_post':
        result = await handle_sync_reviews_api_v2_integrations_gominga_sync_post(args);
        break;
      case 'get_sync_status_api_v2_integrations_gominga_sync_status_get':
        result = await handle_get_sync_status_api_v2_integrations_gominga_sync_status_get(args);
        break;
      case 'get_reviews_api_v2_integrations_gominga_reviews_get':
        result = await handle_get_reviews_api_v2_integrations_gominga_reviews_get(args);
        break;
      case 'reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_post':
        result = await handle_reply_to_review_api_v2_integrations_gominga_reviews__review_id__reply_post(args);
        break;
      case 'disconnect_gominga_api_v2_integrations_gominga_disconnect_delete':
        result = await handle_disconnect_gominga_api_v2_integrations_gominga_disconnect_delete(args);
        break;
      case 'get_mock_reviews_api_v2_integrations_gominga_reviews_mock_get':
        result = await handle_get_mock_reviews_api_v2_integrations_gominga_reviews_mock_get(args);
        break;
      case 'get_surveys_with_scores_api_v2_surveys_with_scores_get':
        result = await handle_get_surveys_with_scores_api_v2_surveys_with_scores_get(args);
        break;
      case 'get_survey_score_details_api_v2_surveys__survey_id__score_details_get':
        result = await handle_get_survey_score_details_api_v2_surveys__survey_id__score_details_get(args);
        break;
      case 'get_widget_score_api_v2_widget_surveys__survey_id__score_get':
        result = await handle_get_widget_score_api_v2_widget_surveys__survey_id__score_get(args);
        break;
      case 'get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_get':
        result = await handle_get_sentiment_analytics_api_v2_surveys__survey_id__sentiment_analytics_get(args);
        break;
      case 'get_used_topics_api_v2_surveys__survey_id__topics_used_get':
        result = await handle_get_used_topics_api_v2_surveys__survey_id__topics_used_get(args);
        break;
      case 'list_journeys_api_v2_journeys_get':
        result = await handle_list_journeys_api_v2_journeys_get(args);
        break;
      case 'create_journey_api_v2_journeys_post':
        result = await handle_create_journey_api_v2_journeys_post(args);
        break;
      case 'list_templates_api_v2_journeys_templates_get':
        result = await handle_list_templates_api_v2_journeys_templates_get(args);
        break;
      case 'get_template_api_v2_journeys_templates__template_id__get':
        result = await handle_get_template_api_v2_journeys_templates__template_id__get(args);
        break;
      case 'create_from_template_api_v2_journeys_templates__template_id__create_post':
        result = await handle_create_from_template_api_v2_journeys_templates__template_id__create_post(args);
        break;
      case 'get_journey_api_v2_journeys__journey_id__get':
        result = await handle_get_journey_api_v2_journeys__journey_id__get(args);
        break;
      case 'update_journey_api_v2_journeys__journey_id__patch':
        result = await handle_update_journey_api_v2_journeys__journey_id__patch(args);
        break;
      case 'delete_journey_api_v2_journeys__journey_id__delete':
        result = await handle_delete_journey_api_v2_journeys__journey_id__delete(args);
        break;
      case 'generate_journey_ai_api_v2_journeys_generate_post':
        result = await handle_generate_journey_ai_api_v2_journeys_generate_post(args);
        break;
      case 'save_generated_journeys_api_v2_journeys_generate_save_post':
        result = await handle_save_generated_journeys_api_v2_journeys_generate_save_post(args);
        break;
      case 'suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_post':
        result = await handle_suggest_touchpoint_config_api_v2_journeys_touchpoints_suggest_post(args);
        break;
      case 'analyze_csv_journeys_api_v2_journeys_analyze_csv_post':
        result = await handle_analyze_csv_journeys_api_v2_journeys_analyze_csv_post(args);
        break;
      case 'create_stage_api_v2_journeys__journey_id__stages_post':
        result = await handle_create_stage_api_v2_journeys__journey_id__stages_post(args);
        break;
      case 'update_stage_api_v2_journeys_stages__stage_id__patch':
        result = await handle_update_stage_api_v2_journeys_stages__stage_id__patch(args);
        break;
      case 'delete_stage_api_v2_journeys_stages__stage_id__delete':
        result = await handle_delete_stage_api_v2_journeys_stages__stage_id__delete(args);
        break;
      case 'reorder_stages_api_v2_journeys__journey_id__stages_reorder_put':
        result = await handle_reorder_stages_api_v2_journeys__journey_id__stages_reorder_put(args);
        break;
      case 'create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_post':
        result = await handle_create_touchpoint_api_v2_journeys_stages__stage_id__touchpoints_post(args);
        break;
      case 'update_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__patch':
        result = await handle_update_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__patch(args);
        break;
      case 'delete_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__delete':
        result = await handle_delete_touchpoint_api_v2_journeys_touchpoints__touchpoint_id__delete(args);
        break;
      case 'reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_put':
        result = await handle_reorder_touchpoints_api_v2_journeys_stages__stage_id__touchpoints_reorder_put(args);
        break;
      case 'get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_get':
        result = await handle_get_touchpoint_surveys_api_v2_journeys_touchpoints__touchpoint_id__surveys_get(args);
        break;
      case 'link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_post':
        result = await handle_link_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys_post(args);
        break;
      case 'unlink_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys__survey_id__delete':
        result = await handle_unlink_survey_api_v2_journeys_touchpoints__touchpoint_id__surveys__survey_id__delete(args);
        break;
      case 'get_organization_settings_api_v2_phone_numbers_organization_settings_get':
        result = await handle_get_organization_settings_api_v2_phone_numbers_organization_settings_get(args);
        break;
      case 'suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_get':
        result = await handle_suggest_area_codes_api_v2_phone_numbers_suggest_area_codes_get(args);
        break;
      case 'search_region_numbers_api_v2_phone_numbers_search_region_get':
        result = await handle_search_region_numbers_api_v2_phone_numbers_search_region_get(args);
        break;
      case 'search_available_numbers_api_v2_phone_numbers_search_get':
        result = await handle_search_available_numbers_api_v2_phone_numbers_search_get(args);
        break;
      case 'purchase_number_api_v2_phone_numbers_purchase_post':
        result = await handle_purchase_number_api_v2_phone_numbers_purchase_post(args);
        break;
      case 'list_phone_numbers_api_v2_phone_numbers_get':
        result = await handle_list_phone_numbers_api_v2_phone_numbers_get(args);
        break;
      case 'assign_number_to_survey_api_v2_phone_numbers__number_id__assign_post':
        result = await handle_assign_number_to_survey_api_v2_phone_numbers__number_id__assign_post(args);
        break;
      case 'unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_post':
        result = await handle_unassign_number_from_survey_api_v2_phone_numbers__number_id__unassign_post(args);
        break;
      case 'release_number_api_v2_phone_numbers__number_id__release_post':
        result = await handle_release_number_api_v2_phone_numbers__number_id__release_post(args);
        break;
      case 'get_number_details_api_v2_phone_numbers__number_id__get':
        result = await handle_get_number_details_api_v2_phone_numbers__number_id__get(args);
        break;
      case 'get_survey_config_api_v2_phone_configs_surveys__survey_id__config_get':
        result = await handle_get_survey_config_api_v2_phone_configs_surveys__survey_id__config_get(args);
        break;
      case 'update_survey_config_api_v2_phone_configs_surveys__survey_id__config_put':
        result = await handle_update_survey_config_api_v2_phone_configs_surveys__survey_id__config_put(args);
        break;
      case 'list_presets_api_v2_phone_configs_presets_get':
        result = await handle_list_presets_api_v2_phone_configs_presets_get(args);
        break;
      case 'create_preset_api_v2_phone_configs_presets_post':
        result = await handle_create_preset_api_v2_phone_configs_presets_post(args);
        break;
      case 'delete_preset_api_v2_phone_configs_presets__preset_id__delete':
        result = await handle_delete_preset_api_v2_phone_configs_presets__preset_id__delete(args);
        break;
      case 'list_available_voices_api_v2_phone_configs_voices_get':
        result = await handle_list_available_voices_api_v2_phone_configs_voices_get(args);
        break;
      case 'list_available_languages_api_v2_phone_configs_languages_get':
        result = await handle_list_available_languages_api_v2_phone_configs_languages_get(args);
        break;
      case 'preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_post':
        result = await handle_preview_test_script_api_v2_surveys__survey_id__test_calls_preview_script_post(args);
        break;
      case 'create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_post':
        result = await handle_create_phone_test_call_api_v2_surveys__survey_id__test_calls_phone_post(args);
        break;
      case 'list_test_calls_api_v2_surveys__survey_id__test_calls_get':
        result = await handle_list_test_calls_api_v2_surveys__survey_id__test_calls_get(args);
        break;
      case 'create_test_call_api_v2_surveys__survey_id__test_calls_post':
        result = await handle_create_test_call_api_v2_surveys__survey_id__test_calls_post(args);
        break;
      case 'get_test_call_api_v2_surveys__survey_id__test_calls__test_id__get':
        result = await handle_get_test_call_api_v2_surveys__survey_id__test_calls__test_id__get(args);
        break;
      case 'delete_test_call_api_v2_surveys__survey_id__test_calls__test_id__delete':
        result = await handle_delete_test_call_api_v2_surveys__survey_id__test_calls__test_id__delete(args);
        break;
      case 'approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_post':
        result = await handle_approve_test_call_api_v2_surveys__survey_id__test_calls__test_id__approve_post(args);
        break;
      case 'sync_test_call_results_api_v2_surveys__survey_id__test_calls__test_id__sync_post':
        result = await handle_sync_test_call_results_api_v2_surveys__survey_id__test_calls__test_id__sync_post(args);
        break;
      case 'complete_test_call_api_v2_surveys__survey_id__test_calls__test_id__complete_post':
        result = await handle_complete_test_call_api_v2_surveys__survey_id__test_calls__test_id__complete_post(args);
        break;
      case 'bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_post':
        result = await handle_bland_webhook_handler_api_v2_surveys__survey_id__test_calls_webhook_post(args);
        break;
      case 'upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_post':
        result = await handle_upload_csv_api_v2_surveys__survey_id__phone_campaigns_upload_post(args);
        break;
      case 'validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_post':
        result = await handle_validate_csv_api_v2_surveys__survey_id__phone_campaigns_validate_post(args);
        break;
      case 'list_campaigns_api_v2_surveys__survey_id__phone_campaigns_get':
        result = await handle_list_campaigns_api_v2_surveys__survey_id__phone_campaigns_get(args);
        break;
      case 'create_campaign_api_v2_surveys__survey_id__phone_campaigns_post':
        result = await handle_create_campaign_api_v2_surveys__survey_id__phone_campaigns_post(args);
        break;
      case 'get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__get':
        result = await handle_get_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__get(args);
        break;
      case 'delete_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__delete':
        result = await handle_delete_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__delete(args);
        break;
      case 'start_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__start_post':
        result = await handle_start_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__start_post(args);
        break;
      case 'pause_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__pause_put':
        result = await handle_pause_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__pause_put(args);
        break;
      case 'resume_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__resume_put':
        result = await handle_resume_campaign_api_v2_surveys__survey_id__phone_campaigns__campaign_id__resume_put(args);
        break;
      case 'retry_failed_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_retry_post':
        result = await handle_retry_failed_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_retry_post(args);
        break;
      case 'get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_get':
        result = await handle_get_campaign_contacts_api_v2_surveys__survey_id__phone_campaigns__campaign_id__contacts_get(args);
        break;
      case 'handle_campaign_webhook_api_v2_surveys__survey_id__phone_campaigns__campaign_id__webhook_post':
        result = await handle_handle_campaign_webhook_api_v2_surveys__survey_id__phone_campaigns__campaign_id__webhook_post(args);
        break;
      case 'get_products_api_v2_products_get':
        result = await handle_get_products_api_v2_products_get(args);
        break;
      case 'create_product_api_v2_products_post':
        result = await handle_create_product_api_v2_products_post(args);
        break;
      case 'get_product_api_v2_products__product_id__get':
        result = await handle_get_product_api_v2_products__product_id__get(args);
        break;
      case 'update_product_api_v2_products__product_id__put':
        result = await handle_update_product_api_v2_products__product_id__put(args);
        break;
      case 'delete_product_api_v2_products__product_id__delete':
        result = await handle_delete_product_api_v2_products__product_id__delete(args);
        break;
      case 'get_products_by_external_ids_public_api_v2_by_external_ids_public_get':
        result = await handle_get_products_by_external_ids_public_api_v2_by_external_ids_public_get(args);
        break;
      case 'import_products_api_v2_products_import_post':
        result = await handle_import_products_api_v2_products_import_post(args);
        break;
      case 'get_product_review_summary_api_v2_products__product_id__reviews_summary_get':
        result = await handle_get_product_review_summary_api_v2_products__product_id__reviews_summary_get(args);
        break;
      case 'get_product_reviews_api_v2_products__product_id__reviews_get':
        result = await handle_get_product_reviews_api_v2_products__product_id__reviews_get(args);
        break;
      case 'get_order_detail_api_v2_orders__order_id__detail_get':
        result = await handle_get_order_detail_api_v2_orders__order_id__detail_get(args);
        break;
      case 'get_reviews_api_v2_reviews_get':
        result = await handle_get_reviews_api_v2_reviews_get(args);
        break;
      case 'export_google_product_reviews_feed_api_v2_reviews_export_google_feed_get':
        result = await handle_export_google_product_reviews_feed_api_v2_reviews_export_google_feed_get(args);
        break;
      case 'export_reviews_api_v2_reviews_export_get':
        result = await handle_export_reviews_api_v2_reviews_export_get(args);
        break;
      case 'update_review_status_api_v2_reviews__review_id__status_patch':
        result = await handle_update_review_status_api_v2_reviews__review_id__status_patch(args);
        break;
      case 'add_review_response_api_v2_reviews__review_id__response_post':
        result = await handle_add_review_response_api_v2_reviews__review_id__response_post(args);
        break;
      case 'delete_review_response_api_v2_reviews__review_id__response_delete':
        result = await handle_delete_review_response_api_v2_reviews__review_id__response_delete(args);
        break;
      case 'get_product_review_summary_api_v2_reviews_product__product_id__summary_get':
        result = await handle_get_product_review_summary_api_v2_reviews_product__product_id__summary_get(args);
        break;
      case 'get_categories_api_v2_categories_get':
        result = await handle_get_categories_api_v2_categories_get(args);
        break;
      case 'create_category_api_v2_categories_post':
        result = await handle_create_category_api_v2_categories_post(args);
        break;
      case 'get_category_api_v2_categories__category_id__get':
        result = await handle_get_category_api_v2_categories__category_id__get(args);
        break;
      case 'update_category_api_v2_categories__category_id__put':
        result = await handle_update_category_api_v2_categories__category_id__put(args);
        break;
      case 'delete_category_api_v2_categories__category_id__delete':
        result = await handle_delete_category_api_v2_categories__category_id__delete(args);
        break;
      case 'get_orders_api_v2_orders_get':
        result = await handle_get_orders_api_v2_orders_get(args);
        break;
      case 'create_order_api_v2_orders_post':
        result = await handle_create_order_api_v2_orders_post(args);
        break;
      case 'get_order_api_v2_orders__order_id__get':
        result = await handle_get_order_api_v2_orders__order_id__get(args);
        break;
      case 'update_order_api_v2_orders__order_id__put':
        result = await handle_update_order_api_v2_orders__order_id__put(args);
        break;
      case 'delete_order_api_v2_orders__order_id__delete':
        result = await handle_delete_order_api_v2_orders__order_id__delete(args);
        break;
      case 'get_order_survey_link_api_v2_orders__order_id__survey_link_get':
        result = await handle_get_order_survey_link_api_v2_orders__order_id__survey_link_get(args);
        break;
      case 'import_orders_api_v2_orders_import_post':
        result = await handle_import_orders_api_v2_orders_import_post(args);
        break;
      case 'send_review_request_api_v2_orders__order_id__send_review_request_post':
        result = await handle_send_review_request_api_v2_orders__order_id__send_review_request_post(args);
        break;
      case 'send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_post':
        result = await handle_send_bulk_review_requests_api_v2_orders_send_bulk_review_requests_post(args);
        break;
      case 'ai_powered_review_search_api_v2_reviews_ai_search_get':
        result = await handle_ai_powered_review_search_api_v2_reviews_ai_search_get(args);
        break;
      case 'get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_get':
        result = await handle_get_reviewer_profile_api_v2_reviewers__reviewer_email__profile_get(args);
        break;
      case 'get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_get':
        result = await handle_get_reviewer_reviews_api_v2_reviewers__reviewer_email__reviews_get(args);
        break;
      case 'get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_get':
        result = await handle_get_similar_reviewers_api_v2_reviewers__reviewer_email__similar_get(args);
        break;
      case 'get_power_reviewers_api_v2_reviewers_power_reviewers_get':
        result = await handle_get_power_reviewers_api_v2_reviewers_power_reviewers_get(args);
        break;
      case 'generate_embeddings_bulk_api_v2_reviewers_generate_embeddings_post':
        result = await handle_generate_embeddings_bulk_api_v2_reviewers_generate_embeddings_post(args);
        break;
      case 'refresh_reviewer_stats_api_v2_reviewers_refresh_stats_post':
        result = await handle_refresh_reviewer_stats_api_v2_reviewers_refresh_stats_post(args);
        break;
      case 'get_order_analytics_api_v2_orders_analytics_get':
        result = await handle_get_order_analytics_api_v2_orders_analytics_get(args);
        break;
      case 'get_single_order_analytics_api_v2_orders__order_id__analytics_get':
        result = await handle_get_single_order_analytics_api_v2_orders__order_id__analytics_get(args);
        break;
      case 'get_product_config_api_v2_organization_product_config_get':
        result = await handle_get_product_config_api_v2_organization_product_config_get(args);
        break;
      case 'update_product_config_api_v2_organization_product_config_patch':
        result = await handle_update_product_config_api_v2_organization_product_config_patch(args);
        break;
      case 'apply_config_preset_api_v2_organization_product_config_preset__preset_name__post':
        result = await handle_apply_config_preset_api_v2_organization_product_config_preset__preset_name__post(args);
        break;
      case 'resolve_surveys_by_products_api_v2_surveys_resolve_by_products_get':
        result = await handle_resolve_surveys_by_products_api_v2_surveys_resolve_by_products_get(args);
        break;
      case 'resolve_surveys_api_v2_surveys_resolve_post':
        result = await handle_resolve_surveys_api_v2_surveys_resolve_post(args);
        break;
      case 'get_assignments_api_v2_survey_assignments_get':
        result = await handle_get_assignments_api_v2_survey_assignments_get(args);
        break;
      case 'create_assignment_api_v2_survey_assignments_post':
        result = await handle_create_assignment_api_v2_survey_assignments_post(args);
        break;
      case 'update_assignment_api_v2_survey_assignments__assignment_id__put':
        result = await handle_update_assignment_api_v2_survey_assignments__assignment_id__put(args);
        break;
      case 'delete_assignment_api_v2_survey_assignments__assignment_id__delete':
        result = await handle_delete_assignment_api_v2_survey_assignments__assignment_id__delete(args);
        break;
      case 'bulk_create_assignments_api_v2_survey_assignments_bulk_post':
        result = await handle_bulk_create_assignments_api_v2_survey_assignments_bulk_post(args);
        break;
      case 'get_assignments_by_products_api_v2_survey_assignments_by_products_post':
        result = await handle_get_assignments_by_products_api_v2_survey_assignments_by_products_post(args);
        break;
      case 'delete_assignments_by_survey_api_v2_survey_assignments_by_survey__survey_id__delete':
        result = await handle_delete_assignments_by_survey_api_v2_survey_assignments_by_survey__survey_id__delete(args);
        break;
      case 'get_assignment_statistics_api_v2_survey_assignments_stats_get':
        result = await handle_get_assignment_statistics_api_v2_survey_assignments_stats_get(args);
        break;
      case 'get_active_configuration_api_v2_survey_chain_config_active_get':
        result = await handle_get_active_configuration_api_v2_survey_chain_config_active_get(args);
        break;
      case 'get_all_configurations_api_v2_survey_chain_config_get':
        result = await handle_get_all_configurations_api_v2_survey_chain_config_get(args);
        break;
      case 'create_configuration_api_v2_survey_chain_config_post':
        result = await handle_create_configuration_api_v2_survey_chain_config_post(args);
        break;
      case 'update_configuration_api_v2_survey_chain_config__config_id__put':
        result = await handle_update_configuration_api_v2_survey_chain_config__config_id__put(args);
        break;
      case 'delete_configuration_api_v2_survey_chain_config__config_id__delete':
        result = await handle_delete_configuration_api_v2_survey_chain_config__config_id__delete(args);
        break;
      case 'get_recommendations_api_v2_survey_chain_config_recommendations_post':
        result = await handle_get_recommendations_api_v2_survey_chain_config_recommendations_post(args);
        break;
      case 'test_optimization_api_v2_survey_chain_config_test_optimization_post':
        result = await handle_test_optimization_api_v2_survey_chain_config_test_optimization_post(args);
        break;
      case 'resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_get':
        result = await handle_resolve_surveys_by_products_public_api_v2_public_surveys_resolve_by_products_get(args);
        break;
      case 'resolve_surveys_public_api_v2_public_surveys_resolve_post':
        result = await handle_resolve_surveys_public_api_v2_public_surveys_resolve_post(args);
        break;
      case 'handle_survey_response_api_v2_webhooks_survey_response_post':
        result = await handle_handle_survey_response_api_v2_webhooks_survey_response_post(args);
        break;
      case 'handle_order_status_api_v2_webhooks_order_status_post':
        result = await handle_handle_order_status_api_v2_webhooks_order_status_post(args);
        break;
      case 'handle_order_shipment_api_v2_webhooks_order_shipment_post':
        result = await handle_handle_order_shipment_api_v2_webhooks_order_shipment_post(args);
        break;
      case 'handle_order_delivery_api_v2_webhooks_order_delivery_post':
        result = await handle_handle_order_delivery_api_v2_webhooks_order_delivery_post(args);
        break;
      case 'get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_get':
        result = await handle_get_pending_scheduled_emails_api_v2_webhooks_scheduled_emails_pending_get(args);
        break;
      case 'process_scheduled_email_api_v2_webhooks_scheduled_emails__email_id__process_post':
        result = await handle_process_scheduled_email_api_v2_webhooks_scheduled_emails__email_id__process_post(args);
        break;
      case 'list_segments_api_v2_contacts_segments__get':
        result = await handle_list_segments_api_v2_contacts_segments__get(args);
        break;
      case 'create_segment_api_v2_contacts_segments__post':
        result = await handle_create_segment_api_v2_contacts_segments__post(args);
        break;
      case 'get_segment_api_v2_contacts_segments__segment_id__get':
        result = await handle_get_segment_api_v2_contacts_segments__segment_id__get(args);
        break;
      case 'update_segment_api_v2_contacts_segments__segment_id__patch':
        result = await handle_update_segment_api_v2_contacts_segments__segment_id__patch(args);
        break;
      case 'delete_segment_api_v2_contacts_segments__segment_id__delete':
        result = await handle_delete_segment_api_v2_contacts_segments__segment_id__delete(args);
        break;
      case 'get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_get':
        result = await handle_get_segment_contacts_api_v2_contacts_segments__segment_id__contacts_get(args);
        break;
      case 'refresh_segment_api_v2_contacts_segments__segment_id__refresh_post':
        result = await handle_refresh_segment_api_v2_contacts_segments__segment_id__refresh_post(args);
        break;
      case 'add_members_api_v2_contacts_segments__segment_id__members_post':
        result = await handle_add_members_api_v2_contacts_segments__segment_id__members_post(args);
        break;
      case 'remove_members_api_v2_contacts_segments__segment_id__members_delete':
        result = await handle_remove_members_api_v2_contacts_segments__segment_id__members_delete(args);
        break;
      case 'quick_search_api_v2_contacts_search__get':
        result = await handle_quick_search_api_v2_contacts_search__get(args);
        break;
      case 'semantic_search_api_v2_contacts_search_semantic_post':
        result = await handle_semantic_search_api_v2_contacts_search_semantic_post(args);
        break;
      case 'get_suggestions_api_v2_contacts_search_suggest_get':
        result = await handle_get_suggestions_api_v2_contacts_search_suggest_get(args);
        break;
      case 'search_by_attributes_api_v2_contacts_search_attributes_post':
        result = await handle_search_by_attributes_api_v2_contacts_search_attributes_post(args);
        break;
      case 'list_interactions_api_v2_contacts__contact_id__interactions__get':
        result = await handle_list_interactions_api_v2_contacts__contact_id__interactions__get(args);
        break;
      case 'log_interaction_api_v2_contacts__contact_id__interactions__post':
        result = await handle_log_interaction_api_v2_contacts__contact_id__interactions__post(args);
        break;
      case 'get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_get':
        result = await handle_get_interaction_stats_api_v2_contacts__contact_id__interactions_stats_get(args);
        break;
      case 'list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_get':
        result = await handle_list_replies_api_v2_contacts__contact_id__interactions__interaction_id__replies_get(args);
        break;
      case 'create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_post':
        result = await handle_create_reply_api_v2_contacts__contact_id__interactions__interaction_id__replies_post(args);
        break;
      case 'update_reply_api_v2_replies__reply_id__put':
        result = await handle_update_reply_api_v2_replies__reply_id__put(args);
        break;
      case 'delete_reply_api_v2_replies__reply_id__delete':
        result = await handle_delete_reply_api_v2_replies__reply_id__delete(args);
        break;
      case 'get_contact_content_api_v2_contacts__contact_id__content__get':
        result = await handle_get_contact_content_api_v2_contacts__contact_id__content__get(args);
        break;
      case 'list_contact_content_api_v2_contacts__contact_id__content_all_get':
        result = await handle_list_contact_content_api_v2_contacts__contact_id__content_all_get(args);
        break;
      case 'list_definitions_api_v2_contacts_attributes_definitions_get':
        result = await handle_list_definitions_api_v2_contacts_attributes_definitions_get(args);
        break;
      case 'create_definition_api_v2_contacts_attributes_definitions_post':
        result = await handle_create_definition_api_v2_contacts_attributes_definitions_post(args);
        break;
      case 'get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_get':
        result = await handle_get_grouped_definitions_api_v2_contacts_attributes_definitions_grouped_get(args);
        break;
      case 'get_definition_api_v2_contacts_attributes_definitions__definition_id__get':
        result = await handle_get_definition_api_v2_contacts_attributes_definitions__definition_id__get(args);
        break;
      case 'update_definition_api_v2_contacts_attributes_definitions__definition_id__patch':
        result = await handle_update_definition_api_v2_contacts_attributes_definitions__definition_id__patch(args);
        break;
      case 'delete_definition_api_v2_contacts_attributes_definitions__definition_id__delete':
        result = await handle_delete_definition_api_v2_contacts_attributes_definitions__definition_id__delete(args);
        break;
      case 'get_rules_api_v2_contacts_throttle_rules_get':
        result = await handle_get_rules_api_v2_contacts_throttle_rules_get(args);
        break;
      case 'update_rules_api_v2_contacts_throttle_rules_put':
        result = await handle_update_rules_api_v2_contacts_throttle_rules_put(args);
        break;
      case 'get_throttle_stats_api_v2_contacts_throttle_stats_get':
        result = await handle_get_throttle_stats_api_v2_contacts_throttle_stats_get(args);
        break;
      case 'get_throttle_log_api_v2_contacts_throttle_log_get':
        result = await handle_get_throttle_log_api_v2_contacts_throttle_log_get(args);
        break;
      case 'get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__get':
        result = await handle_get_contact_by_external_id_api_v2_contacts_by_external_id__external_id__get(args);
        break;
      case 'list_contacts_api_v2_contacts__get':
        result = await handle_list_contacts_api_v2_contacts__get(args);
        break;
      case 'create_contact_api_v2_contacts__post':
        result = await handle_create_contact_api_v2_contacts__post(args);
        break;
      case 'get_contact_stats_api_v2_contacts__contact_id__stats_get':
        result = await handle_get_contact_stats_api_v2_contacts__contact_id__stats_get(args);
        break;
      case 'get_contact_api_v2_contacts__contact_id__get':
        result = await handle_get_contact_api_v2_contacts__contact_id__get(args);
        break;
      case 'update_contact_api_v2_contacts__contact_id__patch':
        result = await handle_update_contact_api_v2_contacts__contact_id__patch(args);
        break;
      case 'delete_contact_api_v2_contacts__contact_id__delete':
        result = await handle_delete_contact_api_v2_contacts__contact_id__delete(args);
        break;
      case 'bulk_update_tags_api_v2_contacts_bulk_tags_post':
        result = await handle_bulk_update_tags_api_v2_contacts_bulk_tags_post(args);
        break;
      case 'bulk_update_attributes_api_v2_contacts_bulk_attributes_post':
        result = await handle_bulk_update_attributes_api_v2_contacts_bulk_attributes_post(args);
        break;
      case 'check_throttle_api_v2_contacts__contact_id__can_contact_post':
        result = await handle_check_throttle_api_v2_contacts__contact_id__can_contact_post(args);
        break;
      case 'get_contact_source_links_api_v2_contacts__contact_id__source_links_get':
        result = await handle_get_contact_source_links_api_v2_contacts__contact_id__source_links_get(args);
        break;
      case 'list_import_jobs_api_v2_contacts_import_get':
        result = await handle_list_import_jobs_api_v2_contacts_import_get(args);
        break;
      case 'create_import_job_api_v2_contacts_import_post':
        result = await handle_create_import_job_api_v2_contacts_import_post(args);
        break;
      case 'get_import_job_api_v2_contacts_import__job_id__get':
        result = await handle_get_import_job_api_v2_contacts_import__job_id__get(args);
        break;
      case 'preview_import_api_v2_contacts_import_preview_post':
        result = await handle_preview_import_api_v2_contacts_import_preview_post(args);
        break;
      case 'list_export_jobs_api_v2_contacts_export_get':
        result = await handle_list_export_jobs_api_v2_contacts_export_get(args);
        break;
      case 'create_export_job_api_v2_contacts_export_post':
        result = await handle_create_export_job_api_v2_contacts_export_post(args);
        break;
      case 'quick_export_api_v2_contacts_export_quick_get':
        result = await handle_quick_export_api_v2_contacts_export_quick_get(args);
        break;
      case 'get_export_job_api_v2_contacts_export__job_id__get':
        result = await handle_get_export_job_api_v2_contacts_export__job_id__get(args);
        break;
      case 'download_export_api_v2_contacts_export__job_id__download_get':
        result = await handle_download_export_api_v2_contacts_export__job_id__download_get(args);
        break;
      case 'save_legacy_credentials_api_v2_migration_credentials_post':
        result = await handle_save_legacy_credentials_api_v2_migration_credentials_post(args);
        break;
      case 'delete_legacy_credentials_api_v2_migration_credentials_delete':
        result = await handle_delete_legacy_credentials_api_v2_migration_credentials_delete(args);
        break;
      case 'validate_legacy_credentials_api_v2_migration_credentials_validate_post':
        result = await handle_validate_legacy_credentials_api_v2_migration_credentials_validate_post(args);
        break;
      case 'get_credentials_status_api_v2_migration_credentials_status_get':
        result = await handle_get_credentials_status_api_v2_migration_credentials_status_get(args);
        break;
      case 'list_legacy_surveys_api_v2_migration_surveys_get':
        result = await handle_list_legacy_surveys_api_v2_migration_surveys_get(args);
        break;
      case 'get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_get':
        result = await handle_get_migration_status_api_v2_migration_surveys__legacy_survey_id__status_get(args);
        break;
      case 'preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_get':
        result = await handle_preview_survey_migration_api_v2_migration_surveys__legacy_survey_id__preview_get(args);
        break;
      case 'import_survey_api_v2_migration_surveys_import_post':
        result = await handle_import_survey_api_v2_migration_surveys_import_post(args);
        break;
      case 'import_survey_responses_api_v2_migration_responses_import_post':
        result = await handle_import_survey_responses_api_v2_migration_responses_import_post(args);
        break;
      case 'import_responses_for_survey_api_v2_migration_surveys__survey_id__import_responses_post':
        result = await handle_import_responses_for_survey_api_v2_migration_surveys__survey_id__import_responses_post(args);
        break;
      case 'get_migration_progress_api_v2_migration_status__migration_id__get':
        result = await handle_get_migration_progress_api_v2_migration_status__migration_id__get(args);
        break;
      case 'chat_http_api_v2_zagents_chat_post':
        result = await handle_chat_http_api_v2_zagents_chat_post(args);
        break;
      case 'chat_http_v2_api_v2_zagents_chat_post':
        result = await handle_chat_http_v2_api_v2_zagents_chat_post(args);
        break;
      case 'health_check_v2_api_v2_zagents_health_get':
        result = await handle_health_check_v2_api_v2_zagents_health_get(args);
        break;
      case 'create_voice_token_api_v2_zagents_voice_token_post':
        result = await handle_create_voice_token_api_v2_zagents_voice_token_post(args);
        break;
      case 'voice_health_check_api_v2_zagents_voice_health_get':
        result = await handle_voice_health_check_api_v2_zagents_voice_health_get(args);
        break;
      case 'execute_function_api_v2_zagents_voice_functions_execute_post':
        result = await handle_execute_function_api_v2_zagents_voice_functions_execute_post(args);
        break;
      case 'list_functions_api_v2_zagents_voice_functions_list_get':
        result = await handle_list_functions_api_v2_zagents_voice_functions_list_get(args);
        break;
      case 'zenguide_chat_api_v2_zagents_zenguide_chat_post':
        result = await handle_zenguide_chat_api_v2_zagents_zenguide_chat_post(args);
        break;
      case 'get_widget_responses_api_v2_widget_surveys__survey_id__responses_get':
        result = await handle_get_widget_responses_api_v2_widget_surveys__survey_id__responses_get(args);
        break;
      case 'get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_get':
        result = await handle_get_widget_visual_responses_api_v2_widget_surveys__survey_id__visual_responses_get(args);
        break;
      case 'get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__get':
        result = await handle_get_widget_gominga_reviews_api_v2_widget_gominga_reviews__organization_id__get(args);
        break;
      case 'test_widget_api_api_v2_test_widget_api_get':
        result = await handle_test_widget_api_api_v2_test_widget_api_get(args);
        break;
      case 'root__get':
        result = await handle_root__get(args);
        break;
      case 'health_health_get':
        result = await handle_health_health_get(args);
        break;
      case 'scheduler_health_health_scheduler_get':
        result = await handle_scheduler_health_health_scheduler_get(args);
        break;
      case 'memory_health_health_memory_get':
        result = await handle_memory_health_health_memory_get(args);
        break;
      case 'list_widget_embeds_api_v2_widget_embeds__get':
        result = await handle_list_widget_embeds_api_v2_widget_embeds__get(args);
        break;
      case 'create_widget_embed_api_v2_widget_embeds__post':
        result = await handle_create_widget_embed_api_v2_widget_embeds__post(args);
        break;
      case 'get_widget_embed_api_v2_widget_embeds__embed_id__get':
        result = await handle_get_widget_embed_api_v2_widget_embeds__embed_id__get(args);
        break;
      case 'update_widget_embed_api_v2_widget_embeds__embed_id__put':
        result = await handle_update_widget_embed_api_v2_widget_embeds__embed_id__put(args);
        break;
      case 'delete_widget_embed_api_v2_widget_embeds__embed_id__delete':
        result = await handle_delete_widget_embed_api_v2_widget_embeds__embed_id__delete(args);
        break;
      case 'get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__get':
        result = await handle_get_widget_embed_by_survey_question_api_v2_widget_embeds_survey__survey_id__question__question_name__get(args);
        break;
      case 'update_allowed_domains_api_v2_widget_embeds__embed_id__domains_patch':
        result = await handle_update_allowed_domains_api_v2_widget_embeds__embed_id__domains_patch(args);
        break;
      case 'toggle_widget_embed_api_v2_widget_embeds__embed_id__toggle_patch':
        result = await handle_toggle_widget_embed_api_v2_widget_embeds__embed_id__toggle_patch(args);
        break;
      default:
        throw new Error(`Unknown tool: ${name}`);
    }

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return {
      content: [{ type: 'text', text: `Error: ${message}` }],
    };
  }
}
