//
//  ContentView.swift
//  DevSoutinho Labs WatchKit Extension
//
//  Created by Mario Souto on 29/06/22.
//
// Reference: https://www.youtube.com/watch?v=5wIfHyZuDsc&list=PLwnphfuyBZiDslkTCQ2Mg0nF0Z8u9NPbl&index=1


import SwiftUI

struct HomeItem {
    let id: UUID
    let text: String
    var view: AnyView
}


struct ContentView: View {
    @State private var isDialogVisible: Bool = false;
    private var items = [
        HomeItem(
            id: UUID(),
            text: "YouTube",
            view: AnyView(YouTubeScreen())
        ),
        HomeItem(
            id: UUID(),
            text: "Pix4Me",
            view: AnyView(Pix4Screen())
        ),
        HomeItem(
            id: UUID(),
            text: "Demo TODO List",
            view: AnyView(ListWithMemoryScreenView())
        ),
    ];
    

    var body: some View {
        ScrollView {
            VStack {
                ForEach(0..<items.count, id: \.self) { i in
                    NavigationLink(destination: items[i].view) {
                        HStack(alignment: .center){
                            Capsule()
                                .frame(width: 4)
                                .foregroundColor(.accentColor)
                            Text(items[i].text)
                                .lineLimit(1)
                                .padding(.leading, 5)
                            Spacer()
                            
                        }
                    }
                }
            }
        }
        .navigationTitle("DevSoutinho Labs")
        .foregroundColor(Color.white)
        
    }
}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}


/*
NavigationLink(destination: DetailsScreenView()) {
    Text("Navigation Link")
}
.padding(.vertical, 10.0)

NavigationLink(destination: ListWithMemoryScreenView()) {
    Text("List View")
}
.padding(.vertical, 10.0)

Button {
    isDialogVisible.toggle()
} label: { Text("Dialog") }
    .sheet(isPresented: $isDialogVisible, content: {
        CreditsView(randomNumber: 10)
    })

Link("Link to Apple.com", destination: URL(string: "https://www.apple.com")!)
 */
