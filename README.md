JB PRODUCTION FRONTEND V1
=========================

WHAT CHANGED
- No visual redesign.
- Project catalogue now reads ONLY public.jb_public_projects_v1.
- Manual-review / QA-review projects are automatically excluded by backend.
- Project details use RPC jb_get_project_details_v1.
- Developer details use RPC jb_get_developer_details_v1.
- Compare refreshes via RPC jb_compare_projects_v1.
- Property Finder uses RPC jb_search_projects_v1.
- Filter metadata is loaded via RPC jb_get_filter_options_v1.
- Existing lead_capture_submissions flow is preserved unchanged.

UPLOAD
1. Keep your existing assets/ and style.css.
2. Replace the deployed index.html with this index.html.
3. Replace the deployed script.js with this script.js.
4. Do not change Supabase SQL during this step.
5. Deploy to Cloudflare Pages.
6. Hard refresh the website (Ctrl+F5).

SMOKE TEST
- Project count should reflect only production-safe projects.
- Open a project profile.
- Open a developer profile.
- Add 2 projects to Compare.
- Use Property Finder for New Cairo + Villa.
- Test Arabic / English.
- Submit a lead only after the read-layer tests pass.

ROLLBACK
If needed, restore the previous index.html + script.js only.
Database is not modified by these frontend files.
