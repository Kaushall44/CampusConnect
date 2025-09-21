import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, BookOpen, Calendar, Bell, Target, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [user] = useState(() => {
    const stored = localStorage.getItem("campusConnectUser");
    return stored ? JSON.parse(stored) : null;
  });

  const nextClass = {
    subject: "Data Structures",
    time: "10:30 AM",
    room: "Room 205",
    professor: "Dr. Smith"
  };

  const attendanceData = [
    { subject: "Data Structures", attended: 18, total: 20, percentage: 90 },
    { subject: "Operating Systems", attended: 15, total: 20, percentage: 75 },
    { subject: "Database Systems", attended: 14, total: 18, percentage: 78 },
    { subject: "Computer Networks", attended: 16, total: 19, percentage: 84 }
  ];

  const upcomingEvents = [
    { title: "Assignment 2 Due", date: "Tomorrow", type: "deadline" },
    { title: "Mid-term Exam", date: "Oct 15", type: "exam" },
    { title: "Lab Quiz", date: "Oct 10", type: "quiz" }
  ];

  const getBadgeColor = (percentage: number) => {
    if (percentage >= 85) return "secondary";
    if (percentage >= 75) return "outline";
    return "destructive";
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user?.name?.split(' ')[0] || 'Student'}!</h1>
          <p className="text-muted-foreground">{user?.course} • Section {user?.section}</p>
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      {/* Next Class Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Next Class</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{nextClass.subject}</h3>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {nextClass.time}
              </span>
              <span>{nextClass.room}</span>
              <span>{nextClass.professor}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm">Mark Present</Button>
            <Button size="sm" variant="outline">Mark Absent</Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Overall Attendance</p>
                <p className="text-2xl font-bold">82%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold">16/18</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Attendance Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {attendanceData.map((subject, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{subject.subject}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    {subject.attended}/{subject.total}
                  </span>
                  <Badge variant={getBadgeColor(subject.percentage)}>
                    {subject.percentage}%
                  </Badge>
                </div>
              </div>
              <Progress value={subject.percentage} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">{event.date}</p>
              </div>
              <Badge variant="outline">{event.type}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}