import React from 'react';
import { Link } from 'wouter';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { insertSchoolSchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';

// Extend the school schema with additional validation
const formSchema = insertSchoolSchema.extend({
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms to proceed."
  })
});

type FormValues = z.infer<typeof formSchema>;

export function RegisterSection() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      schoolName: '',
      schoolAddress: '',
      postcode: '',
      contactName: '',
      contactPosition: '',
      contactEmail: '',
      contactPhone: '',
      numStudents: 0,
      agreedToTerms: false
    }
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Remove the agreedToTerms field which is not in the schema
      const { agreedToTerms, ...schoolData } = data;
      
      const res = await apiRequest('POST', '/api/register-school', schoolData);
      await res.json();
      
      toast({
        title: "Registration Successful",
        description: "Your school has been registered successfully. We will contact you with further details soon.",
      });
      
      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="register" className="py-16 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Register Your School</h2>
          <p className="text-lg text-slate-600">
            Complete the form below to register your school for the West Midlands Mathematics Competition
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-slate-50 rounded-lg shadow-sm p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">School Information</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="schoolName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>School Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter school name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="schoolAddress"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>School Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="Full school address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postcode *</FormLabel>
                        <FormControl>
                          <Input placeholder="School postcode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Teacher or coordinator" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactPosition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Maths Teacher" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Contact email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Contact phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Participant Information</h3>
                <FormField
                  control={form.control}
                  name="numStudents"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Number of Participants *</FormLabel>
                      <FormControl>
                        <Input 
                          type="number" 
                          min="1" 
                          placeholder="Number of students" 
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                        />
                      </FormControl>
                      <p className="mt-1 text-sm text-slate-500">Entry fee is £3 per student. All profits will be donated to UKMT.</p>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="agreedToTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-slate-700">
                        I confirm that my school would like to participate in the West Midlands Mathematics Competition. 
                        I understand that the entry fee is £3 per student and that all profits will be donated to UKMT.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <div className="text-center">
                <Button type="submit" className="bg-primary text-white px-6 py-6 rounded-md font-medium hover:bg-primary/90">
                  Submit Registration
                </Button>
              </div>
            </form>
          </Form>
        </div>
        
        <div className="max-w-3xl mx-auto mt-8 bg-blue-50 p-4 rounded-md text-center">
          <p className="text-slate-700">
            After registration, we will contact you with payment information and further details about the competition.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default RegisterSection;
