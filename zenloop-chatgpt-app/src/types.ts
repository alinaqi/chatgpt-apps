// Generated types for zensurveys-api

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Tool parameter types
export interface ListApiKeysApiV2AuthApiKeysGetParams {
  org_id: number;
}

export interface CreateApiKeyApiV2AuthApiKeysPostParams {
  org_id: number;
  name?: string;
  description?: string;
  expires_at?: string;
  scopes?: unknown[];
}

export interface DeleteApiKeyApiV2AuthApiKeys_keyId_deleteParams {
  key_id: string;
  org_id: number;
}

export interface SetOrganizationApiV2AuthSetOrganizationPostParams {
  org_id: number;
}

export interface GetApiLogsApiV2AuthApiKeys_keyId_logsGetParams {
  key_id: string;
  log_type?: string;
  limit?: number;
  offset?: number;
}

export interface GenerateExampleCodeApiV2AuthGenerateCodePostParams {
  use_case: string;
  language: string;
  framework?: string;
  authentication_type?: string;
  follow_up_question?: string;
  conversation_history?: string;
}

export interface ListSurveyNamesApiV2SurveysNamesGetParams {
  org_id: number;
}

export interface GetSurveysApiV2Surveys_getParams {
  page?: number;
  page_size?: number;
  tags?: string;
  search?: string;
  status?: string;
  sort_by?: string;
  sort_order?: string;
  details?: string;
}

export interface CreateSurveyApiV2Surveys_postParams {
  org_id?: string;
  survey_name: string;
  survey_description?: string;
  survey_json: Record<string, unknown>;
  theme_json?: string;
  status?: string;
  creator_id?: string;
  dictionary_id?: string;
}

export interface ListTagsApiV2SurveysTagsGetParams {
  org_id: number;
}

export interface CreateTagApiV2SurveysTagsPostParams {
  name: string;
  org_id: number;
  is_favorite?: boolean;
  auto_generated?: boolean;
}

export interface UpdateTagApiV2SurveysTags_tagId_putParams {
  tag_id: string;
  name?: string;
  is_favorite?: string;
}

export interface DeleteTagApiV2SurveysTags_tagId_deleteParams {
  tag_id: string;
}

export interface GetTagsByGroupsApiV2SurveysTagsByGroupsGetParams {
  org_id: number;
}

export interface GetSurveyApiV2Surveys_surveyId_getParams {
  survey_id: string;
}

export interface UpdateSurveyApiV2Surveys_surveyId_putParams {
  survey_id: string;
  survey_name?: string;
  survey_description?: string;
  survey_json?: string;
  theme_json?: string;
  status?: string;
  dictionary_id?: string;
}

export interface DeleteSurveyApiV2Surveys_surveyId_deleteParams {
  survey_id: string;
}

export interface UpdateSurveyStatusApiV2Surveys_surveyId_statusPutParams {
  survey_id: string;
  status: string;
}

export interface GetHtmlEmbedApiV2Surveys_surveyId_htmlEmbedGetParams {
  survey_id: string;
}

export interface CreateHtmlEmbedApiV2Surveys_surveyId_htmlEmbedPostParams {
  survey_id: string;
}

export interface UpdateHtmlEmbedApiV2Surveys_surveyId_htmlEmbedPutParams {
  survey_id: string;
  html_code: string;
}

export interface UpdateHtmlWithInstructionsApiV2Surveys_surveyId_htmlUpdatePostParams {
  survey_id: string;
}

export interface GetSurveyDefinitionApiV2Surveys_surveyId_definitionGetParams {
  survey_id: string;
}

export interface GetCleanSurveyDefinitionApiV2Surveys_surveyId_cleanDefinitionGetParams {
  survey_id: string;
}

export interface GetSurveyFiltersApiV2Surveys_surveyId_filtersGetParams {
  survey_id: string;
}

export interface GetSurveyLabelsApiV2Surveys_surveyId_labelsGetParams {
  survey_id: string;
}

export interface ProcessSurveyLabelsApiV2Surveys_surveyId_processLabelsPostParams {
  survey_id: string;
  org_id: number;
}

export interface CloneSurveyApiV2Surveys_surveyId_clonePostParams {
  survey_id: string;
  new_name: string;
  org_id: number;
  copy_responses?: boolean;
  copy_dashboard?: boolean;
}

export interface ListThemesApiV2SurveysThemesGetParams {
  org_id: number;
  page?: number;
  page_size?: number;
}

export interface CreateThemeApiV2SurveysThemesPostParams {
  name: string;
  description?: string;
  theme_json: Record<string, unknown>;
  org_id: number;
  is_default?: boolean;
}

export interface GetThemeApiV2SurveysThemes_themeId_getParams {
  theme_id: string;
  org_id: number;
}

export interface UpdateThemeApiV2SurveysThemes_themeId_putParams {
  theme_id: string;
  name?: string;
  description?: string;
  theme_json?: string;
  is_default?: string;
}

export interface DeleteThemeApiV2SurveysThemes_themeId_deleteParams {
  theme_id: string;
  org_id: number;
}

export interface GetTriggerConfigurationApiV2Surveys_surveyId_triggerConfigurationGetParams {
  survey_id: string;
  org_id: number;
}

export interface UpdateTriggerConfigurationApiV2Surveys_surveyId_triggerConfigurationPatchParams {
  survey_id: string;
  org_id: number;
}

export interface GenerateSurveyApiV2SurveysGeneratePostParams {
  user_prompt: string;
  style_guidelines?: string;
  target_audience?: string;
  survey_type?: string;
}

export interface AutoTagSurveyApiV2Surveys_surveyId_autoTagPostParams {
  survey_id: string;
}

export interface GetSurveyTagsApiV2Surveys_surveyId_tagsGetParams {
  survey_id: string;
}

export interface UpdateSurveyTagsApiV2Surveys_surveyId_tagsPutParams {
  survey_id: string;
  tag_ids: unknown[];
}

export interface AutoTagOrganizationApiV2SurveysAutoTagOrgPostParams {
  org_id: number;
}

export interface GetPublicSurveyApiV2SurveysPublic_surveyId_getParams {
  survey_id: string;
}

export interface InitiatePhoneSurveyApiV2Surveys_surveyId_callPostParams {
  survey_id: string;
  phone_number: string;
  from_number?: string;
  voice?: string;
  language?: string;
  webhook_url?: string;
  metadata?: string;
}

export interface HandlePhoneSurveyWebhookApiV2Surveys_surveyId_phoneWebhookPostParams {
  survey_id: string;
}

export interface ListOrganizationResponsesApiV2OrganizationsResponsesGetParams {
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
}

export interface ListResponsesApiV2Surveys_surveyId_responsesGetParams {
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
}

export interface SubmitResponseApiV2Surveys_surveyId_responsesPostParams {
  survey_id: string;
}

export interface SyncResponsesApiV2Surveys_surveyId_responsesSyncPostParams {
  survey_id: string;
}

export interface GetAggregatedResponsesApiV2Surveys_surveyId_responsesAggregateGetParams {
  survey_id: string;
  date_range?: string;
  start_date?: string;
  end_date?: string;
  filters?: string;
}

export interface GetResponsePropertiesApiV2Surveys_surveyId_responsesPropertiesGetParams {
  survey_id: string;
}

export interface GetResponseApiV2Surveys_surveyId_responses_responseId_getParams {
  survey_id: string;
  response_id: string;
}

export interface UpdateResponseApiV2Surveys_surveyId_responses_responseId_putParams {
  survey_id: string;
  response_id: string;
}

export interface DeleteResponseApiV2Surveys_surveyId_responses_responseId_deleteParams {
  survey_id: string;
  response_id: string;
}

export interface GenerateMockResponsesApiV2Surveys_surveyId_responsesMockPostParams {
  survey_id: string;
  org_id: string;
  num_responses?: number;
}

export interface GetPublicWidgetResponsesApiV2Surveys_surveyId_publicResponsesGetParams {
  survey_id: string;
  question_ids: unknown[];
  page?: number;
  page_size?: number;
}

export interface GetVisualResponsesApiV2Surveys_surveyId_visualResponsesGetParams {
  survey_id: string;
  query?: string;
  page?: number;
  page_size?: number;
  orientation?: string;
  size?: string;
  use_videos?: boolean;
  video_max_duration?: string;
}

export interface ListNotesApiV2Responses_responseId_notesGetParams {
  response_id: number;
}

export interface CreateNoteApiV2Responses_responseId_notesPostParams {
  response_id: number;
  note: string;
}

export interface UpdateNoteApiV2Responses_responseId_notes_noteId_putParams {
  response_id: number;
  note_id: number;
  note: string;
}

export interface DeleteNoteApiV2Responses_responseId_notes_noteId_deleteParams {
  response_id: number;
  note_id: number;
}

export interface GenerateGraphsApiV2Surveys_surveyId_graphsGeneratePostParams {
  survey_id: string;
  questions: unknown[];
  graph_type?: string;
  date_range?: string;
  start_date?: string;
  end_date?: string;
  filters?: string;
}

export interface GenerateInsightsApiV2Surveys_surveyId_insightsPostParams {
  survey_id: string;
  questions: unknown[];
  insight_type: string;
  date_range?: string;
  start_date?: string;
  end_date?: string;
  filters?: string;
}

export interface GetAnalyticsSummaryApiV2Surveys_surveyId_summaryGetParams {
  survey_id: string;
  org_id?: string;
  date_range?: string;
  start_date?: string;
  end_date?: string;
}

export interface UpdateTagCloudApiV2Surveys_surveyId_tagCloudPostParams {
  survey_id: string;
  question_name: string;
  org_id: number;
  result_id: number;
  literal_word_counts?: string;
  semantic_word_counts?: string;
}

export interface ExportAnalyticsApiV2Surveys_surveyId_exportPostParams {
  survey_id: string;
  format: string;
  questions?: string;
  date_range?: string;
  start_date?: string;
  end_date?: string;
  filters?: string;
  webhook_url?: string;
  emails?: string;
}

export interface GetExportStatusApiV2Surveys_surveyId_export_requestId_getParams {
  survey_id: string;
  request_id: string;
}

export interface CreateExportApiV2ExportsSurveys_surveyId_exportPostParams {
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
}

export interface GetExportStatusApiV2ExportsSurveys_surveyId_export_requestId_getParams {
  survey_id: string;
  request_id: string;
}

export interface CancelExportApiV2ExportsSurveys_surveyId_export_requestId_deleteParams {
  survey_id: string;
  request_id: string;
}

export interface DownloadCsvApiV2ExportsSurveys_surveyId_downloadCsvPostParams {
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
}

export interface CleanupExportFilesApiV2ExportsExportsCleanupPostParams {
  max_age_hours?: number;
}

export interface ChatWithSurveysApiV2SurveysChatPostParams {
  user_id: string;
  survey_id?: string;
  initial_message?: string;
  preferences?: string;
}

export interface GetGroupsApiV2Group_getParams {
  org_id: number;
  page?: number;
  page_size?: number;
}

export interface CreateGroupApiV2Group_postParams {
  name: string;
  org_id: number;
  user_roles?: unknown[];
  survey_ids?: unknown[];
  created_by?: string;
  user_id?: string;
}

export interface UpdateGroupApiV2Group_groupId_putParams {
  group_id: number;
  group_name?: string;
  survey_ids?: string;
  user_roles?: string;
}

export interface DeleteGroupApiV2Group_groupId_deleteParams {
  group_id: number;
}

export interface AddUsersToGroupApiV2Group_groupId_usersPostParams {
  group_id: string;
  user_ids: unknown[];
  role: string;
}

export interface GetGroupSurveysApiV2Group_groupId_surveysGetParams {
  group_id: string;
  user_role?: string;
}

export interface AssignSurveysToGroupApiV2Group_groupId_surveysPostParams {
  group_id: string;
  survey_ids: unknown[];
}

export interface GetGroupDetailsApiV2GroupDetails_getParams {
  group_id?: string;
  org_id?: string;
  user_id?: string;
  user_roles?: string;
}

export interface GetThemeApiV2Themes_themeId_getParams {
  theme_id: string;
}

export interface UpdateThemeApiV2Themes_themeId_putParams {
  theme_id: string;
  name: string;
  theme_json: Record<string, unknown>;
  org_id: number;
}

export interface DeleteThemeApiV2Themes_themeId_deleteParams {
  theme_id: string;
}

export interface GetThemesApiV2Themes_getParams {
  org_id: number;
}

export interface CreateThemeApiV2Themes_postParams {
  name: string;
  theme_json: Record<string, unknown>;
  org_id: number;
}

export interface GetSurveyCxApiV2Surveys_surveyId_cxGetParams {
  survey_id: string;
  question_name?: string;
  start_date?: string;
  end_date?: string;
  date_range?: string;
  date_grouping?: string;
  page_size?: string;
  filters?: string;
}

export interface SuggestReportNameApiV2BusinessInsightsNameSuggestionPostParams {
  journey: string;
  touchpoints: unknown[];
  insight_type: string;
  target_audience: unknown[];
}

export interface UpdateHtmlWithInstructionsApiV2HtmlUpdatePostParams {
  html_code: string;
  instructions: string;
}

export interface ListTemplatesApiV2Templates_getParams {
  access_type?: string;
  category?: string;
  industry?: string;
  customer_journey?: string;
  touchpoint?: string;
  is_popular?: string;
  page?: number;
  page_size?: number;
  search?: string;
}

export interface CreateTemplateApiV2Templates_postParams {
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
}

export interface GetTemplateApiV2Templates_templateId_getParams {
  template_id: string;
}

export interface UpdateTemplateApiV2Templates_templateId_putParams {
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
}

export interface DeleteTemplateApiV2Templates_templateId_deleteParams {
  template_id: string;
}

export interface AutocompleteApiV2Autocomplete_getParams {
  search: string;
  limit?: number;
}

export interface GetWorkflowsEndpointApiV2Workflows_getParams {
  organization_id: string;
}

export interface CreateWorkflowEndpointApiV2Workflows_postParams {
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
}

export interface UpdateWorkflowEndpointApiV2Workflows_id_putParams {
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
}

export interface DeleteWorkflowEndpointApiV2Workflows_id_deleteParams {
  id: string;
}

export interface GetSalesforceAuthUrlApiV2WorkflowsSalesforceAuthUrlGetParams {
  client_id: string;
  state?: string;
}

export interface ExchangeSalesforceTokenApiV2WorkflowsSalesforceExchangeTokenPostParams {
  code: string;
  code_verifier: string;
  client_id: string;
  client_secret: string;
}

export interface RefreshSalesforceTokenApiV2WorkflowsSalesforceRefreshTokenPostParams {
  refresh_token: string;
  client_id: string;
  client_secret: string;
}

export interface RevokeSalesforceTokenApiV2WorkflowsSalesforceRevokeTokenPostParams {
  token: string;
  client_id?: string;
  client_secret?: string;
}

export interface GetSalesforceCaseFieldsApiV2WorkflowsSalesforceCaseFieldsGetParams {
  access_token: string;
  instance_url: string;
}

export interface TestSalesforceMappingApiV2WorkflowsSalesforceTestMappingPostParams {
  workflow_data: Record<string, unknown>;
  sample_data: Record<string, unknown>;
}

export interface ValidateSalesforceConnectionApiV2WorkflowsSalesforceValidateConnectionPostParams {
  access_token: string;
  instance_url: string;
}

export interface TestEmarsysConnectionApiV2EmarsysTestConnectionPostParams {
  api_key: string;
  secret_key: string;
}

export interface GetEmarsysFieldsApiV2EmarsysFieldsPostParams {
  survey_id?: string;
  api_key: string;
  secret_key: string;
}

export interface CreateDynamicFieldsForSurveyApiV2EmarsysCreateDynamicFields_surveyId_postParams {
  survey_id: string;
  api_key: string;
  secret_key: string;
  workflow_name?: string;
}

export interface GetSurveyQuestionsApiV2EmarsysSurveyQuestions_surveyId_getParams {
  survey_id: string;
}

export interface GetFeedsApiV2Feeds_getParams {
  survey_id?: string;
  page?: number;
  page_size?: number;
}

export interface CreateFeedApiV2Feeds_postParams {
  name: string;
  survey_id: number;
  org_id?: string;
  questions?: string;
  layout?: string;
  trend_period?: string;
  start_date?: string;
  end_date?: string;
  filters?: string;
}

export interface GetFeedApiV2Feeds_feedId_getParams {
  feed_id: number;
}

export interface UpdateFeedApiV2Feeds_feedId_patchParams {
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
}

export interface DeleteFeedApiV2Feeds_feedId_deleteParams {
  feed_id: number;
}

export interface GetFeedByHashApiV2FeedsHash_shareLinkHash_getParams {
  share_link_hash: string;
}

export interface BusinessInsightsApiV2ResonanceBusinessInsightsPostParams {
  authorization?: string;
  session_id?: string;
  user_input: string;
  current_state?: Record<string, unknown>;
}

export interface GetPublicFeedApiV2PublicShareFeed_shareLinkHash_getParams {
  share_link_hash: string;
}

export interface GetWidgetDataApiV2PublicWidget_embedToken_getParams {
  embed_token: string;
}

export interface TrackSurveyViewApiV2PublicSurveysTrackViewPostParams {
  survey_id: number;
  org_id: number;
  distribution_type?: string;
  user_hash?: string;
  session_id?: string;
}

export interface GetSurveyViewStatsApiV2PublicSurveys_surveyId_viewStatsGetParams {
  survey_id: number;
  org_id: number;
}

export interface GetCompanyDataApiV2CompanyGetParams {
  google_place_id?: string;
  trustpilot_business_unit?: string;
  max_reviews?: number;
}

export interface ListReportsApiV2Reports_getParams {
  page?: number;
  per_page?: number;
  status?: string;
  is_active?: string;
  survey_id?: string;
  group_id?: string;
  search?: string;
  filters?: string;
}

export interface CreateReportApiV2Reports_postParams {
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
}

export interface GetUpcomingReportRunsApiV2ReportsSchedulerNextRunsGetParams {
  hours?: number;
}

export interface GetScheduledReportsApiV2ReportsScheduledGetParams {
  next_hours?: number;
}

export interface GetReportApiV2Reports_reportId_getParams {
  report_id: string;
}

export interface UpdateReportApiV2Reports_reportId_putParams {
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
}

export interface DeleteReportApiV2Reports_reportId_deleteParams {
  report_id: string;
}

export interface ExecuteReportApiV2Reports_reportId_executePostParams {
  report_id: string;
  test_mode?: boolean;
  test_email?: string;
  shared_link_expires_days?: number;
}

export interface PreviewReportApiV2Reports_reportId_previewPostParams {
  report_id: string;
  limit?: number;
  include_charts?: boolean;
}

export interface ListReportExecutionsApiV2Reports_reportId_executionsGetParams {
  report_id: string;
  limit?: number;
  offset?: number;
  status?: string;
}

export interface GetReportStatisticsApiV2Reports_reportId_statisticsGetParams {
  report_id: string;
}

export interface ForceExecuteReportApiV2Reports_reportId_executeForcePostParams {
  report_id: string;
  reason?: string;
}

export interface ExportReportApiV2Reports_reportId_exportPostParams {
  report_id: string;
  format?: string;
  include_charts?: boolean;
  date_range_override?: string;
}

export interface DuplicateReportApiV2Reports_reportId_duplicatePostParams {
  report_id: string;
  new_name: string;
}

export interface ToggleReportActiveStatusApiV2Reports_reportId_toggleActivePatchParams {
  report_id: string;
}

export interface TestSendReportApiV2ReportsTestSendPostParams {
  report_id: string;
  test_email: string;
  shared_link_expires_days?: number;
}

export interface GetSharedSnapshotInfoApiV2ReportsShared_shareLinkHash_getParams {
  share_link_hash: string;
}

export interface GetSharedSnapshotDataApiV2ReportsShared_shareLinkHash_dataGetParams {
  share_link_hash: string;
  format?: string;
}

export interface GetSharedSnapshotResponsesApiV2ReportsShared_shareLinkHash_responsesGetParams {
  share_link_hash: string;
  page?: number;
  page_size?: number;
}

export interface HandleCallbackApiV2IntegrationsGomingaCallbackGetParams {
  code: string;
  state: string;
}

export interface GetReviewsApiV2IntegrationsGomingaReviewsGetParams {
  review_type?: string;
  platform?: string;
  rating?: string;
  limit?: number;
  offset?: number;
  include_count?: boolean;
}

export interface ReplyToReviewApiV2IntegrationsGomingaReviews_reviewId_replyPostParams {
  review_id: string;
  reply_text: string;
}

export interface GetMockReviewsApiV2IntegrationsGomingaReviewsMockGetParams {
  review_type?: string;
  platform?: string;
  rating?: string;
  limit?: number;
  offset?: number;
}

export interface GetSurveysWithScoresApiV2SurveysWithScoresGetParams {
  score_type?: string;
  min_responses?: number;
  days_back?: string;
  company_id?: string;
}

export interface GetSurveyScoreDetailsApiV2Surveys_surveyId_scoreDetailsGetParams {
  survey_id: string;
  question_name?: string;
}

export interface GetWidgetScoreApiV2WidgetSurveys_surveyId_scoreGetParams {
  survey_id: string;
  question_name: string;
}

export interface GetSentimentAnalyticsApiV2Surveys_surveyId_sentimentAnalyticsGetParams {
  survey_id: string;
  start_date?: string;
  end_date?: string;
  date_range?: string;
  grouping?: string;
  topic_ids?: string;
}

export interface GetUsedTopicsApiV2Surveys_surveyId_topicsUsedGetParams {
  survey_id: string;
  date_range?: string;
  start_date?: string;
  end_date?: string;
}

export interface ListJourneysApiV2JourneysGetParams {
  status?: string;
  journey_type?: string;
  search?: string;
  page?: number;
  page_size?: number;
}

export interface CreateJourneyApiV2JourneysPostParams {
  name: string;
  description?: string;
  journey_type?: string;
  stages?: unknown[];
}

export interface ListTemplatesApiV2JourneysTemplatesGetParams {
  industry?: string;
}

export interface GetTemplateApiV2JourneysTemplates_templateId_getParams {
  template_id: string;
}

export interface CreateFromTemplateApiV2JourneysTemplates_templateId_createPostParams {
  template_id: string;
}

export interface GetJourneyApiV2Journeys_journeyId_getParams {
  journey_id: string;
}

export interface UpdateJourneyApiV2Journeys_journeyId_patchParams {
  journey_id: string;
  name?: string;
  description?: string;
  journey_type?: string;
  status?: string;
}

export interface DeleteJourneyApiV2Journeys_journeyId_deleteParams {
  journey_id: string;
}

export interface GenerateJourneyAiApiV2JourneysGeneratePostParams {
  domain?: string;
  industry?: string;
  company_description?: string;
  template_id?: string;
}

export interface SaveGeneratedJourneysApiV2JourneysGenerateSavePostParams {
  source_domain?: string;
  detected_industry?: string;
}

export interface SuggestTouchpointConfigApiV2JourneysTouchpointsSuggestPostParams {
  touchpoint_name: string;
  touchpoint_description?: string;
  stage_name?: string;
  journey_name?: string;
}

export interface AnalyzeCsvJourneysApiV2JourneysAnalyzeCsvPostParams {
  headers: unknown[];
  rows: unknown[];
}

export interface CreateStageApiV2Journeys_journeyId_stagesPostParams {
  journey_id: string;
  name: string;
  description?: string;
  sequence?: number;
  touchpoints?: unknown[];
}

export interface UpdateStageApiV2JourneysStages_stageId_patchParams {
  stage_id: string;
  name?: string;
  description?: string;
  sequence?: string;
}

export interface DeleteStageApiV2JourneysStages_stageId_deleteParams {
  stage_id: string;
}

export interface ReorderStagesApiV2Journeys_journeyId_stagesReorderPutParams {
  journey_id: string;
  stage_ids: unknown[];
}

export interface CreateTouchpointApiV2JourneysStages_stageId_touchpointsPostParams {
  stage_id: string;
  name: string;
  description?: string;
  channel?: string;
  metric_type?: string;
  timing?: string;
  sequence?: number;
}

export interface UpdateTouchpointApiV2JourneysTouchpoints_touchpointId_patchParams {
  touchpoint_id: string;
  name?: string;
  description?: string;
  channel?: string;
  metric_type?: string;
  timing?: string;
  sequence?: string;
}

export interface DeleteTouchpointApiV2JourneysTouchpoints_touchpointId_deleteParams {
  touchpoint_id: string;
}

export interface ReorderTouchpointsApiV2JourneysStages_stageId_touchpointsReorderPutParams {
  stage_id: string;
  touchpoint_ids: unknown[];
}

export interface GetTouchpointSurveysApiV2JourneysTouchpoints_touchpointId_surveysGetParams {
  touchpoint_id: string;
}

export interface LinkSurveyApiV2JourneysTouchpoints_touchpointId_surveysPostParams {
  touchpoint_id: string;
  survey_id: number;
  is_primary?: boolean;
}

export interface UnlinkSurveyApiV2JourneysTouchpoints_touchpointId_surveys_surveyId_deleteParams {
  touchpoint_id: string;
  survey_id: number;
}

export interface GetOrganizationSettingsApiV2PhoneNumbersOrganizationSettingsGetParams {
  org_id: number;
}

export interface SuggestAreaCodesApiV2PhoneNumbersSuggestAreaCodesGetParams {
  org_id: number;
}

export interface SearchRegionNumbersApiV2PhoneNumbersSearchRegionGetParams {
  org_id: number;
  country_code?: string;
  include_national?: boolean;
}

export interface SearchAvailableNumbersApiV2PhoneNumbersSearchGetParams {
  country_code?: string;
  area_code?: string;
  type?: string;
  limit?: number;
}

export interface PurchaseNumberApiV2PhoneNumbersPurchasePostParams {
  phone_number: string;
  org_id: number;
  friendly_name?: string;
  locality?: string;
}

export interface ListPhoneNumbersApiV2PhoneNumbersGetParams {
  org_id: number;
  status_filter?: string;
}

export interface AssignNumberToSurveyApiV2PhoneNumbers_numberId_assignPostParams {
  number_id: number;
  survey_id: number;
}

export interface UnassignNumberFromSurveyApiV2PhoneNumbers_numberId_unassignPostParams {
  number_id: number;
  survey_id: number;
}

export interface ReleaseNumberApiV2PhoneNumbers_numberId_releasePostParams {
  number_id: number;
}

export interface GetNumberDetailsApiV2PhoneNumbers_numberId_getParams {
  number_id: number;
}

export interface GetSurveyConfigApiV2PhoneConfigsSurveys_surveyId_configGetParams {
  survey_id: number;
}

export interface UpdateSurveyConfigApiV2PhoneConfigsSurveys_surveyId_configPutParams {
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
}

export interface ListPresetsApiV2PhoneConfigsPresetsGetParams {
  org_id?: string;
}

export interface CreatePresetApiV2PhoneConfigsPresetsPostParams {
  name: string;
  voice?: string;
  language?: string;
  interruption_threshold?: number;
  temperature?: number;
  max_duration?: number;
  background_track?: string;
  noise_cancellation?: boolean;
  record?: boolean;
}

export interface DeletePresetApiV2PhoneConfigsPresets_presetId_deleteParams {
  preset_id: number;
}

export interface ListAvailableVoicesApiV2PhoneConfigsVoicesGetParams {
  language?: string;
}

export interface PreviewTestScriptApiV2Surveys_surveyId_testCallsPreviewScriptPostParams {
  survey_id: number;
  config_id?: string;
  save_as_custom?: boolean;
}

export interface CreatePhoneTestCallApiV2Surveys_surveyId_testCallsPhonePostParams {
  survey_id: number;
  phone_number: string;
  config_id?: string;
}

export interface ListTestCallsApiV2Surveys_surveyId_testCallsGetParams {
  survey_id: number;
  status_filter?: string;
  limit?: number;
}

export interface CreateTestCallApiV2Surveys_surveyId_testCallsPostParams {
  survey_id: number;
  config_id?: string;
}

export interface GetTestCallApiV2Surveys_surveyId_testCalls_testId_getParams {
  survey_id: number;
  test_id: string;
}

export interface DeleteTestCallApiV2Surveys_surveyId_testCalls_testId_deleteParams {
  survey_id: number;
  test_id: string;
}

export interface ApproveTestCallApiV2Surveys_surveyId_testCalls_testId_approvePostParams {
  survey_id: number;
  test_id: string;
  approved: boolean;
}

export interface SyncTestCallResultsApiV2Surveys_surveyId_testCalls_testId_syncPostParams {
  survey_id: number;
  test_id: string;
}

export interface CompleteTestCallApiV2Surveys_surveyId_testCalls_testId_completePostParams {
  survey_id: number;
  test_id: string;
}

export interface BlandWebhookHandlerApiV2Surveys_surveyId_testCallsWebhookPostParams {
  survey_id: number;
}

export interface UploadCsvApiV2Surveys_surveyId_phoneCampaignsUploadPostParams {
  survey_id: number;
}

export interface ValidateCsvApiV2Surveys_surveyId_phoneCampaignsValidatePostParams {
  survey_id: number;
  upload_id: string;
  column_mapping: Record<string, unknown>;
}

export interface ListCampaignsApiV2Surveys_surveyId_phoneCampaignsGetParams {
  survey_id: number;
  status_filter?: string;
}

export interface CreateCampaignApiV2Surveys_surveyId_phoneCampaignsPostParams {
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
}

export interface GetCampaignApiV2Surveys_surveyId_phoneCampaigns_campaignId_getParams {
  survey_id: number;
  campaign_id: number;
}

export interface DeleteCampaignApiV2Surveys_surveyId_phoneCampaigns_campaignId_deleteParams {
  survey_id: number;
  campaign_id: number;
}

export interface StartCampaignApiV2Surveys_surveyId_phoneCampaigns_campaignId_startPostParams {
  survey_id: number;
  campaign_id: number;
}

export interface PauseCampaignApiV2Surveys_surveyId_phoneCampaigns_campaignId_pausePutParams {
  survey_id: number;
  campaign_id: number;
}

export interface ResumeCampaignApiV2Surveys_surveyId_phoneCampaigns_campaignId_resumePutParams {
  survey_id: number;
  campaign_id: number;
}

export interface RetryFailedContactsApiV2Surveys_surveyId_phoneCampaigns_campaignId_contactsRetryPostParams {
  survey_id: number;
  campaign_id: number;
}

export interface GetCampaignContactsApiV2Surveys_surveyId_phoneCampaigns_campaignId_contactsGetParams {
  survey_id: number;
  campaign_id: number;
  status_filter?: string;
  limit?: number;
  offset?: number;
}

export interface HandleCampaignWebhookApiV2Surveys_surveyId_phoneCampaigns_campaignId_webhookPostParams {
  survey_id: number;
  campaign_id: number;
}

export interface GetProductsApiV2ProductsGetParams {
  page?: number;
  page_size?: number;
  category_id?: string;
  search?: string;
}

export interface CreateProductApiV2ProductsPostParams {
  external_id: string;
  name: string;
  category_id?: string;
  image_url?: string;
  product_url?: string;
  attributes?: Record<string, unknown>;
  org_id: number;
}

export interface GetProductApiV2Products_productId_getParams {
  product_id: string;
}

export interface UpdateProductApiV2Products_productId_putParams {
  product_id: string;
  name?: string;
  category_id?: string;
  image_url?: string;
  product_url?: string;
  attributes?: string;
}

export interface DeleteProductApiV2Products_productId_deleteParams {
  product_id: string;
}

export interface GetProductsByExternalIdsPublicApiV2ByExternalIdsPublicGetParams {
  external_ids: string;
  org_id: number;
}

export interface GetProductReviewSummaryApiV2Products_productId_reviewsSummaryGetParams {
  product_id: string;
}

export interface GetProductReviewsApiV2Products_productId_reviewsGetParams {
  product_id: string;
  page?: number;
  page_size?: number;
  rating?: string;
  start_date?: string;
  end_date?: string;
  verified_only?: boolean;
}

export interface GetOrderDetailApiV2Orders_orderId_detailGetParams {
  order_id: string;
}

export interface GetReviewsApiV2ReviewsGetParams {
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
}

export interface ExportGoogleProductReviewsFeedApiV2ReviewsExportGoogleFeedGetParams {
  publisher_name?: string;
  publisher_favicon?: string;
  product_id?: string;
  category_id?: string;
  limit?: string;
}

export interface ExportReviewsApiV2ReviewsExportGetParams {
  org_id: number;
  format?: string;
  product_id?: string;
  min_rating?: string;
  verified_only?: boolean;
  start_date?: string;
  end_date?: string;
}

export interface UpdateReviewStatusApiV2Reviews_reviewId_statusPatchParams {
  review_id: string;
  status: string;
}

export interface AddReviewResponseApiV2Reviews_reviewId_responsePostParams {
  review_id: string;
  response_text: string;
}

export interface DeleteReviewResponseApiV2Reviews_reviewId_responseDeleteParams {
  review_id: string;
}

export interface GetProductReviewSummaryApiV2ReviewsProduct_productId_summaryGetParams {
  product_id: string;
}

export interface CreateCategoryApiV2CategoriesPostParams {
  name: string;
  parent_id?: string;
}

export interface GetCategoryApiV2Categories_categoryId_getParams {
  category_id: number;
}

export interface UpdateCategoryApiV2Categories_categoryId_putParams {
  category_id: number;
  name?: string;
  parent_id?: string;
}

export interface DeleteCategoryApiV2Categories_categoryId_deleteParams {
  category_id: number;
}

export interface GetOrdersApiV2OrdersGetParams {
  page?: number;
  page_size?: number;
  customer_email?: string;
  survey_sent?: string;
}

export interface CreateOrderApiV2OrdersPostParams {
  order_number: string;
  customer_email: string;
  order_date: string;
  products?: unknown[];
  org_id: number;
}

export interface GetOrderApiV2Orders_orderId_getParams {
  order_id: string;
}

export interface UpdateOrderApiV2Orders_orderId_putParams {
  order_id: string;
  survey_sent?: string;
  survey_id?: string;
}

export interface DeleteOrderApiV2Orders_orderId_deleteParams {
  order_id: string;
}

export interface GetOrderSurveyLinkApiV2Orders_orderId_surveyLinkGetParams {
  order_id: string;
}

export interface SendReviewRequestApiV2Orders_orderId_sendReviewRequestPostParams {
  order_id: string;
  delay_hours?: number;
}

export interface SendBulkReviewRequestsApiV2OrdersSendBulkReviewRequestsPostParams {
  delay_hours?: number;
}

export interface AiPoweredReviewSearchApiV2ReviewsAiSearchGetParams {
  query: string;
  page?: number;
}

export interface GetReviewerProfileApiV2Reviewers_reviewerEmail_profileGetParams {
  reviewer_email: string;
}

export interface GetReviewerReviewsApiV2Reviewers_reviewerEmail_reviewsGetParams {
  reviewer_email: string;
  page?: number;
  page_size?: number;
}

export interface GetSimilarReviewersApiV2Reviewers_reviewerEmail_similarGetParams {
  reviewer_email: string;
  limit?: number;
  min_similarity?: number;
}

export interface GetPowerReviewersApiV2ReviewersPowerReviewersGetParams {
  min_reviews?: number;
  sort_by?: string;
  page?: number;
  page_size?: number;
}

export interface GenerateEmbeddingsBulkApiV2ReviewersGenerateEmbeddingsPostParams {
  limit?: string;
  force_refresh?: boolean;
  run_async?: boolean;
}

export interface GetOrderAnalyticsApiV2OrdersAnalyticsGetParams {
  org_id: number;
  date_range?: number;
  product_id?: string;
}

export interface GetSingleOrderAnalyticsApiV2Orders_orderId_analyticsGetParams {
  order_id: string;
}

export interface UpdateProductConfigApiV2OrganizationProductConfigPatchParams {
  industry?: string;
  review_aggregation?: string;
  max_category_depth?: string;
  use_collections?: string;
  use_product_lines?: string;
  use_variants?: string;
  variant_attributes?: string;
  allow_discontinued_in_orders?: string;
  warn_on_discontinued?: string;
}

export interface ApplyConfigPresetApiV2OrganizationProductConfigPreset_presetName_postParams {
  preset_name: string;
}

export interface ResolveSurveysByProductsApiV2SurveysResolveByProductsGetParams {
  org_id: number;
  products: string;
  order_id?: string;
}

export interface ResolveSurveysApiV2SurveysResolvePostParams {
  org_id: number;
  product_ids: unknown[];
  order_id?: string;
}

export interface GetAssignmentsApiV2SurveyAssignmentsGetParams {
  org_id?: string;
  survey_id?: string;
  product_id?: string;
  category_id?: string;
  limit?: number;
  offset?: number;
}

export interface CreateAssignmentApiV2SurveyAssignmentsPostParams {
  survey_id: number;
  product_id?: string;
  category_id?: string;
  org_id: number;
  priority?: number;
  assignment_type?: string;
}

export interface UpdateAssignmentApiV2SurveyAssignments_assignmentId_putParams {
  assignment_id: number;
  org_id?: string;
  priority?: string;
  assignment_type?: string;
}

export interface DeleteAssignmentApiV2SurveyAssignments_assignmentId_deleteParams {
  assignment_id: number;
  org_id?: string;
}

export interface BulkCreateAssignmentsApiV2SurveyAssignmentsBulkPostParams {
  org_id?: string;
  assignments: unknown[];
  replace_existing?: boolean;
}

export interface GetAssignmentsByProductsApiV2SurveyAssignmentsByProductsPostParams {
  org_id?: string;
}

export interface DeleteAssignmentsBySurveyApiV2SurveyAssignmentsBySurvey_surveyId_deleteParams {
  survey_id: number;
  org_id?: string;
}

export interface GetAssignmentStatisticsApiV2SurveyAssignmentsStatsGetParams {
  org_id?: string;
}

export interface GetActiveConfigurationApiV2SurveyChainConfigActiveGetParams {
  org_id?: string;
}

export interface GetAllConfigurationsApiV2SurveyChainConfigGetParams {
  org_id?: string;
  include_inactive?: boolean;
}

export interface CreateConfigurationApiV2SurveyChainConfigPostParams {
  org_id: number;
  name: string;
  optimization_strategy?: string;
  max_surveys_per_chain?: number;
  fallback_survey_id?: string;
  is_active?: boolean;
}

export interface UpdateConfigurationApiV2SurveyChainConfig_configId_putParams {
  config_id: number;
  org_id?: string;
  name?: string;
  optimization_strategy?: string;
  max_surveys_per_chain?: string;
  fallback_survey_id?: string;
  is_active?: string;
}

export interface DeleteConfigurationApiV2SurveyChainConfig_configId_deleteParams {
  config_id: number;
  org_id?: string;
}

export interface GetRecommendationsApiV2SurveyChainConfigRecommendationsPostParams {
  org_id?: string;
}

export interface TestOptimizationApiV2SurveyChainConfigTestOptimizationPostParams {
  org_id?: string;
  sample_products: unknown[];
  strategy?: string;
  max_surveys?: string;
}

export interface ResolveSurveysByProductsPublicApiV2PublicSurveysResolveByProductsGetParams {
  org_id: number;
  products: string;
  order_id?: string;
}

export interface ResolveSurveysPublicApiV2PublicSurveysResolvePostParams {
  org_id: number;
  product_ids: unknown[];
  order_id?: string;
}

export interface GetPendingScheduledEmailsApiV2WebhooksScheduledEmailsPendingGetParams {
  limit?: number;
}

export interface ProcessScheduledEmailApiV2WebhooksScheduledEmails_emailId_processPostParams {
  email_id: string;
}

export interface ListSegmentsApiV2ContactsSegments_getParams {
  org_id: number;
  segment_type?: string;
}

export interface CreateSegmentApiV2ContactsSegments_postParams {
  org_id: number;
  user_id?: string;
  name: string;
  description?: string;
  color?: string;
  segment_type: string;
  filter_criteria?: string;
}

export interface GetSegmentApiV2ContactsSegments_segmentId_getParams {
  segment_id: string;
  org_id: number;
}

export interface UpdateSegmentApiV2ContactsSegments_segmentId_patchParams {
  segment_id: string;
  org_id: number;
  name?: string;
  description?: string;
  color?: string;
  filter_criteria?: string;
}

export interface DeleteSegmentApiV2ContactsSegments_segmentId_deleteParams {
  segment_id: string;
  org_id: number;
}

export interface GetSegmentContactsApiV2ContactsSegments_segmentId_contactsGetParams {
  segment_id: string;
  org_id: number;
  page?: number;
  per_page?: number;
}

export interface RefreshSegmentApiV2ContactsSegments_segmentId_refreshPostParams {
  segment_id: string;
  org_id: number;
}

export interface AddMembersApiV2ContactsSegments_segmentId_membersPostParams {
  segment_id: string;
  org_id: number;
  user_id?: string;
  contact_ids: unknown[];
}

export interface RemoveMembersApiV2ContactsSegments_segmentId_membersDeleteParams {
  segment_id: string;
  org_id: number;
  contact_ids: unknown[];
}

export interface QuickSearchApiV2ContactsSearch_getParams {
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
}

export interface SemanticSearchApiV2ContactsSearchSemanticPostParams {
  org_id: number;
  query: string;
  limit?: number;
  min_similarity?: number;
  content_types?: string;
  sentiment_filter?: string;
  pre_filters?: string;
}

export interface GetSuggestionsApiV2ContactsSearchSuggestGetParams {
  org_id: number;
  q: string;
  limit?: number;
}

export interface SearchByAttributesApiV2ContactsSearchAttributesPostParams {
  org_id: number;
  page?: number;
  per_page?: number;
}

export interface ListInteractionsApiV2Contacts_contactId_interactions_getParams {
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
}

export interface LogInteractionApiV2Contacts_contactId_interactions_postParams {
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
}

export interface GetInteractionStatsApiV2Contacts_contactId_interactionsStatsGetParams {
  contact_id: string;
  org_id: number;
}

export interface ListRepliesApiV2Contacts_contactId_interactions_interactionId_repliesGetParams {
  contact_id: string;
  interaction_id: string;
  org_id: number;
  page?: number;
  per_page?: number;
}

export interface CreateReplyApiV2Contacts_contactId_interactions_interactionId_repliesPostParams {
  contact_id: string;
  interaction_id: string;
  org_id: number;
  note: string;
  is_public_reply?: boolean;
}

export interface UpdateReplyApiV2Replies_replyId_putParams {
  reply_id: number;
  note: string;
}

export interface DeleteReplyApiV2Replies_replyId_deleteParams {
  reply_id: number;
}

export interface GetContactContentApiV2Contacts_contactId_content_getParams {
  contact_id: string;
  org_id: number;
  interaction_id?: string;
  source_id?: string;
  content_type?: string;
}

export interface ListContactContentApiV2Contacts_contactId_contentAllGetParams {
  contact_id: string;
  org_id: number;
  content_type?: string;
  limit?: number;
}

export interface ListDefinitionsApiV2ContactsAttributesDefinitionsGetParams {
  org_id: number;
  searchable_only?: boolean;
  filterable_only?: boolean;
}

export interface CreateDefinitionApiV2ContactsAttributesDefinitionsPostParams {
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
}

export interface GetGroupedDefinitionsApiV2ContactsAttributesDefinitionsGroupedGetParams {
  org_id: number;
}

export interface GetDefinitionApiV2ContactsAttributesDefinitions_definitionId_getParams {
  definition_id: string;
  org_id: number;
}

export interface UpdateDefinitionApiV2ContactsAttributesDefinitions_definitionId_patchParams {
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
}

export interface DeleteDefinitionApiV2ContactsAttributesDefinitions_definitionId_deleteParams {
  definition_id: string;
  org_id: number;
}

export interface GetRulesApiV2ContactsThrottleRulesGetParams {
  org_id: number;
}

export interface UpdateRulesApiV2ContactsThrottleRulesPutParams {
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
}

export interface GetThrottleStatsApiV2ContactsThrottleStatsGetParams {
  org_id: number;
  days?: number;
}

export interface GetThrottleLogApiV2ContactsThrottleLogGetParams {
  org_id: number;
  page?: number;
  per_page?: number;
  contact_id?: string;
  action?: string;
}

export interface GetContactByExternalIdApiV2ContactsByExternalId_externalId_getParams {
  external_id: string;
  org_id: number;
}

export interface ListContactsApiV2Contacts_getParams {
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
}

export interface CreateContactApiV2Contacts_postParams {
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
}

export interface GetContactStatsApiV2Contacts_contactId_statsGetParams {
  contact_id: string;
  org_id: number;
}

export interface GetContactApiV2Contacts_contactId_getParams {
  contact_id: string;
  org_id: number;
}

export interface UpdateContactApiV2Contacts_contactId_patchParams {
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
}

export interface DeleteContactApiV2Contacts_contactId_deleteParams {
  contact_id: string;
  org_id: number;
}

export interface BulkUpdateTagsApiV2ContactsBulkTagsPostParams {
  org_id: number;
  contact_ids: unknown[];
  add_tags?: unknown[];
  remove_tags?: unknown[];
}

export interface BulkUpdateAttributesApiV2ContactsBulkAttributesPostParams {
  org_id: number;
  contact_ids: unknown[];
  set_attributes?: Record<string, unknown>;
  unset_attributes?: unknown[];
}

export interface CheckThrottleApiV2Contacts_contactId_canContactPostParams {
  contact_id: string;
  org_id: number;
  channel: string;
  source_system: string;
  source_id?: string;
  is_transactional?: boolean;
}

export interface GetContactSourceLinksApiV2Contacts_contactId_sourceLinksGetParams {
  contact_id: string;
  org_id: number;
}

export interface ListImportJobsApiV2ContactsImportGetParams {
  limit?: number;
  offset?: number;
}

export interface GetImportJobApiV2ContactsImport_jobId_getParams {
  job_id: string;
}

export interface ListExportJobsApiV2ContactsExportGetParams {
  limit?: number;
  offset?: number;
}

export interface CreateExportJobApiV2ContactsExportPostParams {
  filter_criteria?: string;
  segment_id?: string;
  fields?: unknown[];
  include_interactions?: boolean;
  custom_attribute_keys?: unknown[];
}

export interface QuickExportApiV2ContactsExportQuickGetParams {
  segment_id?: string;
  status_filter?: string;
  tags?: string;
}

export interface GetExportJobApiV2ContactsExport_jobId_getParams {
  job_id: string;
}

export interface DownloadExportApiV2ContactsExport_jobId_downloadGetParams {
  job_id: string;
}

export interface SaveLegacyCredentialsApiV2MigrationCredentialsPostParams {
  org_id: number;
  user_id?: string;
  api_key: string;
  backend_url?: string;
}

export interface DeleteLegacyCredentialsApiV2MigrationCredentialsDeleteParams {
  org_id: number;
}

export interface ValidateLegacyCredentialsApiV2MigrationCredentialsValidatePostParams {
  org_id: number;
}

export interface GetCredentialsStatusApiV2MigrationCredentialsStatusGetParams {
  org_id: number;
}

export interface ListLegacySurveysApiV2MigrationSurveysGetParams {
  org_id: number;
  page?: number;
  per_page?: number;
  authorization?: string;
}

export interface GetMigrationStatusApiV2MigrationSurveys_legacySurveyId_statusGetParams {
  legacy_survey_id: number;
  org_id: number;
}

export interface PreviewSurveyMigrationApiV2MigrationSurveys_legacySurveyId_previewGetParams {
  legacy_survey_id: number;
  org_id: number;
  authorization?: string;
}

export interface ImportSurveyApiV2MigrationSurveysImportPostParams {
  authorization?: string;
  legacy_survey_id: number;
  org_id: number;
  creator_id?: string;
  import_responses?: boolean;
}

export interface ImportSurveyResponsesApiV2MigrationResponsesImportPostParams {
  authorization?: string;
  survey_id: string;
  legacy_survey_id: number;
  org_id: number;
  start_date?: string;
  end_date?: string;
  batch_size?: number;
}

export interface ImportResponsesForSurveyApiV2MigrationSurveys_surveyId_importResponsesPostParams {
  survey_id: string;
  legacy_survey_id: number;
  org_id: number;
  authorization?: string;
}

export interface GetMigrationProgressApiV2MigrationStatus_migrationId_getParams {
  migration_id: string;
}

export interface ExecuteFunctionApiV2ZagentsVoiceFunctionsExecutePostParams {
  name: string;
  arguments: Record<string, unknown>;
  call_id: string;
  org_id: number;
  user_id?: number;
}

export interface GetWidgetResponsesApiV2WidgetSurveys_surveyId_responsesGetParams {
  survey_id: string;
  question_ids?: string;
  page?: number;
  page_size?: number;
}

export interface GetWidgetVisualResponsesApiV2WidgetSurveys_surveyId_visualResponsesGetParams {
  survey_id: string;
  query?: string;
  page?: number;
  page_size?: number;
  use_videos?: boolean;
}

export interface GetWidgetGomingaReviewsApiV2WidgetGomingaReviews_organizationId_getParams {
  organization_id: number;
  review_type?: string;
  platform?: string;
  min_rating?: string;
  page?: number;
  page_size?: number;
}

export interface CreateWidgetEmbedApiV2WidgetEmbeds_postParams {
  name: string;
  survey_id: number;
  question_name: string;
  allowed_domains: unknown[];
  theme?: string;
  width?: string;
  strict_domain_check?: boolean;
  time_range?: string;
}

export interface GetWidgetEmbedApiV2WidgetEmbeds_embedId_getParams {
  embed_id: string;
}

export interface UpdateWidgetEmbedApiV2WidgetEmbeds_embedId_putParams {
  embed_id: string;
  name?: string;
  survey_id?: string;
  question_name?: string;
  allowed_domains?: string;
  theme?: string;
  width?: string;
  strict_domain_check?: string;
  time_range?: string;
}

export interface DeleteWidgetEmbedApiV2WidgetEmbeds_embedId_deleteParams {
  embed_id: string;
}

export interface GetWidgetEmbedBySurveyQuestionApiV2WidgetEmbedsSurvey_surveyId_question_questionName_getParams {
  survey_id: number;
  question_name: string;
}

export interface UpdateAllowedDomainsApiV2WidgetEmbeds_embedId_domainsPatchParams {
  embed_id: string;
  allowed_domains: unknown[];
}

export interface ToggleWidgetEmbedApiV2WidgetEmbeds_embedId_togglePatchParams {
  embed_id: string;
}
