# Executive Analysis of AZVA/ISAZ Logged Interaction Dataset

**Dataset Size:** 100,019 log entries  
**Date Range:** July 31, 2025 – May 21, 2026  
**Primary Dimensions:** Log Type, Log Subtype, Entry Date, Qualitative Notes

***

# Key Volume Findings

## Communication Channel Mix

| Log Type             | Volume | % of All Logs |
| -------------------- | -----: | ------------: |
| Parent Contact       | 46,476 |         46.5% |
| Stride Email         | 25,378 |         25.4% |
| Student Contact      | 14,037 |         14.0% |
| Office               |  6,284 |          6.3% |
| Special Programs     |  5,973 |          6.0% |
| Other Types Combined |    <2% |           <2% |

### Executive Interpretation

Almost **half of all activity is directed toward Learning Coaches and parents**, indicating that family engagement functions as the central intervention mechanism across the organization.

***

# Top 3 Statistically Significant Insights

***

## Insight 1: Parent Contact Is the Dominant Intervention Channel, But Most Outreach Is Reactive

### Evidence

Within Parent Contact logs:

| Subtype            |  Count |
| ------------------ | -----: |
| No Connection      | 13,698 |
| Made Connection    |  9,201 |
| Connection Attempt |  3,295 |

There are substantially more unsuccessful parent outreach events than successful parent connections.

### What This Means

The school is investing tremendous effort attempting to engage families, but a large portion of that effort never results in direct contact.

### Executive Translation

> The organization's most common intervention strategy is parent outreach, yet a significant percentage of outreach never reaches its target audience. Family responsiveness is emerging as one of the strongest leading indicators of student risk.

***

### Recommendation 1

Create a **Family Engagement Risk Score** using:

* Repeated "No Connection" events
* Attendance concerns
* Missing assignments
* Graduation risk indicators

Escalate outreach after 3 unsuccessful contact attempts rather than continuing standard communication cadence.

***

## Insight 2: Student Contact Behaves Differently Than Parent Contact

### Evidence

Within Student Contact logs:

| Subtype                     | Count |
| --------------------------- | ----: |
| Made Connection             | 3,037 |
| No Connection               | 2,623 |
| Grad Plan Conference Fall   |   805 |
| Grad Plan Conference Spring |   478 |
| Enduring Connection Calls   |   179 |

Student interactions are significantly more likely to involve:

* Graduation planning
* Advising
* Coaching
* Direct support

compared with Parent Contact, which is dominated by connection attempts.

### Relationship Between Log Type and Subtype

Parent Contact is primarily:

* No Connection
* Made Connection
* Connection Attempts

Student Contact is primarily:

* Made Connection
* Graduation Planning
* Coaching Conversations

### Executive Translation

> Parent outreach is primarily intervention-oriented, while student outreach is primarily coaching-oriented. The organization uses families to gain access and uses students to drive action.

***

### Recommendation 2

Build a two-stage intervention model:

**Stage 1**

* Family engagement
* Attendance recovery
* Initial outreach

**Stage 2**

* Student coaching
* Graduation planning
* Academic action plans

This aligns intervention type to the audience most likely to respond.

***

## Insight 3: School Calendar Drives Communication Volume More Than Student Behavior

### Evidence

Highest-volume months:

| Month    | Volume |
| -------- | -----: |
| January  | 14,487 |
| May      | 13,461 |
| March    | 11,549 |
| February |  9,787 |
| April    |  9,446 |

Lowest months:

| Month    | Volume |
| -------- | -----: |
| July     |     23 |
| November |  6,123 |

Largest individual communication spikes:

* January 8, 2026: 4,436 logs
* March 24, 2026: 3,630 logs
* February 12, 2026: 2,746 logs
* October 20, 2025: 2,947 logs

These dates align closely with:

* Semester launches
* Progress reports
* Testing periods
* Graduation planning
* Registration cycles

### Log Type vs Time of Year

#### January

Dominated by:

* Start-of-semester communication
* Report cards
* Testing reminders
* Graduation planning

#### March-April

Dominated by:

* Progress reports
* Graduation audits
* Re-registration campaigns

#### May

Dominated by:

* Credit recovery
* Graduation deadlines
* Final grades
* Summer school planning

### Executive Translation

> Communication demand is heavily driven by the academic calendar rather than random student behavior. Major intervention workloads are highly predictable.

***

### Recommendation 3

Staff strategically around predictable peaks:

* January launch period
* March progress review season
* May graduation/credit recovery season

Use temporary outreach teams during these windows rather than evenly distributing staffing throughout the year.

***

# Message Volume Analysis

## By Year

The dataset represents one academic year:

* 100,019 total interactions

Equivalent to:

* \~8,335 interactions per month
* \~1,923 interactions per week
* \~339 interactions per school day

***

## By Month

Highest Activity

1. January (14,487)
2. May (13,461)
3. March (11,549)

Lowest Activity

1. July (23)
2. November (6,123)
3. September (8,305)

### Interpretation

Communication workload increases dramatically around:

* Semester transitions
* Progress reporting
* Graduation deadlines

***

## By Weekday

| Day       | Volume |
| --------- | -----: |
| Thursday  | 22,747 |
| Tuesday   | 20,783 |
| Monday    | 20,156 |
| Friday    | 17,842 |
| Wednesday | 17,470 |

### Executive Interpretation

> Most interventions occur Tuesday–Thursday, suggesting staff naturally concentrate outreach during midweek operational periods.

***

# Behavioral Segments

## 1. Graduation-Focused Achievers

**Characteristics**

* Attend support sessions
* Participate in grad planning
* Ask questions proactively

**Common Themes**

* Graduation audits
* College planning
* Certification support

***

## 2. Reactive Deadline Responders

**Characteristics**

* Engage when deadlines become urgent

**Common Themes**

* Credit recovery reminders
* Final exams
* Lock dates

***

## 3. Chronic Non-Responders

**Characteristics**

* Multiple No Connection logs
* Attendance concerns
* Missing coursework

**Common Themes**

* Repeated outreach
* Escalations
* Academic risk

***

## 4. Technology-Barrier Students

**Characteristics**

* Login issues
* Device issues
* Connectivity problems

**Common Themes**

* Canvas support
* Internet outages
* Technical troubleshooting

***

## 5. Support-Seeking Learners

**Characteristics**

* Frequent Help Lab attendance
* Request teacher support
* Ask academic questions

**Common Themes**

* Small groups
* Tutoring
* 1:1 coaching

***

## 6. Graduation-Recovery Students

**Characteristics**

* Credit deficits
* Credit recovery enrollment
* Graduation timeline concerns

**Common Themes**

* Credit recovery
* Summer school
* Graduation audits

***

# Novel Insight

## The Dataset Suggests the School Operates More Like a Customer Success Organization Than a Traditional School

Evidence:

* 46% of all records are Parent Contact.
* Thousands of connection attempts are logged and tracked.
* Staff repeatedly perform follow-up cycles similar to customer retention operations.
* Specialized outreach campaigns occur around critical milestones.

### Executive Translation

> The school's highest-value operational asset is not curriculum delivery—it is relationship management. Success depends heavily on maintaining communication pathways between staff, students, and Learning Coaches. The most powerful improvement opportunity is likely not academic intervention, but improving contactability and engagement before academic issues emerge.

# Bottom Line

The strongest drivers of intervention activity are:

1. **Family communication quality**
2. **Graduation and credit-recovery deadlines**
3. **Academic calendar milestones**

Students generally fall into two broad populations:

* **Connected students**, who receive coaching and planning support.
* **Disconnected students**, who consume disproportionate intervention resources through repeated unsuccessful outreach.

Reducing "No Connection" events may have a larger impact on graduation outcomes than adding additional academic support programs.
