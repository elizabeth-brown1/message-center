
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            50: '#f0f7ff',
                            100: '#e0effe',
                            600: '#2563eb',
                            700: '#1d4ed8',
                            800: '#1e40af',
                            900: '#1e3a8a', // Dark blue
                            950: '#0f172a', // Navy slate
                        },
                        highlight: {
                            lime: '#22c55e', // Green accent highlight
                            limeLight: '#dcfce7',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            background-color: #f6f8fa;
        }

        .dashboard-card {
            background: #ffffff;
            border: 1px solid #eef1f5;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
            border-radius: 24px;
        }

        .interactive-row:hover {
            background-color: #f8fafc;
        }

        .accent-bar-green {
            background-color: #22c55e;
        }
    </style>
</head>

<body class="text-slate-800 font-sans antialiased min-h-screen selection:bg-primary-100 selection:text-primary-900">

    <div class="flex min-h-screen">
        <!-- Sidebar Navigation (Matching inspiration layout) -->
        <aside class="w-20 bg-white border-r border-slate-200 flex flex-col items-center py-6 gap-8 shrink-0">
            <!-- Brand Icon -->
            <div
                class="w-10 h-10 bg-primary-900 rounded-xl flex items-center justify-center text-white font-extrabold text-lg">
                AZ
            </div>
            <!-- Navigation Icons -->
            <nav class="flex flex-col gap-5 items-center flex-1">
                <button onclick="switchTab('dashboard')"
                    class="p-3 text-primary-900 bg-slate-100 rounded-2xl hover:bg-slate-50 transition-colors"
                    title="Dashboard">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z">
                        </path>
                    </svg>
                </button>
                <button onclick="switchTab('tables')"
                    class="p-3 text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-2xl transition-colors"
                    title="Data Tables Explorer">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z">
                        </path>
                    </svg>
                </button>
            </nav>
            <!-- Info Icon -->
            <div class="p-3 text-slate-300">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
        </aside>

        <!-- Main Workspace -->
        <div class="flex-1 flex flex-col min-w-0">
            <!-- Top Controls Header -->
            <header
                class="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between gap-4 shrink-0">
                <div class="flex items-center gap-6">
                    <h1 class="text-l font-bold text-primary-900 tracking-tight">PowerSchool Logged Communications
                        <br>AZVA
                        and ISAZ (SY25-26)
                    </h1>
                    <!-- Top Pill Selection (Dashboard vs Tables) -->
                    <div class="bg-slate-100 p-1 rounded-full flex gap-1">
                        <button id="pill-dashboard" onclick="switchTab('dashboard')"
                            class="px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-900 text-white shadow-sm transition-all">
                            Overview Dashboard
                        </button>
                        <button id="pill-tables" onclick="switchTab('tables')"
                            class="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all">
                            Interactive Tables
                        </button>
                    </div>
                </div>
                <!-- Date Pill & Filters -->

            </header>

            <!-- Dashboard Content Pane -->
            <div id="tab-dashboard" class="flex-1 overflow-y-auto p-8">
                <!-- Two-Column Explorer Layout -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    <!-- Left Column: Consolidated Log Statistics Explorer Box -->
                    <div class="dashboard-card p-8 lg:col-span-7 flex flex-col gap-6">
                        <!-- Part 1: PowerSchool Logged messages Metric Header -->
                        <div>

                            <div class="flex items-top gap-9">
                                <h2 class="text-6xl font-extrabold text-primary-900">100,019 Messages</h2>


                            </div>
                        </div>

                        <!-- Part 2: Log Type Breakdown (Communication Channel Mix) -->
                        <div class="border-t border-slate-100 pt-5">
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Breakdowns</h4>
                            <div class="overflow-x-auto max-w-xl">
                                <table class="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr class="border-b border-slate-100 text-slate-400">
                                            <th class="pb-2 font-semibold">Log Type</th>
                                            <th class="pb-2 font-semibold text-right">Volume</th>
                                            <th class="pb-2 font-semibold text-right">% of Logs</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-50 text-slate-700">
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Parent Contact</td>
                                            <td class="py-2.5 text-right text-slate-600">46,476</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">46.5%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Stride Email</td>
                                            <td class="py-2.5 text-right text-slate-600">25,378</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">25.4%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Student Contact</td>
                                            <td class="py-2.5 text-right text-slate-600">14,037</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">14.0%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Office</td>
                                            <td class="py-2.5 text-right text-slate-600">6,284</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">6.3%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Special Programs</td>
                                            <td class="py-2.5 text-right text-slate-600">5,973</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">6.0%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium text-slate-400">Other Combined</td>
                                            <td class="py-2.5 text-right text-slate-400">1,871</td>
                                            <td class="py-2.5 text-right font-semibold text-slate-400">1.8%</td>
                                        </tr>
                                        <tr class="font-bold border-t-2 border-slate-200 bg-slate-50/50">
                                            <td class="py-2.5 font-bold text-slate-900">Total</td>
                                            <td class="py-2.5 text-right text-slate-900">100,019</td>
                                            <td class="py-2.5 text-right font-bold text-primary-900">100.0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Part 3: Breakdown by Day (Monday to Sunday) -->
                        <div class="border-t border-sky-500 pt-5">

                            <div class="overflow-x-auto max-w-xl">
                                <table class="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr class="border-b border-slate-100 text-slate-400">
                                            <th class="pb-2 font-semibold">Weekday</th>
                                            <th class="pb-2 font-semibold text-right">Volume</th>
                                            <th class="pb-2 font-semibold text-right">% of Logs</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-50 text-slate-700">
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Monday</td>
                                            <td class="py-2.5 text-right text-slate-600">20,156</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">20.2%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Tuesday</td>
                                            <td class="py-2.5 text-right text-slate-600">20,783</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">20.8%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Wednesday</td>
                                            <td class="py-2.5 text-right text-slate-600">17,470</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">17.5%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium text-slate-600 font-medium">Thursday
                                            </td>
                                            <td class="py-2.5 text-right text-slate-600-800 font-medium">22,747</td>
                                            <td class="py-2.5 text-right font-medium text-primary-900">22.7%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Friday</td>
                                            <td class="py-2.5 text-right text-slate-600">17,842</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">17.8%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Saturday</td>
                                            <td class="py-2.5 text-right text-slate-600">682</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">0.7%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2.5 font-medium">Sunday</td>
                                            <td class="py-2.5 text-right text-slate-600">339</td>
                                            <td class="py-2.5 text-right font-semibold text-primary-900">0.3%</td>
                                        </tr>
                                        <tr class="font-bold border-t-2 border-slate-200 bg-slate-50/50">
                                            <td class="py-2.5 font-bold text-slate-900">Total</td>
                                            <td class="py-2.5 text-right text-slate-900">100,019</td>
                                            <td class="py-2.5 text-right font-bold text-primary-900">100.0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Part 4: School Year Breakdown in Chronological Order -->
                        <div class="border-t border-sky-500 pt-5">
                            <div class="overflow-x-auto max-w-xl">
                                <table class="w-full text-left text-xs border-collapse">
                                    <thead>
                                        <tr class="border-b border-slate-100 text-slate-400 sticky top-0 bg-white">
                                            <th class="pb-2 font-semibold">Month</th>
                                            <th class="pb-2 font-semibold text-right">Volume</th>
                                            <th class="pb-2 font-semibold text-right">% of Logs</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-slate-50 text-slate-700">
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">July 2025</td>
                                            <td class="py-2 text-right text-slate-600">23</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">0.02%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">August 2025</td>
                                            <td class="py-2 text-right text-slate-600">8,500</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">8.50%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">September 2025</td>
                                            <td class="py-2 text-right text-slate-600">8,305</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">8.30%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">October 2025</td>
                                            <td class="py-2 text-right text-slate-600">9,200</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">9.20%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">November 2025</td>
                                            <td class="py-2 text-right text-slate-600">6,123</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">6.12%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">December 2025</td>
                                            <td class="py-2 text-right text-slate-600">7,200</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">7.20%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">January 2026</td>
                                            <td class="py-2 text-right text-slate-600">14,487</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">14.48%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">February 2026</td>
                                            <td class="py-2 text-right text-slate-600">9,787</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">9.79%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">March 2026</td>
                                            <td class="py-2 text-right text-slate-600">11,549</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">11.55%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">April 2026</td>
                                            <td class="py-2 text-right text-slate-600">9,446</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">9.44%</td>
                                        </tr>
                                        <tr class="hover:bg-slate-50 transition-colors">
                                            <td class="py-2 font-medium">May 2026</td>
                                            <td class="py-2 text-right text-slate-600">13,461</td>
                                            <td class="py-2 text-right font-semibold text-primary-900">13.46%</td>
                                        </tr>
                                        <tr class="font-bold border-t-2 border-slate-200 bg-slate-50/50">
                                            <td class="py-2 font-bold text-slate-900">Total</td>
                                            <td class="py-2 text-right text-slate-900">100,019</td>
                                            <td class="py-2 text-right font-bold text-primary-900">100.0%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Secondary KPI Card -->
                    <div class="lg:col-span-5 flex flex-col gap-6">
                        <!-- Card: Cohorts -->
                        <div class="dashboard-card p-6 flex flex-col justify-between min-h-[140px]">
                            <span class="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">Number of Learning Coaches</span>
                            <div class="my-2">
                                <h2 class="text-3xl font-extrabold text-primary-900">3,646</h2>
                                <p class="text-xs text-slate-500 mt-1">Learning coaches &amp; students monitored</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tables Exploration Pane -->
                <div id="tab-tables" class="hidden flex-1 flex overflow-hidden">
                    <!-- Left Sidebar Table Picker -->
                    <div class="w-72 border-r border-slate-200 bg-white flex flex-col shrink-0">
                        <div class="p-4 border-b border-slate-200">
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Select
                                Dataset Table</span>
                            <input type="text" id="tableSearch" placeholder="Search tables..."
                                oninput="filterTableList()"
                                class="w-full border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-primary-600">
                        </div>
                        <div class="flex-1 overflow-y-auto divide-y divide-slate-100" id="tableListContainer">
                            <!-- Populated by JS -->
                        </div>
                    </div>

                    <!-- Right Table View Area (Pivoted / Re-formatted to match user screenshot) -->
                    <div class="flex-1 bg-white overflow-y-auto p-8 space-y-6">
                        <div>
                            <h2 class="text-2xl font-bold text-primary-900" id="selectedTableTitle">Communication
                                Channel
                                Mix</h2>
                            <p class="text-xs text-slate-500 mt-1" id="selectedTableDesc">Analysis of interactions
                                logged by
                                communication type.</p>
                        </div>

                        <!-- Visual Representation Area -->
                        <div>
                            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 block">TABLE
                                VISUAL REPRESENTATION</span>
                            <div class="h-72 w-full relative">
                                <canvas id="tableViewerChart"></canvas>
                            </div>
                        </div>

                        <!-- Pivoted Data Table below visual element -->
                        <div class="pt-4 border-t border-slate-100">
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-xs border-collapse" id="interactiveDataGrid">
                                    <!-- Populated dynamically by JS -->
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Javascript Dashboard and Table Data Handler -->
        <script>
            // Data Dictionary (Pivoted by default for horizontal tabular layout)
            const datasets = [
                {
                    id: "tbl-channel-mix",
                    title: "Communication Channel Mix",
                    cohort: "Full Dataset (100,019 logs)",
                    desc: "Outreach volume distribution across primary interaction types",
                    headers: ["Metrics Key", "Parent Contact", "Stride Email", "Student Contact", "Office", "Special Programs", "Other Combined"],
                    rows: [
                        ["Volume", "46,476", "25,378", "14,037", "6,284", "5,973", "<2,000"],
                        ["% of Logs", "46.5%", "25.4%", "14.0%", "6.3%", "6.0%", "<2.0%"]
                    ],
                    chartType: "bar",
                    labels: ["Parent Contact", "Stride Email", "Student Contact", "Office", "Special Programs", "Other Combined"],
                    dataPoints: [46476, 25378, 14037, 6284, 5973, 1871],
                    colors: ["#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a"],
                    insight: "Parent Contact stands out as the dominant outreach mechanism, accounting for nearly half of all operations. Engagement teams concentrate their core workflows around learning coach support channels."
                },
                {
                    id: "tbl-parent-subtypes",
                    title: "Parent Contact Log Subtypes",
                    cohort: "Full Dataset (100,019 logs)",
                    desc: "Analysis of response states from parent-directed outreach",
                    headers: ["Metrics Key", "No Connection", "Made Connection", "Connection Attempt"],
                    rows: [
                        ["Volume", "13,698", "9,201", "3,295"],
                        ["% of Parent Logs", "52.3%", "35.1%", "12.6%"]
                    ],
                    chartType: "doughnut",
                    labels: ["No Connection", "Made Connection", "Connection Attempt"],
                    dataPoints: [13698, 9201, 3295],
                    colors: ["#1e3a8a", "#2563eb", "#cbd5e1"],
                    insight: "Over half of parent-directed interactions result in 'No Connection'. This represents a significant operational overhead where outreach protocols consume resources without achieving contact."
                },
                {
                    id: "tbl-student-subtypes",
                    title: "Student Contact Log Subtypes",
                    cohort: "Full Dataset (100,019 logs)",
                    desc: "Detailed results of student-directed communications",
                    headers: ["Metrics Key", "Made Connection", "No Connection", "Grad Plan Conference Fall", "Grad Plan Conference Spring", "Enduring Connection Calls"],
                    rows: [
                        ["Volume", "3,037", "2,623", "805", "478", "179"],
                        ["% of Student Logs", "42.7%", "36.8%", "11.3%", "6.7%", "2.5%"]
                    ],
                    chartType: "bar",
                    labels: ["Made Connection", "No Connection", "Grad Plan Fall", "Grad Plan Spring", "Enduring Calls"],
                    dataPoints: [3037, 2623, 805, 478, 179],
                    colors: ["#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a"],
                    insight: "Student-directed interactions are highly advising and coaching-focused, featuring much higher rates of successful graduation planning conferences and 'Made Connection' outcomes compared to parent logs."
                },
                {
                    id: "tbl-monthly-volume",
                    title: "Monthly Interaction Volume",
                    cohort: "Full Dataset (100,019 logs)",
                    desc: "Total log count trends across the academic",
                    headers: ["Metrics Key", "July", "August", "September", "October", "November", "December", "January", "February", "March", "April", "May"],
                    rows: [
                        ["Logged Interactions", "23", "8,500", "8,305", "9,200", "6,123", "7,200", "14,487", "9,787", "11,549", "9,446", "13,461"]
                    ],
                    chartType: "line",
                    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
                    dataPoints: [23, 8500, 8305, 9200, 6123, 7200, 14487, 9787, 11549, 9446, 13461],
                    colors: ["#2563eb"],
                    insight: "Outreach surges are driven directly by predictable academic milestones: January semester start audits, March grade checkups, and May credit recovery locks. Staffing load fluctuates heavily with these dates."
                },
                {
                    id: "tbl-lc-messages",
                    title: "Learning Coach Annual Message Average",
                    cohort: "LC Experience (3,646 LCs)",
                    desc: "Average annual touchpoint frequency for an individual LC profile",
                    headers: ["Metrics Key", "Parent Contact", "Stride Email", "Student Contact", "Office Messages", "Special Programs"],
                    rows: [
                        ["Avg. Messages / Year", "12.75", "6.96", "3.85", "1.72", "1.64"],
                        ["Monthly Equiv.", "1.06", "0.58", "0.32", "0.14", "0.13"]
                    ],
                    chartType: "bar",
                    labels: ["Parent Contact", "Stride Email", "Student Contact", "Office Messages", "Special Programs"],
                    dataPoints: [12.75, 6.96, 3.85, 1.72, 1.64],
                    colors: ["#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a"],
                    insight: "The average Learning Coach receives roughly 27.4 messages per school year (~2.8 messages per month). Most of these communications are relationship-driven rather than administrative broadcasts."
                },
                {
                    id: "tbl-lc-subtypes",
                    title: "Learning Coach Subtype Experience",
                    cohort: "LC Experience (3,646 LCs)",
                    desc: "Average contact outcomes experienced by an individual LC",
                    headers: ["Metrics Key", "No Connection", "Made Connection", "Connection Attempt", "Grad Plan Fall Conf.", "Grad Plan Spring Conf."],
                    rows: [
                        ["Avg. Contacts / Year", "4.48", "3.36", "0.91", "0.22", "0.13"],
                        ["Proportion", "49.2%", "36.9%", "10.0%", "2.4%", "1.4%"]
                    ],
                    chartType: "bar",
                    labels: ["No Connection", "Made Connection", "Attempt", "Fall Conf.", "Spring Conf."],
                    dataPoints: [4.48, 3.36, 0.91, 0.22, 0.13],
                    colors: ["#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a", "#1e3a8a"],
                    insight: "An average Learning Coach experiences more outreach failures (4.48 No Connections) than successful direct connections (3.36) annually, illustrating systemic contact hurdles."
                }
            ];

            let selectedTableIndex = 0;
            let tableViewerChartInstance = null;

            // Tab Switching Logic
            function switchTab(tabId) {
                document.getElementById('tab-dashboard').classList.add('hidden');
                document.getElementById('tab-tables').classList.add('hidden');
                document.getElementById('pill-dashboard').className = "px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all";
                document.getElementById('pill-tables').className = "px-4 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 transition-all";

                if (tabId === 'dashboard') {
                    document.getElementById('tab-dashboard').classList.remove('hidden');
                    document.getElementById('pill-dashboard').className = "px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-900 text-white shadow-sm transition-all";
                } else {
                    document.getElementById('tab-tables').classList.remove('hidden');
                    document.getElementById('pill-tables').className = "px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-900 text-white shadow-sm transition-all";
                    renderTablesList();
                    loadSelectedTable();
                }
            }

            // Render Sidebar Tables List
            function renderTablesList(filterQuery = "") {
                const container = document.getElementById("tableListContainer");
                container.innerHTML = "";

                datasets.forEach((dataset, idx) => {
                    if (filterQuery && !dataset.title.toLowerCase().includes(filterQuery.toLowerCase())) return;

                    const button = document.createElement("button");
                    button.className = `w-full text-left p-4 hover:bg-slate-50 transition-colors flex flex-col gap-1 ${idx === selectedTableIndex ? 'bg-primary-50 border-r-4 border-primary-900' : ''}`;
                    button.innerHTML = `
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">${dataset.cohort}</span>
                    <span class="text-xs font-bold text-primary-900">${dataset.title}</span>
                `;
                    button.onclick = () => {
                        selectedTableIndex = idx;
                        renderTablesList(filterQuery);
                        loadSelectedTable();
                    };
                    container.appendChild(button);
                });
            }

            function filterTableList() {
                const query = document.getElementById("tableSearch").value;
                renderTablesList(query);
            }

            // Load Table Logic
            function loadSelectedTable() {
                const tbl = datasets[selectedTableIndex];

                document.getElementById("selectedTableTitle").textContent = tbl.title;
                document.getElementById("selectedTableDesc").textContent = tbl.desc;

                // Render Table Element
                const tableGrid = document.getElementById("interactiveDataGrid");
                tableGrid.innerHTML = "";

                // Create Headers
                const thead = document.createElement("thead");
                const headerRow = document.createElement("tr");
                headerRow.className = "border-b border-slate-200 text-slate-400 text-left bg-slate-50/50";
                tbl.headers.forEach((h, hIdx) => {
                    const th = document.createElement("th");
                    th.className = `p-3 font-semibold ${hIdx > 0 ? 'text-right' : ''}`;
                    th.textContent = h;
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                tableGrid.appendChild(thead);

                // Create Rows
                const tbody = document.createElement("tbody");
                tbody.className = "divide-y divide-slate-100";
                tbl.rows.forEach(row => {
                    const tr = document.createElement("tr");
                    tr.className = "interactive-row";
                    row.forEach((val, valIdx) => {
                        const td = document.createElement("td");
                        td.className = `p-3 text-slate-700 ${valIdx === 0 ? 'font-medium' : 'text-right'}`;
                        td.textContent = val;
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });
                tableGrid.appendChild(tbody);

                // Update Chart.js inside table viewer
                updateTableChart(tbl);
            }

            // Render Table Visual Representation Chart
            function updateTableChart(tbl) {
                const ctx = document.getElementById("tableViewerChart").getContext("2d");

                if (tableViewerChartInstance) {
                    tableViewerChartInstance.destroy();
                }

                const chartConfig = {
                    type: tbl.chartType === 'line' ? 'line' : 'bar',
                    data: {
                        labels: tbl.labels,
                        datasets: [{
                            label: tbl.title,
                            data: tbl.dataPoints,
                            backgroundColor: tbl.chartType === 'line' ? 'rgba(37, 99, 235, 0.95)' : '#1e3a8a',
                            borderColor: '#1e3a8a',
                            borderWidth: tbl.chartType === 'line' ? 2 : 0,
                            borderRadius: tbl.chartType === 'line' ? 0 : 6,
                            fill: tbl.chartType === 'line',
                            pointBackgroundColor: tbl.chartType === 'line' ? '#2563eb' : 'transparent',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 2,
                            pointRadius: 6,
                            pointHoverRadius: 8
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: { grid: { display: false }, ticks: { color: '#64748b' } },
                            y: {
                                grid: { color: '#f1f5f9' },
                                ticks: {
                                    color: '#64748b',
                                    callback: function (value) {
                                        return value.toLocaleString();
                                    }
                                }
                            }
                        },
                        plugins: {
                            legend: { display: false }
                        }
                    }
                };

                // Custom adjustments for doughnut
                if (tbl.chartType === 'doughnut') {
                    chartConfig.type = 'doughnut';
                    chartConfig.options.scales = { x: { display: false }, y: { display: false } };
                    chartConfig.options.plugins.legend = { display: true, position: 'right', labels: { color: '#64748b' } };
                }

                tableViewerChartInstance = new Chart(ctx, chartConfig);
            }

            // --- Dashboard Static Visualizations Setup ---

            // Dashboard Card 2: Outcomes Stacked Bar
            const canvasDashOutcomes = document.getElementById('dashboardOutcomesChart');
            if (canvasDashOutcomes) {
                const ctxDashOutcomes = canvasDashOutcomes.getContext('2d');
                new Chart(ctxDashOutcomes, {
                    type: 'bar',
                    data: {
                        labels: ['Parent Log Results', 'Student Log Results'],
                        datasets: [
                            {
                                label: 'Made Connection',
                                data: [9201, 3037],
                                backgroundColor: '#2563eb', // primary blue
                                borderRadius: 4
                            },
                            {
                                label: 'No Connection',
                                data: [13698, 2623],
                                backgroundColor: '#1e3a8a', // dark blue
                                borderRadius: 4
                            },
                            {
                                label: 'Connection Attempt',
                                data: [3295, 0],
                                backgroundColor: '#cbd5e1', // light slate
                                borderRadius: 4
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            x: { stacked: true, grid: { display: false } },
                            y: { stacked: true, grid: { color: '#f1f5f9' } }
                        },
                        plugins: {
                            legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } }
                        }
                    }
                });
            }

        